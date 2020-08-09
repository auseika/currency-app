import styled from 'styled-components/native';
import { Colors } from '@Globals';

export const CurrencyContainer = styled.TouchableOpacity`
    height: 100px;
    margin: 20px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.lightGray};
`;
