"use client"

import { store } from '@/app/redux-toolkit/store'
import { Provider } from 'react-redux'

export function ReactProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}