import * as pi from 'pareto-core-internals'

import * as gapi from "../definition/glossary"

import { getElementAt } from "../definition/api.generated"

export const $$: getElementAt = <T>($: gapi.T.GetElementAtData<T>) => {
    return $.array.__getElementAt($.index)
}