import { object, string } from 'yup';

let validations = object({
    userName: string().max(20, 'En fazla 20 karakter olabilir.').required('Zorunlu alan.'),
    // password: string().required('Zorunlu alan.')
});

export default validations; 