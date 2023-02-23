import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type Cbuild = glo.FBuild

export type CgetElementAt = glo.FGetElementAt

export type CgetLength = glo.FGetLength

export type API = {
    build: Cbuild
    getElementAt: CgetElementAt
    getLength: CgetLength
}