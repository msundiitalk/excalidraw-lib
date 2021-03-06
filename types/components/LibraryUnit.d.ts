import { BinaryFiles, LibraryItem } from "../types";
import "./LibraryUnit.scss";
export declare const LibraryUnit: ({ id, elements, files, isPending, onClick, selected, onToggle, }: {
    id: LibraryItem["id"] | /** for pending item */ null;
    elements?: readonly import("../element/types").NonDeleted<import("../element/types").ExcalidrawElement>[] | undefined;
    files: BinaryFiles;
    isPending?: boolean | undefined;
    onClick: () => void;
    selected: boolean;
    onToggle: (id: string) => void;
}) => JSX.Element;
