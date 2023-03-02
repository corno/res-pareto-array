import * as gapi from "../definition/glossary"

import { CgetLength } from "../definition/api.generated"

export const $$: CgetLength = <T>($: gapi.T.Array<T>) => {
    return $.__getLength()
}