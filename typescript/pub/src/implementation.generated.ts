import { API } from "./api.generated"
import { $$ as igetElementAt } from "./implementations/getElementAt.native"
import { $$ as igetLength } from "./implementations/getLength.native"
import { $$ as imerge } from "./implementations/merge.native"
import { $$ as ipush } from "./implementations/push.native"

export const $api: API = {
    'getElementAt': igetElementAt,
    'getLength': igetLength,
    'merge': imerge,
    'push': ipush,
}