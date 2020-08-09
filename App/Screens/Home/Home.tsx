import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Picker } from '@react-native-community/picker';
import Screen from '@Components/Screen';
import Currencies from '@Stores/Global/Currencies';

import { Colors } from '@Globals';
import { Currency } from '@Types';
import { CustomText } from './Elements';

const Home = inject('Currencies')(
    observer(() => {
        const calculateRates = (sourceCode: Currency, targetCode: Currency) => {
            const source = Currencies.data.find((item) => item.currency_code === sourceCode) || Currencies.data[0];
            const target = Currencies.data.find((item) => item.currency_code === targetCode) || Currencies.data[0];
            // convert to hrk first
            const hrkSource = parseFloat(source.median_rate) * source.unit_value;
            // then to target currency
            const result = (hrkSource / parseFloat(target.median_rate)) * target.unit_value;
            return result;
        };

        useEffect(() => {
            Currencies.fetch();
        }, []);

        const [convertFrom, setSource] = useState('USD');
        const [convertTo, setTarget] = useState('EUR');
        const [resultingValue, setResult] = useState(0);

        return (
            <Screen isLoading={Currencies.isFetching}>
                <CustomText color={Colors.black}>From</CustomText>
                <Picker
                    selectedValue={convertFrom}
                    onValueChange={(value) => {
                        setSource(value as string);
                        const converted = calculateRates(value as Currency, convertTo as Currency);
                        setResult(converted);
                    }}
                >
                    {Currencies.data.map((el) => (
                        <Picker.Item
                            label={el.currency_code}
                            value={el.currency_code}
                            key={`${el.currency_code}_sourcePicker_${el.median_rate}`}
                        />
                    ))}
                </Picker>
                <CustomText color={Colors.black}>To</CustomText>
                <Picker
                    selectedValue={convertTo}
                    onValueChange={(value) => {
                        setTarget(value as string);
                        const converted = calculateRates(convertFrom as Currency, value as Currency);
                        setResult(converted);
                    }}
                >
                    {Currencies.data.map((el) => (
                        <Picker.Item
                            label={el.currency_code}
                            value={el.currency_code}
                            key={`${el.currency_code}_targetPicker_${el.median_rate}`}
                        />
                    ))}
                </Picker>

                <CustomText color={Colors.black}>{resultingValue}</CustomText>
            </Screen>
        );
    }),
);

export default Home;
