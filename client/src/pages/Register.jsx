import { useDispatch } from "react-redux";
import AuthForm from "../components/Auth/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const regis_ter = async (data) => {
    try {
      const res = await register(data).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/home");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className=''>
      <div>
        <div className=' '>
          <AuthForm isRegister={true} act={regis_ter} isLoading={isLoading} />
        </div>
      </div>
      <p className=' font-semibold bg-sky-100  p-4 text-lg text-center max-w-sm m-auto  text-black rounded-full '>
        Have an account?{" "}
        <Link to='/login' className='text-violet-500 underline'>
          Log in now
        </Link>
      </p>
    </div>
  );
};

export default Register;
