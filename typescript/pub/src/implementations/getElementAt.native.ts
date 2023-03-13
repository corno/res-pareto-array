import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { getElementAt } from "../api.generated"

export const $$: getElementAt = <T>($: g_this.T.GetElementAtData<T>) => {
    return $.array.__getElementAt($.index)
}