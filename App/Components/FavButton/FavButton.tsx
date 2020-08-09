import React from 'react';
import { Currency } from '@Types';
import { LargeText } from '@Components/Text';
import { Container } from './Elements';

interface FavButtonProps {
    currencyCode: Currency;
}

const FavButton: React.StatelessComponent<FavButtonProps> = (props) => {
    return (
        <Container>
            <LargeText>SAVE</LargeText>
        </Container>
    );
};

export default FavButton;
