import { Card, List } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { users } from '../dataUsers';
import UserItem from './UserItem';

const UserItems: FC = () => {
	const { push } = useRouter();

	return (
		<Card bodyStyle={{ padding: 2, backgroundColor: '#f1f7fa', border: 'none', borderRadius: 3 }}>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
			<List>
				<List.Item onClick={() => push('/conversations')}>
					<List.Item.Meta title='Сообщение' />
				</List.Item>
			</List>
		</Card>
	);
};

export default UserItems;
