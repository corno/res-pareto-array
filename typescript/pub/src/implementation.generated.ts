import { API } from "./api.generated"
import { $$ as igetElementAt } from "./implementations/getElementAt.native"
import { $$ as igetLength } from "./implementations/getLength.native"

export const $r: API = {
    'getElementAt': igetElementAt,
    'getLength': igetLength,
}