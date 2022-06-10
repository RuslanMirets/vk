import { FC } from 'react';
import AddPost from '@/components/ui/posts/AddPost';
import Posts from '@/components/ui/posts/Posts';

const Home: FC = () => {
	return (
		<div>
			<AddPost />
			<Posts />
		</div>
	);
};

export default Home;
