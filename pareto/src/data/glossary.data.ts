import * as pd from 'pareto-core-data'

import {
    array, data, externalTypeReference, glossaryParameter, group, imp, member, number, ref, sfunction,
    type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> ={
    'parameters': d({
        "Type": null,
    }),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Array": type(array(glossaryParameter("Type"))),
        "Type": type(glossaryParameter("Type")),
        "GetElementAtData": type(group({
            "array": member(ref(typeReference("Array"))),
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
            "GetElementAt": sfunction(typeReference("Type"), data(typeReference("GetElementAtData"))),
            "GetLength": sfunction(externalTypeReference("common", "Number"), data(typeReference("Array"))),
        }),
    },
}