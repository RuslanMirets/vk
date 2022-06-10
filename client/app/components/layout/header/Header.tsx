import { SearchOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import styles from './Header.module.scss';
import logoImg from './vk-logo.png';

const Header: FC = () => {
	const [isSearchActive, setIsSearchActive] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.imageWrapper}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={logoImg.src} alt='Logo' />
			</div>
			<div className={styles.wrapper}>
				{!isSearchActive && <SearchOutlined />}
				<input type='text' placeholder='Поиск' onClick={() => setIsSearchActive(true)} />
			</div>
		</header>
	);
};

export default Header;
