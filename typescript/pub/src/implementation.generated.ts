import { API } from "./api"
import { $$ as igetElementAt } from "./implementations/getElementAt.native"
import { $$ as igetLength } from "./implementations/getLength.native"

export const $a: API = {
    'getElementAt': igetElementAt,
    'getLength': igetLength,
}