import { useFormik } from "formik";
import { loginSchema } from "../../../../schemas";
import { loginService } from "../../../../APIs/services/loginService";
import { useSignIn } from "react-auth-kit";
import usePhoneTrimmer from "../../../../hooks/usePhoneTrimmer";


function Login({ changeOption }) {
  
  const signIn = useSignIn();
  const phoneTrimmer  = usePhoneTrimmer();


  // ====================
  // Formik
  // ====================
  const { values, handleBlur, handleChange, handleSubmit,setErrors, errors, touched, isSubmitting } =
    useFormik({
      initialValues: {
        phone: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });


    
    
    async function onSubmit(values, actions) {
      let data ={
        number: phoneTrimmer(values.phone),
        password:values.password
      }
        loginService.submitLogin(data).then(res=>{
          signIn(
            {
              token: res.data.token,
              expiresIn: 1000,
              tokenType: "Bearer",
              authState: {roles:["admin", "superAdmin"]},
          }
          )
          actions.resetForm();

       }).catch(err=>{
        setErrors({phone:"Istifadəçi adı və ya şifrə yanlışdır"});
       });
    
    };

  // change component

  const handleClick = () => {
    changeOption();
  };
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
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
        {errors.phone && touched.phone && <small className="text-danger">{errors.phone}</small>}  
        </div>

        <div className="my-3">
          <label className="form-label" htmlFor="">
            Şifrə
          </label>
          <input
            className={`form-control ${
              errors.password && touched.password ? "border-danger border-2" : ""
            } `}
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        {errors.password && touched.password && <small className="text-danger">{errors.password}</small>}  

        </div>

        <div className="">
          <button disabled={isSubmitting} className="m-auto d-block mt-3 btn btn-success" type="submit">Daxil ol</button>
        </div>
      </form>

      <p className="text-center mt-3 mb-0">
          <span className="text-decoration-underline text-primary pointer" onClick={handleClick}>
          Qeydiyyatdan keç
        </span>
      </p>
    </div>
  );
}

export default Login;
