import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.getElementAt = <T>($: g_this.T.GetElementAtData<T>) => {
    return $.array.__getElementAt($.index)
}