import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    number,
    glossaryParameter,
    
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> ={
    'parameters': d({
        "Type": null,
    }),
    'types': d({
        "Array": type(array(glossaryParameter("Type"))),
        "Type": type(glossaryParameter("Type")),
        "GetElementAtData": type(group({
            "array": member(reference("Array")),
            "index": member(number()),
        })),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "GetElementAt": func(typeReference("GetElementAtData"), null, null, data(typeReference("Type"), false)),
        "GetLength": func(typeReference("Array"), null, null, data(typeReference("common", "Number"), false)),
    }),
}