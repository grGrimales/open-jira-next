import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined"
import { Button, Box, TextField } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';



export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext)
    const { setIsAddingEntry, isAdding } = useContext(UIContext)

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);


    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }


    const onSave = () => {

        if (inputValue.length === 0) return;
        addNewEntry(inputValue);
        setTouched(false);
        setIsAddingEntry(false)
        setInputValue('');

    }
    return (
        <Box sx={{ marginBottom: 2, paddingX: 3 }}>

            {isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva Entrada'
                        autoFocus
                        multiline
                        label='Nueva Entrada'
                        helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                        error={inputValue.length <= 0 && touched}
                        value={inputValue}
                        onChange={onTextFieldChange}
                        onBlur={() => setTouched(true)}

                    />

                    <Box display='flex' justifyContent='space-between'>

                        <Button variant="text" onClick={() => setIsAddingEntry(false)} >
                            Cancelar

                        </Button>

                        <Button variant="outlined" color="secondary" endIcon={<SaveOutlinedIcon />} onClick={onSave}>
                            Guardar

                        </Button>
                    </Box>
                </>
            ) : (
                <Button startIcon={<AddCircleOutlineIcon />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar Tarea
                </Button>


            )
            }




        </Box>
    )
}
