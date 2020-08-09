import React from 'react';
import { inject, observer } from 'mobx-react';
import Screen from '@Components/Screen';
import Favorites from '@Stores/Global/Favorites';
import Currencies from '@Stores/Global/Currencies';

const CurrencyDetails = inject(
    'Favorites',
    'Currencies',
)(
    observer(() => {
        return <Screen></Screen>;
    }),
);

export default CurrencyDetails;
