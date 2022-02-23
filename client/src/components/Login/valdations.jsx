import { object, string } from 'yup';

let validations = object({
    userName: string().required('Zorunlu alan.'),
    // password: string().required('Zorunlu alan.')
});

export default validations; 