import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type IPush<GPType> = ($: T.Type<GPType>, ) => void

export type FBuild = <GPType>($: mcommon.T.Null, $c: ($i: IPush<GPType>) => void,) => T.Array<GPType>