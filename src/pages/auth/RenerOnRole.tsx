import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface RenderOnRoleProps {
    role: string;
    displayMessage?: boolean;
    children: ReactNode;
}

export default function RenderOnRole({ role, displayMessage, children }: RenderOnRoleProps): ReactNode | null {
    const { user } = useSelector((state: RootState) => state.auth);

    if (typeof user?.roles !== 'undefined' && user.roles.includes(role)) {
        return children;
    }

    return displayMessage ? null : null;
}
