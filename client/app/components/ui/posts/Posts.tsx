import { FC } from 'react';
import PostItem from './PostItem';
import { initialPosts } from '@/components/screens/home/post';

const Posts: FC = () => {
	return (
		<>
			{initialPosts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</>
	);
};

export default Posts;
