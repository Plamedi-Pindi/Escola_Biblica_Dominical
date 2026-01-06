


import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";


import CustomContainer from "../../../../components/Container/Container";
import CustomForm from "../../../../components/Form/CustomForm";
import MainAPI from "../../../../services/apis/MainAPI";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useAnoLectivoContext } from "../../../../contexts/anoLectivo/AnoLectivoContext";

type FromType = {
    name: String,
    closeDate: String,
    initDate: String,
}

type Props = {
    closeModal: () => void
}

const NewYearPage = ({ closeModal }: Props) => {
    const [formData, setFormData] = useState<FromType>({ name: '', initDate: '', closeDate: '' });
    const [isDisable, setIsDisable] = useState(true)

    const [, , setAnoLectivos] = useAnoLectivoContext();

    // 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await MainAPI.post('/anoLectivo/create', formData)
            setAnoLectivos(prev => [...prev, response.data])
            closeModal()
            return response
        } catch (error) {
            console.error("Error ao criar ano lectivo", error);
        }
    }

    // Disable Submit button
    useEffect(() => {
        const disableSubmit = () => {
            if (formData.closeDate == '' || formData.initDate == '' || formData.name == '') {
                setIsDisable(true)
            } else {
                setIsDisable(false)
            }
        }

        disableSubmit()
    }, [formData])

    // 
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: e.target.value })
    }

    // 
    const handleInitDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, initDate: e.target.value })
    }

    // 
    const handleCloseDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, closeDate: e.target.value })
    }


    return (
        <CustomContainer style="bg-white p-4 rounded-lg absolute top-[50%] left-[50%] -translate-[50%] w-[95%] ">
            <Typography className="!text-lg !mb-2 !font-bold">Criar Ano Lectivo</Typography>

            <CustomForm onSubmit={handleSubmit} >
                <div className="mb-6">
                    <TextField
                        type="text"
                        value={formData.name}
                        label="Ano lectivo"
                        variant="standard"
                        fullWidth
                        onChange={handleNameChange}
                    />
                </div>

                <div className="flex items-center justify-between  mb-10 w-full ">
                    {/* Init Date */}
                    <div>
                        <FormLabel className="block" >Início</FormLabel>
                        <TextField
                            type="date"
                            value={formData.initDate}
                            variant="standard"
                            onChange={handleInitDateChange}
                        />
                    </div>

                    {/* End Date  */}
                    <div>
                        <FormLabel className="block">Encerramento</FormLabel>
                        <TextField
                            type="date"
                            value={formData.closeDate}
                            variant="standard"
                            onChange={handleCloseDateChange}
                        />
                    </div>
                </div>


                <div className="flex justify-end gap-4 pb-4  ">
                    <Button onClick={closeModal} variant="outlined" className="!text-sm" >Cancelar</Button>
                    <Button variant="contained" className="!text-sm" type="submit" disabled={isDisable}>Criar</Button>
                </div>
            </CustomForm>

        </CustomContainer>
    )
}

export default NewYearPage