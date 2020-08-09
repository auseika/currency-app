import BaseFetchStore from '@Stores/BaseFetchStore';
import { action, observable } from 'mobx';
import { CurrencyRate } from '@Types';
import { GetTodaysRates } from '@API';

class Currencies extends BaseFetchStore {
    @observable data: CurrencyRate[] = [];
    @action
    fetch = async () => {
        this.wrapApiCall(async () => {
            const resp = await GetTodaysRates();
            this.data = resp;
        });
    };
}

export default new Currencies();
