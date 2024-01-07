import React, { createContext, useContext, useReducer } from 'react'

export const DataLayerContext = createContext()

//this data layer is so that there is accessibility of data from spotify to all components of app, and we don't have to drill again and again to acces the data from spotify api
export const DataLayer = ({ initialState , reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext)