// document-menu.tsx
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RemoveDialog } from "@/components/remove-dialog";
import { useState } from "react";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
};

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
    const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <MoreVertical className="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setIsRenameDialogOpen(true)}>
                        <FilePenIcon className="size-4 mr-2" />
                        Rename
                    </DropdownMenuItem>
                    <RemoveDialog documentId={documentId}>
                        <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                        >
                            <TrashIcon className="size-4 mr-2" />
                            Remove
                        </DropdownMenuItem>
                    </RemoveDialog>
                    <DropdownMenuItem onClick={() => onNewTab(documentId)}>
                        <ExternalLinkIcon className="size-4 mr-2" />
                        Open in a new tab
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <RenameDialog 
                documentId={documentId} 
                isOpen={isRenameDialogOpen} 
                onOpenChange={setIsRenameDialogOpen}
                defaultTitle={title}
            />
        </>
    )
}