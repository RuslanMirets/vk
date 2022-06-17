import { IUser } from '@/types/user.interface';

export const users: IUser[] = [
	{
		id: '1',
		name: 'Иван',
		avatar: 'https://i.ytimg.com/vi/KUTbPQ6GVVE/maxresdefault.jpg',
		isInNetwork: true,
	},
	{
		id: '2',
		name: 'Петр',
		avatar: 'https://itcrumbs.ru/wp-content/uploads/2019/09/privatnost1.jpg',
		isInNetwork: true,
	},
	{
		id: '3',
		name: 'Маша',
		avatar: 'https://coolsen.ru/wp-content/uploads/2021/06/15-8-768x729.jpg',
		isInNetwork: false,
	},
	{
		id: '4',
		name: 'Богдан',
		avatar: 'https://i.yapx.cc/RcBe2.png',
		isInNetwork: true,
	},
];
