export const emailValidator = (value: string): string | null => {
	return /^\S+@\S+\.\S+$/.test(value) ? null : 'Введите корректный email.';
};
