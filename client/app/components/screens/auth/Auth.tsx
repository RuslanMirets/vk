import { Button, Card, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import styles from './Auth.module.scss';
import GoogleLogo from './google-logo.svg';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/hooks/useAuth';

const Auth: FC = () => {
	const { user } = useAuth();
	const { push } = useRouter();

	useEffect(() => {
		if (user) push('/').then((r) => r);
	}, [user, push]);

	return (
		<Layout title='Вход в систему'>
			<Card className={styles.root}>
				<Typography.Title>Google login</Typography.Title>
				<Button
					type='primary'
					icon={<Image src={GoogleLogo.src} alt='Google logo' width={24} height={24} priority />}
					size='large'
					onClick={() =>
						push(
							`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2flocalhost%3A3000%2Fgoogle-auth&scope=email%20profile&client_id=${process.env.GOOGLE_CLIENT_ID}&flowName=GeneralOAuthFlow`,
						)
					}
				>
					Sign up with Google
				</Button>
			</Card>
		</Layout>
	);
};

export default Auth;
