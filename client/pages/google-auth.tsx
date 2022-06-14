import { notification, Spin } from 'antd';
import { errorCatch } from 'api/api.utils';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { AuthService } from '@/services/auth/auth.service';

const GoogleAuthPage: NextPage = () => {
	const { query } = useRouter();
	const code = query?.code;

	const { mutate } = useMutation(
		'send code token',
		(code: string) => AuthService.loginGoogle(code),
		{
			onSuccess() {
				notification.success({
					message: 'Auth success',
				});
			},
			onError(error) {
				notification.error({
					message: errorCatch(error),
				});
			},
		},
	);

	useEffect(() => {
		if (code) mutate(String(code));
	}, [code, mutate]);

	return (
		<div className='center-block'>
			<Spin size='large' />
		</div>
	);
};

export default GoogleAuthPage;
