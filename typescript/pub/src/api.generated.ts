import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type getElementAt = g_this.SYNC.A.F.GetElementAt
    
    export type getLength = g_this.SYNC.A.F.GetLength
}

export type API = {
    getElementAt: A.getElementAt
    getLength: A.getLength
}