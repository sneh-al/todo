import * as Yup from "yup";

export const registervalidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  verifypassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});
export const loginvalidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const initialValues = {
  name: "",
  email: "",
  password: "",
  verifypassword: "",
};

export const updatevalidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  verifypassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});
