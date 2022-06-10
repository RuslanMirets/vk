import React, { FC, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

const Auth: FC = () => {
	const { user } = useAuth();

	const [isReqForm, setIsReqForm] = useState(false);

	return <div></div>;
};

export default Auth;
