import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const AndroidSafeArea = styled.SafeAreaView`
    padding-top: ${Platform.OS === 'android' ? '25px' : 0};
    background-color: #b33;
    flex: 1;
`;

export const CenteredSpinner = styled.ActivityIndicator`
    align-self: center;
    flex: 1;
`;
