import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Array {
        
        export type T<GType> = GType
    }
    
    export type Array<GType> = pt.Array<GType>
    
    export namespace GetElementAtData {
        
        export type array<GType> = T.Array<GType>
        
        export type index<GType> = number
    }
    
    export type GetElementAtData<GType> = {
        readonly 'array': T.Array<GType>
        readonly 'index': number
    }
    
    export type Type<GType> = GType
}