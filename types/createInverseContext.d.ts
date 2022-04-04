import React from "react";
export declare const createInverseContext: <T extends unknown = null>(initialValue: T) => {
    Context: React.Context<T> & {
        _updateProviderValue?: ((value: T) => void) | undefined;
    };
    Consumer: React.Component<{}, {}, any>;
    Provider: React.Component<{}, {}, any>;
};
