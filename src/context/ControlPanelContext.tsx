import { createContext, ReactNode, useEffect, useState } from 'react';
import { IControlPanelContext } from '../interface/IControlPanelContext';

export const ControlPanelContext = createContext({} as IControlPanelContext);

export const ControlPanelProvider = (props: { children: ReactNode }) => {
    const value = {
    }

    return (
        <ControlPanelContext.Provider value={value}>
            {props.children}
        </ControlPanelContext.Provider>
    )
}