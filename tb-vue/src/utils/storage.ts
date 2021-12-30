const EXPIRE_KEY = '_expires';

const InfinityTime = -1;

export class BrowserStorage {

    public storageType: string;

    constructor(type: string) {
        this.storageType = type;
    }

    set(key: string, value: any, time = InfinityTime) {
        const data = {
            [EXPIRE_KEY]: time === InfinityTime ? time : Date.now() + time,
            value,
        };
        (global as any)[this.storageType].setItem(key, JSON.stringify(data));
    }

    has(key: string) {
        return this.get(key) !== null;
    }

    get(key: string, defaultValue: any = null) {
        const data = (global as any)[this.storageType].getItem(key);
        if (data) {
            const parseData = JSON.parse(data);
            const expireTime = parseData[EXPIRE_KEY];
            if (expireTime === InfinityTime || expireTime >= Date.now()) { // 未过期
                return parseData.value;
            } else {
                this.del(key);
            }
            return defaultValue;
        }
    }

    del(key: string) {
        (global as any)[this.storageType].removeItem(key);
    }

    clear() {
        (global as any)[this.storageType].clear();
    }
}


export const Local: BrowserStorage = new BrowserStorage('localStorage');
export const Session: BrowserStorage = new BrowserStorage('sessionStorage');