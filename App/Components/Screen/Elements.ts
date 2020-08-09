import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const AndroidSafeArea = styled.SafeAreaView`
  paddingtop: ${Platform.OS === 'android' ? 25 : 0};
`;
