import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useAddTodosMutation } from "../slices/todoApiSlice";
import { useDispatch } from "react-redux";
import { setTodo } from "../slices/todoSlice";
import { toast } from "react-toastify";

const TodoInput = () => {
  const [addTodo, { isLoading }] = useAddTodosMutation();
  const dispatch = useDispatch();

  const inputRef = useRef();
  const { id } = useParams();

  const handleSubmit = async () => {
    const data = {
      listId: id,
      todo: {
        title: inputRef.current.value,
        isCompleted: false,
      },
    };
    try {
      const { todos } = await addTodo(data).unwrap();
      const todoList = todos.todos;

      inputRef.current.value = "";
      dispatch(setTodo(todoList));
      toast.success("todo successfully added");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className='relative flex items-center  m-auto w-full'>
      <input
        ref={inputRef}
        type='text'
        name=''
        id=''
        className='bg-orange-200 p-3 w-full hover:bg-orange-400 focus:border-blue-700 focus:outline-8'
      />
      <button onClick={handleSubmit} className='absolute right-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
        </svg>
      </button>
    </div>
  );
};

export default TodoInput;
