import styled from 'styled-components/native';
import { Colors } from '@Globals';

interface ContainerProps {
    active?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100px;
    height: 40px;
    background-color: ${(p) => (p.active ? Colors.blue : Colors.gray)};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
`;

export const CenteredSpinner = styled.ActivityIndicator`
    align-self: center;
    flex: 1;
`;
