import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Array {
        
        export type A<TType> = TType
    }
    
    export type Array<TType> = pt.Array<TType>
    
    export namespace GetElementAtData {
        
        export type array<TType> = T.Array<TType>
        
        export type index<TType> = number
    }
    
    export type GetElementAtData<TType> = {
        readonly 'array': T.Array<TType>
        readonly 'index': number
    }
}