export declare const SHAPES: readonly [{
    readonly icon: JSX.Element;
    readonly value: "selection";
    readonly key: "v";
}, {
    readonly icon: JSX.Element;
    readonly value: "rectangle";
    readonly key: "r";
}, {
    readonly icon: JSX.Element;
    readonly value: "diamond";
    readonly key: "d";
}, {
    readonly icon: JSX.Element;
    readonly value: "ellipse";
    readonly key: "e";
}, {
    readonly icon: JSX.Element;
    readonly value: "arrow";
    readonly key: "a";
}, {
    readonly icon: JSX.Element;
    readonly value: "line";
    readonly key: readonly ["p", "l"];
}, {
    readonly icon: JSX.Element;
    readonly value: "freedraw";
    readonly key: "x";
}, {
    readonly icon: JSX.Element;
    readonly value: "text";
    readonly key: "t";
}, {
    readonly icon: JSX.Element;
    readonly value: "image";
    readonly key: null;
}];
export declare const findShapeByKey: (key: string) => "line" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "text" | "arrow" | "freedraw" | null;
