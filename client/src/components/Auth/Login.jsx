import FieldRoot from "../layouts/FieldRoot";

export const Login = () => (
  <>
    <FieldRoot name='email' type='email' id='email' label='Email' />
    <FieldRoot name='password' type='password' id='password' label='Password' />
  </>
);
