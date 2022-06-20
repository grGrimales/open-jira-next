import { FC, PropsWithChildren, useReducer, useState } from "react";
import { UIContext, uiReducer } from './';


export interface UIState {
    sidemenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;



}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAdding: false,
    isDragging: false,

}

export const UIProvider: FC<PropsWithChildren<any>> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)


    const setIsAddingEntry = (isAddding: boolean) => {
        dispatch({ type: 'UI - Adding entry', payload: isAddding })
    }

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' })
    }

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging' })


    }

    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging' })


    }

    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu,

            setIsAddingEntry,

            startDragging,
            endDragging,

        }}>
            {children}
        </UIContext.Provider>

    )
}


