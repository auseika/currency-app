import BaseFetchStore from '@Stores/BaseFetchStore';
import { action, observable } from 'mobx';
import { Currency, CurrencyRate } from '@Types';
import { GetTodaysRates } from '@API';

class Currencies extends BaseFetchStore {
    @observable data: CurrencyRate[] = [];
    @observable favs: Currency[] = [];

    @action
    fetch = async () => {
        this.wrapApiCall(async () => {
            const resp = await GetTodaysRates();
            this.data = resp;
        });
    };

    @action
    addToFav = async (code: Currency) => {
        this.favs.push(code);
        //record to async
    };

    @action
    removeFromFav = async (code: Currency) => {
        this.favs.splice(this.favs.indexOf(code), 1);
        //record to async
    };
}

export default new Currencies();
