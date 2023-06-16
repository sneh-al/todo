import { Formik, Form } from "formik";
import { PropTypes } from "prop-types";
import {
  initialValues,
  loginvalidationSchema,
  registervalidationSchema,
} from "./form";
import { Register } from "./Register";
import { Login } from "./Login";
import { toast } from "react-toastify";

const AuthForm = ({ isRegister, act, isLoading }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    // Process registration logic here

    if (isRegister) {
      act(values);
    } else {
      const data = {
        email: values.email,
        password: values.password,
      };
      act(data);
    }

    setSubmitting(false);
  };

  const validationSchema = isRegister
    ? registervalidationSchema
    : loginvalidationSchema;

  return (
    <div className='  p-4 m-4 '>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {() => (
          <Form>
            {isRegister ? <Register /> : <Login />}
            <div className='flex'>
              <button
                disabled={isLoading}
                type='submit'
                className={`py-2 px-6 rounded-t-xl rounded-l-xl   transition duration-200 font-bold ${
                  isLoading
                    ? "text-grey-600"
                    : "bg-white hover:bg-gray-500 text-black-600 hover:text-white"
                }`}>
                {isLoading ? "Wait..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AuthForm.propTypes = {
  isRegister: PropTypes.bool.isRequired,
  act: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};

export default AuthForm;
