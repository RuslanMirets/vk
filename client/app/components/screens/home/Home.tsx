import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import AddPost from '@/components/ui/posts/AddPost';
import Posts from '@/components/ui/posts/Posts';

const Home: FC = () => {
	return (
		<Layout title='Главная'>
			<div>
				<AddPost />
				<Posts />
			</div>
		</Layout>
	);
};

export default Home;
