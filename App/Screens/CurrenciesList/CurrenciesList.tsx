import React from 'react';
import { inject, observer } from 'mobx-react';
import { ScrollView } from 'react-native';
import Screen from '@Components/Screen';
import FavButton from '@Components/FavButton';
import { LargeText } from '@Components/Text';
import { Colors } from '@Globals';
import { CurrencyContainer } from './Elements';

import Currencies from '@Stores/Global/Currencies';

const CurrenciesList = inject('Currencies')(
    observer(({ navigation }) => {
        const navToDetails = () => navigation.navigate('Currency Details');
        return (
            <Screen isLoading={Currencies.isFetching}>
                <ScrollView>
                    {Currencies.data.map((el) => (
                        <CurrencyContainer onPress={navToDetails} key={`${el.currency_code}_list_${el.median_rate}`}>
                            <LargeText color={Colors.black}>{el.currency_code}</LargeText>
                            <FavButton currencyCode={el.currency_code} />
                        </CurrencyContainer>
                    ))}
                </ScrollView>
            </Screen>
        );
    }),
);

export default CurrenciesList;
