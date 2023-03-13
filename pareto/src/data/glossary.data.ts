import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    glossaryParameter,
    ref,
    externalTypeReference,
    imp,
    
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
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "GetElementAt": sfunc(typeReference("GetElementAtData"), null, null, sdata(typeReference("Type"))),
            "GetLength": sfunc(typeReference("Array"), null, null, sdata(externalTypeReference("common", "Number"))),
        }),

    }],
}