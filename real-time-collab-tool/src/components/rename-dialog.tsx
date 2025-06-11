"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

interface RenameDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
};

export const RenameDialog = ({ documentId, children }: RenameDialogProps) => {
    const remove = useMutation(api.documents.removeById)
    const [isRenaming, setIsRenaming] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <form>
                    <DialogHeader>
                        <DialogTitle>Rename Document</DialogTitle>
                        <DialogDescription>
                            Enter a new name for this document.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-4">
                        <Input />
                    </div>
                    <DialogFooter>
                        <Button>
                            Cancel
                        </Button>
                        <Button>
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};