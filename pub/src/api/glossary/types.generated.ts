import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Array {
        
        export type A<GPType> = GPType
    }
    
    export type Array<GPType> = pt.Array<GPType>
    
    export namespace GetElementAtData {
        
        export type array<GPType> = T.Array<GPType>
        
        export type index<GPType> = number
    }
    
    export type GetElementAtData<GPType> = {
        readonly 'array': T.Array<GPType>
        readonly 'index': number
    }
    
    export type Type<GPType> = GPType
}