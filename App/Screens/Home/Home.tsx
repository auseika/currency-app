import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import Screen from '@Components/Screen';
import FavButton from '@Components/FavButton';

import Currencies from '@Stores/Global/Currencies';

const Home = inject('Currencies')(
    observer(() => {
        useEffect(() => {
            Currencies.fetch();
        }, []);

        return (
            <Screen isLoading={Currencies.isFetching}>
                <Text>test</Text>
                <Text>{JSON.stringify(Currencies.data)}</Text>
                <FavButton currencyCode={'PLN'} />
            </Screen>
        );
    }),
);

export default Home;
