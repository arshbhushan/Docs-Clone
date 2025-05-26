import { Input } from "@/components/ui/input";

export const SearchInput = () => {

    return (
        <div className="flex-1 flex items-center justify-center">
            <form
                className="relative max-w-[720px] w-full"
            >
                <Input
                    placeholder="Search"
                    className="md: text-base Oplaceholder: text-neutral-800 px-14 w-full border-none focus-visible:shadow-[]" />
            </form>
        </div>
    );
};