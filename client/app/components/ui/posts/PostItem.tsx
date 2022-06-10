import { Card, Image } from 'antd';
import { FC } from 'react';
import UserInfo from './UserInfo';
import { IPost } from '@/types/post.interface';

const PostItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<Card>
			<UserInfo post={post} />
			<p>{post.content}</p>
			<Image src={post.image} width={400} alt='Image' />
		</Card>
	);
};

export default PostItem;
