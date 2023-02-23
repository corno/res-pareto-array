import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CgetElementAt = glo.FGetElementAt

export type CgetLength = glo.FGetLength

export type API = {
    getElementAt: CgetElementAt
    getLength: CgetLength
}