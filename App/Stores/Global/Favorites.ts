import { action, observable } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import BaseFetchStore from '@Stores/BaseFetchStore';
import { Currency } from '@Types';
import { GetTodaysRates } from '@API';

class Currencies extends BaseFetchStore {
    @observable data: Currency[] = [];

    @action
    getFromStore = async () => {
        this.wrapApiCall(async () => {
            const resp = await GetTodaysRates();
            this.data = resp;
        });
    };
}

export default new Currencies();
