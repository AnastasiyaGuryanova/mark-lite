export const passwordValidator = (value: string): string | null => {
	return value.length >= 6 ? null : 'Пароль должен быть не менее 6 символов.';
};
