import * as pi from 'pareto-core-internals'

import * as gapi from "../api"

import { CgetElementAt } from "../api"

export const $$: CgetElementAt = <T>($: gapi.T.GetElementAtData<T>) => {
    return $.array.__getElementAt($.index)
}