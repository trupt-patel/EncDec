export declare class EncDecService {
    private readonly algorithm;
    private readonly key;
    private readonly iv;
    encryptText({ plainText }: {
        plainText: string;
    }): Promise<string | false>;
    decryptText({ encryptedData }: {
        encryptedData: string;
    }): Promise<string | false>;
}
