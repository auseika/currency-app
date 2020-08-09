import React from 'react';
import { inject, observer } from 'mobx-react';
import Screen from '@Components/Screen';
import Currencies from '@Stores/Global/Currencies';
import Favorites from '@Stores/Global/Favorites';

const CurrenciesList = inject(
    'Favorites',
    'Currencies',
)(
    observer(() => {
        return <Screen></Screen>;
    }),
);

export default CurrenciesList;
