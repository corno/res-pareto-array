import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type getElementAt = <GAnnotation>() => g_this.SYNC.A.F.GetElementAt<GAnnotation>
    
    export type getLength = <GAnnotation>() => g_this.SYNC.A.F.GetLength<GAnnotation>
}

export type API = {
    readonly 'getElementAt': A.getElementAt
    readonly 'getLength': A.getLength
}