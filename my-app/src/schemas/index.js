import * as yup from "yup"


const phoneRule = /^([+]994)?[-\s]?[(]?[0-9]{2,3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/

export const loginSchema = yup.object().shape({
    phone: yup.string().required("Nömrə daxil edin").matches(phoneRule,"(xxx) xxx xx xx  formatında olmalıdır"),
    password: yup.string().required("Şifrə daxil edin").min(5,"Minimum uzunluq 5 olmalıdır").max(20,"Maksimum uzunluq 20 olmalıdır")
})