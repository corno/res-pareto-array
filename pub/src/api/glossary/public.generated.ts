import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FGetElementAt = <GPType>($: T.GetElementAtData<GPType>,) => T.Type<GPType>

export type FGetLength = <GPType>($: T.Array<GPType>,) => mcommon.T.Number