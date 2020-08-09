import React from 'react';
import { inject, observer } from 'mobx-react';
import Screen from '@Components/Screen';
import Currencies from '@Stores/Global/Currencies';

const CurrencyDetails = inject('Currencies')(
    observer(() => {
        return <Screen></Screen>;
    }),
);

export default CurrencyDetails;
