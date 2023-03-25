import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type GetElementAt = <TType>($: T.GetElementAtData<TType>) => TType
        }
        
        
        export namespace F {
            export type GetLength = <TType>($: T.Array<TType>) => g_common.T.Number
        }
    }
}