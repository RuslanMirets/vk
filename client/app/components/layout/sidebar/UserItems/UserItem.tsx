import { Avatar } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import { IUser } from '@/types/user.interface';

const UserItem: FC<{ user: IUser }> = ({ user }) => {
	return (
		<Link
			href={`/profile/${user.id}`}
			style={{ display: 'flex', alignItems: 'center', color: '#111', marginBottom: 12 }}
		>
			<a>
				<div style={{ position: 'relative', marginRight: 2, width: 50, height: 50 }}>
					<Avatar
						src={user.avatar}
						alt={user.name}
						style={{ width: 46, height: 46, borderRadius: '50%' }}
					/>
					{user.isInNetwork && (
						<div
							style={{
								backgroundColor: '#4fb14f',
								border: '2px solid #f1f7fa',
								width: 12,
								height: 12,
								position: 'absolute',
								bottom: 0,
								right: 0,
								borderRadius: '50%',
							}}
						></div>
					)}
				</div>
				<span style={{ fontSize: 14 }}>{user.name}</span>
			</a>
		</Link>
	);
};

export default UserItem;
