// rename-dialog.tsx
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
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    defaultTitle: string;
};

export const RenameDialog = ({ 
    documentId, 
    isOpen, 
    onOpenChange,
    defaultTitle 
}: RenameDialogProps) => {
    const update = useMutation(api.documents.updateById);
    const [title, setTitle] = useState(defaultTitle);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await update({ id: documentId, title });
            onOpenChange(false);
        } catch (error) {
            console.error("Error renaming document:", error);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent onClick={(e)=>e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Rename Document</DialogTitle>
                        <DialogDescription>
                            Enter a new name for this document.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-4">
                        <Input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <DialogFooter>
                        <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};