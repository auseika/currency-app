import React from 'react';
import { AndroidSafeArea, CenteredSpinner } from './Elements';
interface ScreenProps {
    isLoading?: boolean;
}

const Screen: React.StatelessComponent<ScreenProps> = (props) => (
    <AndroidSafeArea>{props.isLoading ? <CenteredSpinner /> : props.children}</AndroidSafeArea>
);

export default Screen;
