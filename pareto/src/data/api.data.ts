import * as pd from 'pareto-core-data'

import {
    string,
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, func, data, type, optional, glossaryParameter,
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
        }),
        'interfaces': d({
            "Push": method(typeReference("Type")),
        }),
        'functions': d({
            "Build": func(typeReference("common", "Null"), interfaceReference("Push"), null, data(typeReference("Array"), false))
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "build": algorithm(definitionReference("Build"))
        })
    },
}