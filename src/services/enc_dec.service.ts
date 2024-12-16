import { Injectable } from "@nestjs/common";
import * as crypto from 'crypto';

@Injectable()
export class EncDecService {

    private readonly algorithm = 'aes-256-cbc';
    private readonly key = crypto.randomBytes(32);
    private readonly iv = crypto.randomBytes(16); 
    
    async encryptText({ plainText }: {plainText: string}){
        try {
            const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
            let encrypted = cipher.update(plainText, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return `${encrypted}:${this.iv.toString('hex')}`;
        } catch (error) {
            return false
        }
    }
    async decryptText({ encryptedData }: {encryptedData: string}){
        try {
            const [encrypted, ivHex] = encryptedData.split(':');
            const decipher = crypto.createDecipheriv(this.algorithm, this.key, Buffer.from(ivHex, 'hex'));
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch (error) {
            return false
        }
    }

}