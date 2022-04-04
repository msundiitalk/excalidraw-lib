import "./Tooltip.scss";
import React from "react";
declare type TooltipProps = {
    children: React.ReactNode;
    label: string;
    long?: boolean;
    style?: React.CSSProperties;
};
export declare const Tooltip: ({ children, label, long, style, }: TooltipProps) => JSX.Element;
export {};
