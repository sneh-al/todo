import FieldRoot from "../layouts/FieldRoot";

export const Register = () => (
  <>
    <FieldRoot name='name' type='text' id='name' label='Name' />
    <FieldRoot name='email' type='email' id='email' label='Email' />
    <FieldRoot name='password' type='password' id='password' label='Password' />
    <FieldRoot
      name='verifypassword'
      type='password'
      id='verifypassword'
      label='Verify Password'
    />
  </>
);
