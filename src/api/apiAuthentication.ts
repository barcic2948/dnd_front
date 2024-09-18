import { configRequest } from './ConfigRequest';

export const getUserProfile = async () => await configRequest.get('/auth/profile').then(({ data }) => data);
