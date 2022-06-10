import { Alert, Card, Input } from 'antd';
import { FC, useState, KeyboardEvent } from 'react';
import { useAuth } from '@/hooks/useAuth';

const error = '';

const AddPost: FC = () => {
	const [content, setContent] = useState('');
	const { user } = useAuth();

	const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && user) {
			setContent('');
		}
	};

	return (
		<>
			{error && <Alert message={error} type='error' showIcon />}
			<Card bodyStyle={{ borderRadius: '10px' }} />
			<Input
				placeholder='Расскажи, что у тебя нового'
				style={{ borderRadius: '25px' }}
				onKeyPress={addPostHandler}
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>
		</>
	);
};

export default AddPost;
