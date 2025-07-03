"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";


interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode
};

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById)
    const [isRemoving, setIsRemoving] = useState(false);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be reverted. This will be premanently delete this document.
                </AlertDialogDescription>
                <AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            disabled={isRemoving}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsRemoving(true);
                                remove({ id: documentId })
                                .catch(()=> toast.error("Something went worng."))
                                .then(() => toast.success("Document removed successfully.")) 
                                    .finally(() => setIsRemoving(false));
                            }}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}