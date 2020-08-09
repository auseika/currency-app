import React from 'react';
import Screen from '@Components/Screen';
import FavButton from '@Components/FavButton';
import { Colors } from '@Globals';

import { CustomText } from './Elements';

const CurrencyDetails = ({ route }) => {
    const { currency } = route.params;

    return (
        <Screen>
            <CustomText color={Colors.black}>{currency.currency_code}</CustomText>
            <CustomText color={Colors.black}>{`Buying rate: ${currency.buying_rate}`}</CustomText>
            <CustomText color={Colors.black}>{`Selling rate: ${currency.selling_rate}`}</CustomText>
            <CustomText color={Colors.black}>{`Median: ${currency.median_rate}`}</CustomText>

            <FavButton currencyCode={currency.currency_code} />
        </Screen>
    );
};

export default CurrencyDetails;
