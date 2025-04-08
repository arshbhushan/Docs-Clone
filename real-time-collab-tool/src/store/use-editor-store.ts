import {create} from "zustand";
//zustand: A small, fast state-management library for React. 
//The create function is used to create a custom store (kind of like a mini global state).
import { type Editor } from "@tiptap/react";

interface EditorState{
    editor: Editor | null;
    setEditor: (editor: Editor | null) => void;

};

export const useEditorStore =create<EditorState>((set)=>({
    editor: null,
    setEditor:(editor)=>set({editor}),
}));
