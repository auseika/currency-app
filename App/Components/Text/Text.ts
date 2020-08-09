import styled from 'styled-components/native';
import { Colors } from '@Types';

interface TextProps {
    color?: Colors[keyof Colors];
}

export const LargeText = styled.Text`
    color: ${(props: TextProps) => props.color || 'white'};
    font-size: 20px;
`;

export const MediumText = styled.Text`
    color: ${(props: TextProps) => props.color || 'white'};
    font-size: 16px;
`;

export const SmallText = styled.Text`
    color: ${(props: TextProps) => props.color || 'white'};
    font-size: 12px;
`;
