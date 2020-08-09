import { observable, computed, action } from 'mobx';
import { Alert } from 'react-native';
import { RequestStatus } from '@Types';

type APICall = () => Promise<any>;

export default class BaseFetchStore {
    @observable state = 'NOT_STARTED';
    @observable data?: any;

    @computed
    get isFetching(): boolean {
        return this.state === 'FETCH';
    }

    @action
    setFetchState(state: RequestStatus) {
        this.state = state;
    }

    @action
    async wrapApiCall(fn: APICall) {
        this.setFetchState('FETCH');

        await fn()
            .then(() => this.setFetchState('FETCH_SUCCESS'))
            .catch((error) => {
                console.log('Network error');
                Alert.alert('Oops', JSON.stringify(error.response.data.error.message), [
                    {
                        text: 'Retry',
                        onPress: () => this.wrapApiCall(fn),
                    },
                    { text: 'Cancel', style: 'cancel' },
                ]);
                this.setFetchState('FETCH_ERROR');
            });
    }
}
