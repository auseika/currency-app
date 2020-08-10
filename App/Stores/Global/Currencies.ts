import { action, observable } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import BaseFetchStore from '@Stores/BaseFetchStore';
import { Currency, CurrencyRate } from '@Types';
import { GetTodaysRates } from '@API';

class Currencies extends BaseFetchStore {
    @action
    getSaved = async () => {
        const extractedFavs = (await AsyncStorage.getItem('favs')) || '[]';
        // console.log(`Extracted parsed: ${Array.from(extractedFavs)}`);

        return JSON.parse(extractedFavs);
    };

    @observable data: CurrencyRate[] = [];
    @observable favs: any = [];

    @action
    fetch = async () => {
        this.wrapApiCall(async () => {
            const resp = await GetTodaysRates();
            const extracted = await this.getSaved();
            this.data = resp;
            this.favs = extracted;
        });
    };

    @action
    addToFav = async (code: Currency) => {
        this.favs.push(code);

        //record to async
        const transformed = JSON.stringify(this.favs);
        await AsyncStorage.setItem('favs', transformed);
    };

    @action
    removeFromFav = async (code: Currency) => {
        this.favs.splice(this.favs.indexOf(code), 1);
        //record to async
        const transformed = JSON.stringify(this.favs);
        await AsyncStorage.setItem('favs', transformed);
    };
}

export default new Currencies();
