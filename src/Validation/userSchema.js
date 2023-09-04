import * as yup from 'yup'

const userSchema = yup.object().shape({
	name: yup
	    .string().trim()
	    .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required('must select a size!'),
    sauce: yup
        .string()
        .required('saucey boys required!')
        .oneOf(['patis', 'spicy', 'alfredo', 'pesto']),
    pineapple: yup.boolean(),
    pulledPork: yup.boolean(),
    spinach: yup.boolean(),
    ham: yup.boolean(),
    pepperoni: yup.boolean(),
    specialText: yup.string()
  });

export default userSchema;

