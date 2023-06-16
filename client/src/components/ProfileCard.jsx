import { useState } from "react";
import { Form, Formik } from "formik";

import { useSelector } from "react-redux";
import { useUpdateMutation } from "../slices/userApiSlice";
import FieldRoot from "./layouts/FieldRoot";
import Modal from "./layouts/Modal";
import { updatevalidationSchema } from "./Auth/form";
import { toast } from "react-toastify";

const ProfileCard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateMutation();
  const [passwordForm, setPasswordForm] = useState(false);
  const updatePassword = () => {
    setPasswordForm(!passwordForm);
  };

  const initialValues = {
    oldPassword: "",
    password: "",
    verifypassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      const data = {
        ...values,
        id: userInfo._id,
      };
      const res = await updateProfile(data).unwrap();
      toast.success("Password updated successfully");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className='flex bg-gradient-to-r from-indigo-200  m-6   shadow-slate-950 w-full   gap-5 text-center '>
      <div className='m-w-sm    '>
        <img
          src='https://picsum.photos/400/300'
          className='object-contain '
          alt='img '
        />
      </div>
      <div className='grid place-items-center py-4'>
        <p id='name' className='font-bold text-blue-900 text-2xl '>
          {userInfo?.name}
        </p>

        <p id='email' className='font-bold text-blue-600 text-md pb-3'>
          {userInfo?.email}
        </p>
        <button
          className='px-3 py-2 bg-red-100 hover:bg-red-500 hover:text-white transition-all duration-100 ease-linear   '
          onClick={updatePassword}>
          Update Passwords
        </button>
      </div>
      {passwordForm && (
        <Modal closeModal={updatePassword}>
          <div className='bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 m-au'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={updatevalidationSchema}>
              {() => (
                <Form>
                  <FieldRoot
                    name='oldPassword'
                    type='passowrd'
                    id='oldPassword'
                    label='Old Password'
                  />
                  <FieldRoot
                    name='password'
                    type='password'
                    id='password'
                    label='New password'
                  />{" "}
                  <FieldRoot
                    name='verifypassword'
                    type='password'
                    id='verifypassword'
                    label='Repaet New Password'
                  />
                  <div className=' px-4 py-3  '>
                    <button
                      type='button'
                      className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2 transition duration-200 font-bold'
                      onClick={updatePassword}>
                      <i className='fas fa-times'></i> Close
                    </button>
                    <button
                      disabled={isLoading}
                      type='submit'
                      className={`py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700  transition duration-200 font-bold ${
                        isLoading
                          ? "text-grey-600"
                          : "hover:bg-gray-500 text-black-600 hover:text-white"
                      }`}>
                      {isLoading ? "Wait..." : "Update"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileCard;
