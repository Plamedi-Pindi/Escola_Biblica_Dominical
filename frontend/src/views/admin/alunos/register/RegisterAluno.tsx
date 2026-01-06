
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";


import CustomContainer from "../../../../components/Container/Container";
import CustomForm from "../../../../components/Form/CustomForm";
import MainAPI from "../../../../services/apis/MainAPI";
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";

type FromType = {
    name: String,
    initDate: String, 
    endtDate: String,
}
const NewAlunoComponent = () => {
    const [formData, setFormData] = useState<FromType>({ name: '', initDate: '', endtDate: '' });

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await MainAPI.post('/anoLectivo/create', formData)
            console.log(response.data);
            
            return response
        } catch (error) {
            console.error("Error ao criar ano lectivo", error);
        }
    }

    return (
        <CustomContainer style="bg-white p-4 rounded-lg absolute top-[50%] left-[50%] -translate-[50%] w-[95%] ">
            <Typography className="!text-lg !mb-2 !font-bold">Criar Ano Lectivo</Typography>

            <CustomForm onSubmit={handleSubmit} >
                <div className="mb-6">
                    <TextField
                        type="text"
                        label="Ano lectivo"
                        variant="standard"
                        fullWidth
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="flex items-center justify-between  mb-10 w-full ">
                    {/* Init Date */}
                    <div>
                        <FormLabel className="block" >Início</FormLabel>
                        <TextField
                            type="date"
                            variant="standard"
                            onChange={(e) => setFormData({ ...formData, initDate: e.target.value })}
                        />
                    </div>

                    {/* End Date  */}
                    <div>
                        <FormLabel className="block">Encerramento</FormLabel>
                        <TextField
                            type="date"
                            variant="standard"
                            onChange={(e) => setFormData({ ...formData, endtDate: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4 pb-4  ">
                    <Button variant="outlined" className="!text-sm" >Cancelar</Button>
                    <Button variant="contained" className="!text-sm" type="submit" >Criar</Button>
                </div>
            </CustomForm>

        </CustomContainer>
    )
}

export default NewAlunoComponent
