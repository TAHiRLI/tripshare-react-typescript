import { useFormik } from "formik";
import { registerSchema } from "../../../../schemas";
import { useSignIn } from "react-auth-kit";
import usePhoneTrimmer from "../../../../hooks/usePhoneTrimmer";
import { loginService } from "../../../../APIs/services/loginService";

function Register({ changeOption }) {
  const signIn = useSignIn();
  const phoneTrimmer = usePhoneTrimmer();
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  async function onSubmit(data) {
    let myData = {
      number:phoneTrimmer(data.phone),
      fullname:data.fullname,
      password:data.password,
      confirmPassword:data.confirmPassword
    }

    loginService.requestRegister(myData).then((res)=>{
      console.log(res);

      signIn({
        token:res.data.token,
        expiresIn: 123,
        tokenType:"Bearer",
        authState: {roles:["admin", "superAdmin"]},
      })


    }).catch((err)=>{
      setErrors({phone:"bele telefon nomresi movcuddur"})
    });
  }
  // show login
  const handleClick = () => {
    changeOption();
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="" className="form-label">
            Ad, Soyad
          </label>
          <input
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="fullname"
            name="fullname"
            className={`form-control ${
              errors.fullname && touched.fullname
                ? "border-danger border-2"
                : ""
            } `}
          />

          {errors.fullname && touched.fullname && (
            <small className="text-danger">{errors.fullname}</small>
          )}
        </div>
        <div className="my-3">
          <label className="form-label" htmlFor="">
            Telefon nömrəsi
          </label>
          <input
            className={`form-control ${
              errors.phone && touched.phone ? "border-danger border-2" : ""
            } `}
            type="text"
            id="phone"
            name="phone"
            placeholder="(xxx) xxx-xx-xx"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>

        <div className="my-3">
          <label className="form-label" htmlFor="">
            Şifrə
          </label>
          <input
            className={`form-control ${
              errors.password && touched.password
                ? "border-danger border-2"
                : ""
            } `}
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        <div className="my-3">
          <label className="form-label" htmlFor="confirmPassword">
           Təkrar Şifrə
          </label>
          <input
            className={`form-control ${
              errors.confirmPassword && touched.confirmPassword
                ? "border-danger border-2"
                : ""
            } `}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <small className="text-danger">{errors.confirmPassword}</small>
          )}
        </div>
        <div className="">
          <button
            disabled={isSubmitting}
            className="m-auto d-block mt-3 btn btn-success"
            type="submit"
          >
            Daxil ol
          </button>
        </div>
      </form>

      <p className="text-center mt-3 mb-0">
        <span
          className="text-decoration-underline text-primary pointer"
          onClick={handleClick}
        >
          Daxil Ol
        </span>
      </p>
    </div>
  );
}

export default Register;
