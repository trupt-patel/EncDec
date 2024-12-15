export declare class EncDecService {
    private encDecInfo;
    private config;
    constructor();
    refreshEncDecConfiguration(): Promise<void>;
    generateRandomKey(): Promise<string>;
    generateRandomIV(): Promise<string>;
}
