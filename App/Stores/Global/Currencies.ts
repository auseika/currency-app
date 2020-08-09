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
            console.log('STORE');
            console.log(resp);
            this.data = resp;
        });
    };
}

export default new Currencies();
