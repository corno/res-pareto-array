import * as gapi from "../glossary"

import { getLength } from "../api.generated"

export const $$: getLength = <T>($: gapi.T.Array<T>) => {
    return $.__getLength()
}