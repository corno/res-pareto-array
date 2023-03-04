import * as gapi from "../definition/glossary"

import { getLength } from "../definition/api.generated"

export const $$: getLength = <T>($: gapi.T.Array<T>) => {
    return $.__getLength()
}