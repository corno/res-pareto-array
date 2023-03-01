import * as gapi from "../api"

import { CgetLength } from "../api"

export const $$: CgetLength = <T>($: gapi.T.Array<T>) => {
    return $.__getLength()
}