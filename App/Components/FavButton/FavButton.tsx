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
        const isActive = Currencies.favs.includes(props.currencyCode);

        const handlePress = () => {
            isActive ? Currencies.removeFromFav(props.currencyCode) : Currencies.addToFav(props.currencyCode);
        };

        return (
            <Container active={isActive} onPress={handlePress}>
                <LargeText>SAVE</LargeText>
            </Container>
        );
    }),
);

export default FavButton;
