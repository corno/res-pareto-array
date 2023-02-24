import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FGetElementAt = <GPType>($: T.GetElementAtData<GPType>,) => T.Type<GPType>

export type FGetLength = <GPType>($: T.Array<GPType>,) => gcommon.T.Number