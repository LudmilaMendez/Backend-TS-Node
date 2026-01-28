// users es el array y User es la interfaz que estan dentro de models/users.models.ts
import { users, User, generateId } from '../models/users.models';

// Devuelve todos los usuarios
export const getUsers = (): User[] => {
    return users;
};

// Crea un nuevo usuario en el service
export const createUser = (user: User): User => {
    const newUser: User = {
        id: generateId(),
        ...user
    };
    users.push(newUser);
    return newUser;
};