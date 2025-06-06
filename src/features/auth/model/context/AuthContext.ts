import { createContext } from 'react';
import { AuthContextType } from 'Features/auth';

export const AuthContext = createContext<AuthContextType | null>(null);
