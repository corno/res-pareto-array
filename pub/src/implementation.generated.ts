import { API } from "./api"
import { $$ as ibuild } from "./implementations/build.native"

export const $a: API = {
    'build': ibuild,
}