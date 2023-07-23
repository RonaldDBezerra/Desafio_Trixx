import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .email('Informe um email valido')
    .required('E-mail obrigatório'),
  phone: yup.number().required('Telefone obrigatório'),
  password: yup
    .string()
    .min(6, 'Sua senha deve conter no minino 6 caracteres')
    .required('Senha obrigatória'),
  confirmPassword: yup
    .string()
    .min(6, 'Sua senha deve conter no minino 6 caracteres')
    .required('Senha obrigatória')
    .oneOf([yup.ref('password')], 'Senhas diferentes'),
});
