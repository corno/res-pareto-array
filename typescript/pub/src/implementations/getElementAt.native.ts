import * as pi from 'pareto-core-internals'

import * as gapi from "../glossary"

import { getElementAt } from "../api.generated"

export const $$: getElementAt = <T>($: gapi.T.GetElementAtData<T>) => {
    return $.array.__getElementAt($.index)
}