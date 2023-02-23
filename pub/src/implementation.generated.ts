import { API } from "./api"
import { $$ as ibuild } from "./implementations/build.native"
import { $$ as igetElementAt } from "./implementations/getElementAt.native"
import { $$ as igetLength } from "./implementations/getLength.native"

export const $a: API = {
    'build': ibuild,
    'getElementAt': igetElementAt,
    'getLength': igetLength,
}