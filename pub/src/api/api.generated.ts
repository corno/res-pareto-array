import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CgetElementAt = gthis.FGetElementAt

export type CgetLength = gthis.FGetLength

export type API = {
    getElementAt: CgetElementAt
    getLength: CgetLength
}