import { Avatar, Button, Card, Col, Row } from 'antd';
import { FC } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/services/auth/auth.service';

const User: FC = () => {
	const { user, setUser } = useAuth();

	return (
		<Card
			bodyStyle={{
				padding: 2,
				backgroundColor: '#f1f7fa',
				border: 'none',
				borderRadius: 3,
				marginBottom: 5,
			}}
		>
			<Row>
				<Col span={3}>
					<Avatar src={user?.avatarPath} alt='Avatar' />
				</Col>
				<Col span={9}>
					<div>{user?.name}</div>
				</Col>
			</Row>
			<Button
				type='dashed'
				onClick={() => {
					AuthService.logout();
					setUser && setUser(null);
				}}
			>
				Выйти
			</Button>
		</Card>
	);
};

export default User;
