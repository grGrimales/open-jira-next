import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAddding: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
}


export const UIContext = createContext({} as ContextProps);