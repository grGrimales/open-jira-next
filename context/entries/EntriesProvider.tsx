import { FC, PropsWithChildren, useReducer, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interface';
import { entriesApi } from '../../apis';
import { useRouter } from 'next/router';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}



export const EntriesProvider: FC<PropsWithChildren<any>> = ({ children }) => {

    const router = useRouter();

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async (description: string) => {

        const { data } = await entriesApi.post<Entry>('/entries', { description })

        dispatch({ type: '[Entry] Add-Entry', payload: data })
        refreshEntries()
    }


    const updateEntry = async (entry: Entry, showSnackbar = false) => {

        try {

            const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, { description: entry.description, status: entry.status })

            dispatch({ type: '[Entry] Updated-Entry', payload: data })
            if (showSnackbar)
                enqueueSnackbar('Entada Actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'

                    }


                })

        } catch (error) {
            console.log(error)
        }
    }


    const deleteEntry = async (entry: Entry, showSnackbar = false) => {

        try {

            const { data } = await entriesApi.delete<Entry>(`/entries/${entry._id}`)

            dispatch({ type: '[Entry] Delete-Entry', payload: entry })
            if (showSnackbar)
                enqueueSnackbar('Se elimino correctamente', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'

                    }





                })

            router.push('/')

        } catch (error) {
            console.log(error)
        }
    }

    const refreshEntries = async () => {

        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entry] Refresh-Data', payload: data })

    }

    useEffect(() => {
        refreshEntries();
    }, [])


    return (
        <EntriesContext.Provider value={{
            ...state,

            addNewEntry,
            updateEntry,
            deleteEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

function useNavigate() {
    throw new Error('Function not implemented.');
}
