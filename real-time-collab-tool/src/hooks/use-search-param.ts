import {parseAsString, useQueryState} from "nuqs";

export function useSearchParma(key: string){
    return useQueryState(
        key, 
        parseAsString.withDefault("").withOptions({clearOnDefault: true}),
    )
}