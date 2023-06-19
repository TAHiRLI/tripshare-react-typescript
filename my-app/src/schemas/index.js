import * as yup from "yup"


const phoneRule = /^([+]994)?[-\s]?[(]?[0-9]{2,3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/

export const loginSchema = yup.object().shape({
    phone: yup.string().required("Nömrə daxil edin").matches(phoneRule,"(xxx) xxx xx xx  formatında olmalıdır"),
    password: yup.string().required("Şifrə daxil edin").min(5,"Minimum uzunluq 5 olmalıdır").max(20,"Maksimum uzunluq 20 olmalıdır")
})

export const registerSchema = yup.object().shape({
    fullname: yup.string().required("Adınızı daxil edin").max(30,"Maksimum 30 hərfdən ibarət olmalıdır"),
    phone: yup.string().required("Nömrə daxil edin").matches(phoneRule,"(xxx) xxx xx xx  formatında olmalıdır"),
    password: yup.string().required("Yeni şifrə daxil edin").min(5,"Minimum uzunluq 5 olmalıdır").max(20,"Maksimum uzunluq 20 olmalıdır"),
    confirmPassword:  yup.string().required("Şifrəni təkrar daxil edin").oneOf([yup.ref("password"),null],"Təkrar şifrə eyni olmalıdır")
})