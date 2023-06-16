import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

const FieldRoot = ({ id, label, name, type }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block text-white text-sm font-bold mb-2'>
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        className='w-full border border-gray-50 rounded-lg shadow p-2'
      />
      <ErrorMessage
        name={name}
        component='p'
        className='text-red-500 text-xs mt-1'
      />
    </div>
  );
};

FieldRoot.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FieldRoot;
