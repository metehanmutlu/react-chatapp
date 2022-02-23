import { object, string, ref } from 'yup';

let validations = object({
    email: string().email('Geçerli bir email girin.').required('Zorunlu alan.'),
    password: string().required('Zorunlu alan.').min(8, 'Parolanız en az 8 karakter olmalıdır.'),
    passwordConfirm: string().oneOf([ref('password')], 'Parolalar eşleşmiyor.').required('Zorunlu alan.'),
});

export default validations; 