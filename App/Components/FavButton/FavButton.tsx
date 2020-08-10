import React from 'react';
import { inject, observer } from 'mobx-react';
import Currencies from '@Stores/Global/Currencies';
import { Currency } from '@Types';
import { LargeText } from '@Components/Text';
import { Container } from './Elements';

interface FavButtonProps {
    currencyCode: Currency;
}

const FavButton: React.StatelessComponent<FavButtonProps> = inject('Currencies')(
    observer((props) => {
        console.log('STORE');
        console.log(Currencies.favs);
        const handlePress = () => {
            Currencies.favs.includes(props.currencyCode)
                ? Currencies.removeFromFav(props.currencyCode)
                : Currencies.addToFav(props.currencyCode);
        };

        return (
            <Container active={Currencies.favs.includes(props.currencyCode)} onPress={handlePress}>
                <LargeText>SAVE</LargeText>
            </Container>
        );
    }),
);

export default FavButton;
