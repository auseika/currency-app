import styled from 'styled-components/native';
import { Colors } from '@Globals';

export const Container = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: ${(active) => (active ? Colors.blue : Colors.white)};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const CenteredSpinner = styled.ActivityIndicator`
    align-self: center;
    flex: 1;
`;
