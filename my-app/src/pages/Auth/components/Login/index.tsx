import { useFormik } from "formik";
import React from "react";
import { loginSchema } from "../../../../schemas";

const onSubmit = () => {};

function Login({ changeOption }) {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        phone: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  console.log(errors);

  // change component

  const handleClick = (e) => {
    e.preventDefault();
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
            placeholder="(xx) xxx-xx-xx"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
        </div>

        <div className="">
          <button className="m-auto d-block mt-3 btn btn-success">Daxil</button>
        </div>
      </form>

      <p className="text-center mt-3 mb-0">
        <a href="" onClick={handleClick}>
          Qeydiyyatdan keç
        </a>
      </p>
    </div>
  );
}

export default Login;
