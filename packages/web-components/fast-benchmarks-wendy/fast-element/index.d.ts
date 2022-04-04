declare global {
    interface Window {
        usedJSHeapSize: any;
        gc: any;
    }
    interface Performance {
        memory: any;
    }
}
export declare class RandomItem {
    readonly id: number;
    label: string;
    constructor(id: number);
}
//# sourceMappingURL=index.d.ts.map