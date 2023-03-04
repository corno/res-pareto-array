import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type getElementAt = g_this.F.GetElementAt

export type getLength = g_this.F.GetLength

export type API = {
    getElementAt: getElementAt
    getLength: getLength
}