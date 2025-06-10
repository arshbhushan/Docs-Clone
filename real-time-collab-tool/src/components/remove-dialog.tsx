"use client";
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

import { Id } from "../../convex/_generated/dataModel";


interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode
};

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
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
                        <AlertDialogAction>
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}