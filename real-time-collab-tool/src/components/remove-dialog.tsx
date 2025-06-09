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


  interface RemoveDialogProps{
    documentId: Id<"documents">;
    children: React.ReactNode
  }