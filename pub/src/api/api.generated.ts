import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CgetElementAt = gglo.FGetElementAt

export type CgetLength = gglo.FGetLength

export type API = {
    getElementAt: CgetElementAt
    getLength: CgetLength
}