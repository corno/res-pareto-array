import * as pd from 'pareto-core-data'

import {
    string,
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, func, data, type, optional, glossaryParameter, reference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({
            "Type": {},
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
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "getElementAt": algorithm(definitionReference("GetElementAt")),
            "getLength": algorithm(definitionReference("GetLength")),
        })
    },
}