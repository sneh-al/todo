import AuthForm from "../components/Auth/AuthForm";

import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Handle form submission

  const log_in = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Successfully logged in");

      navigate("/home");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className='  '>
      <div className='   '>
        <div className=' '>
          <AuthForm isRegister={false} act={log_in} isLoading={isLoading} />
        </div>
      </div>
      <p className=' font-semibold bg-sky-100  p-4 text-lg text-center max-w-sm m-auto  text-black rounded-full '>
        Don't have an account?{" "}
        <Link to='/register' className='text-violet-500 underline'>
          Register now
        </Link>
      </p>
    </div>
  );
};

export default Login;
