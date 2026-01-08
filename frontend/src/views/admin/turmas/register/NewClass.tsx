
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from '@mui/material/TextareaAutosize';


import CustomContainer from "../../../../components/Container/Container";
import CustomForm from "../../../../components/Form/CustomForm";
import MainAPI from "../../../../services/apis/MainAPI";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useAnoLectivoContext } from "../../../../contexts/anoLectivo/AnoLectivoContext";
import { useTurmaContext } from "../../../../contexts/turma/TurmaContext";

type FromType = {
    name: String,
    anoLectivo: String,
    desctription: String,
}



type Props = {
    closeModal: () => void
}

const NewClassPage = ({ closeModal }: Props) => {
    const [formData, setFormData] = useState<FromType>({ name: '', anoLectivo: '', desctription: '' }); // Estado do formulario
    const [isDisable, setIsDisable] = useState(true) // Estado para ativar ou desativar o botão de submisão
    const [anoLectivos] = useAnoLectivoContext(); // Contexto do componente anoLectivo
    const [, setTurmas] = useTurmaContext(); // Contexto do componente Turma

    // 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await MainAPI.post('/turma/create', formData)
            if (response) setTurmas(prev => [...prev, response.data])
            closeModal()
            console.log(response);

            return response
        } catch (error) {
            console.error("Error ao criar ano lectivo", error);
        }
    }

    // Disable Submit button
    useEffect(() => {
        const disableSubmit = () => {
            if (formData.anoLectivo == '' || formData.desctription == '' || formData.name == '') {
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
    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, desctription: e.target.value })
    }

    return (
        <CustomContainer style="bg-white p-4 rounded-lg absolute top-[50%] left-[50%] -translate-[50%] w-[95%] ">
            <Typography className="!text-lg !mb-2 !font-bold">Criar Turma</Typography>

            <CustomForm onSubmit={handleSubmit} >
                <div className="mb-6">
                    <TextField
                        type="text"
                        value={formData.name}
                        label="Turma"
                        variant="standard"
                        fullWidth
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mb-6">
                    <InputLabel id="anos">Ano Lectivo</InputLabel>
                    <Select
                        label="Ano Lectivo"
                        fullWidth
                        variant="standard"
                        value={formData.anoLectivo}
                        onChange={(e) => setFormData({ ...formData, anoLectivo: e.target.value })}
                    >
                        {anoLectivos.map(item => (
                            <MenuItem value={`${item._id}`}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </div>

                {/*  */}
                <div className="mb-6">
                    <InputLabel id="anos" className="mb-2">Discrição</InputLabel>
                    <TextareaAutosize
                        placeholder="Escreva qualquer coisa..."
                        minRows={3}
                        // value={formData.desctription}
                        onChange={handleDescriptionChange}
                        className="w-full outline-none border-1 border-gray-400 rounded-md p-2 text-gray-700 focus:border-1.5 focus:border-blue-700 duration-300"
                    />
                </div>

                <div className="flex justify-end gap-4 pb-4  ">
                    <Button onClick={closeModal} variant="outlined" className="!text-sm" >Cancelar</Button>
                    <Button variant="contained" className="!text-sm" type="submit" disabled={isDisable}>Criar</Button>
                </div>
            </CustomForm>
        </CustomContainer >
    )
}

export default NewClassPage