import {parseAsString, useQueryState} from "nuqs";


// with nuqs we can automatically sync with error values we work with programatically which we will with the useState but nuqs will sync to the URL search params.

//below is a reusable search parmas, for better UX.
export function useSearchParma(key: string){
    return useQueryState(
        key, 
        parseAsString.withDefault("").withOptions({clearOnDefault: true}),
    )
}