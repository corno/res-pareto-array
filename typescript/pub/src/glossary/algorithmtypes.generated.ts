import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {
        
        
        export namespace F {
            export type GetElementAt = <GType>($: T.GetElementAtData<GType>) => T.Type<GType>
        }
        
        
        export namespace F {
            export type GetLength = <GType>($: T.Array<GType>) => g_common.T.Number
        }
    }
}