import * as pd from 'pareto-core-data'

import {
    array, data, externalTypeReference, group, imp, member, number, parametrizedType, ref, sfunction,
    type, typeParameter, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Array": parametrizedType({ "Type": null }, array(ref(typeParameter("Type")))),
        "GetElementAtData": parametrizedType({ "Type": null }, group({
            "array": member(ref(typeReference("Array", { "Type": typeParameter("Type") }))),
            "index": member(number()),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "GetElementAt": sfunction(typeParameter("Type"), data(typeReference("GetElementAtData", { "Type": typeParameter("Type") })), { "Type": null }),
            "GetLength": sfunction(externalTypeReference("common", "Number"), data(typeReference("Array", { "Type": typeParameter("Type") })), { "Type": null }),
        }),
    },
}