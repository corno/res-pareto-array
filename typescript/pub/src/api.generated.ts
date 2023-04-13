import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
}

export namespace A {
    
    export type getElementAt = () => g_this.SYNC.A.F.GetElementAt
    
    export type getLength = () => g_this.SYNC.A.F.GetLength
    
    export type merge = () => g_this.SYNC.A.F.Merge
}

export type API = {
    readonly 'getElementAt': A.getElementAt
    readonly 'getLength': A.getLength
    readonly 'merge': A.merge
}