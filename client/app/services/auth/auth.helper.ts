import Cookies from 'js-cookie';

export type TypeUser = {
	id: string;
	email: string;
} | null;

export interface IAuthData {
	user: TypeUser;
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
