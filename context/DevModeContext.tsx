import React, { createContext, useState, useMemo } from 'react'

export const DevModeContext = createContext({
    devMode: '',
    setDevMode: (devMode: string) => {}
});
