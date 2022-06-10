import { Avatar, Button, Card, Col, Row } from 'antd';
import { FC } from 'react';
import { users } from './dataUsers';
import { useAuth } from '@/hooks/useAuth';

const User: FC = () => {
	const { user } = useAuth();

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
					<Avatar src={users[0].avatar} alt='Avatar' />
				</Col>
				<Col span={9}>
					<div>{users[0].name || 'Без имени'}</div>
				</Col>
			</Row>
			<Button type='dashed' onClick={() => {}}>
				Выйти
			</Button>
		</Card>
	);
};

export default User;
