import Cookies from 'js-cookie';

export interface IAuthData {
	user: {
		id: number;
		email: string;
	} | null;
	accessToken: string;
}

export const saveTokenToStorage = (accessToken: string) => {
	Cookies.set('accessToken', accessToken);
};

export const removeTokenToStorage = () => {
	Cookies.remove('accessToken');
};

export const saveToStorage = (data: IAuthData) => {
	saveTokenToStorage(data.accessToken);
	localStorage.setItem('user', JSON.stringify(data.user));
};
