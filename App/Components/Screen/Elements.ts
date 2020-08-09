import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const AndroidSafeArea = styled.SafeAreaView`
    padding-top: ${Platform.OS === 'android' ? 25 : 0};
`;
