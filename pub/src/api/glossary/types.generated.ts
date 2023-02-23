import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Array {
        
        export type A<GPType> = GPType
    }
    
    export type Array<GPType> = pt.Array<GPType>
    
    export type Type<GPType> = GPType
}