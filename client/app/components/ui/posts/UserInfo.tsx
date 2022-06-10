import { Avatar } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import { IPost } from '@/types/post.interface';

const UserInfo: FC<{ post: IPost }> = ({ post }) => {
	return (
		<Link
			href={`/profile/${post.user.id}`}
			style={{ display: 'flex', alignContent: 'center', color: '#111', marginBottom: 12 }}
		>
			<a>
				<div style={{ position: 'relative', marginRight: 2, width: 50, height: 50 }}>
					<Avatar src={post.user.avatar} size={46} />
				</div>
				<div>
					<div style={{ fontSize: 14 }}>{post.user.name}</div>
					<div style={{ fontSize: 14, opacity: '0.6' }}>{post.createdAt}</div>
				</div>
			</a>
		</Link>
	);
};

export default UserInfo;
