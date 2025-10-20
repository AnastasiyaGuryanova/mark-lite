export const confirmPasswordValidator = (
	value: string,
	password: string
): string | null => {
	return value === password ? null : 'Пароли не совпадают.';
};
