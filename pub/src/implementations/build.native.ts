import * as pi from 'pareto-core-internals'

import * as gapi from "../api"

import { Cbuild } from "../api"

export const $$: Cbuild = <T>($: null, $c: ($i: gapi.IPush<T>) => void) => {
    const out: T[] = []
    $c(($) => {
        out.push($)
    })
    return pi.wrapRawArray([])
}