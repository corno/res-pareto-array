import * as pi from 'pareto-core-internals'

import * as gapi from "../definition/glossary"

import { CgetElementAt } from "../definition/api.generated"

export const $$: CgetElementAt = <T>($: gapi.T.GetElementAtData<T>) => {
    return $.array.__getElementAt($.index)
}