import { Col, Row } from 'antd';
import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';
import { useAuth } from '@/hooks/useAuth';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth();

	return (
		<>
			<Header />
			<Row gutter={[5, 2]}>
				{user && <Col span={3}></Col>}
				<Col span={user ? 9 : 12}>{children}</Col>
			</Row>
		</>
	);
};

export default Layout;
