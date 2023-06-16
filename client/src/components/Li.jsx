import { useParams } from "react-router-dom";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../slices/todoApiSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../slices/todoSlice";
import { toast } from "react-toastify";

const Li = ({ todo }) => {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [edit, setEdit] = useState(false);
  const handleInput = () => {
    setEdit(!edit);
  };
  const [checked, setChecked] = useState(todo?.isCompleted);

  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const dispatch = useDispatch();

  //delete todo
  const handleDeleteTodo = async (todoid) => {
    const data = {
      listId: id,
      id: todoid,
    };
    try {
      const { todos } = await deleteTodo(data).unwrap();
      const todoList = todos.todos;
      dispatch(setTodo(todoList));
      toast.error("Deleted successfully");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleUpdate = async (todoId, text) => {
    try {
      const data = {
        listId: id,
        todoId: todoId,
        action: "edit",
        text: text.trim(),
      };
      const { todos } = await updateTodo(data).unwrap();
      const todoList = todos.todos;
      dispatch(setTodo(todoList));
      handleInput();
      toast.success("Updated successfully");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  //make complete and incomplete
  const handleComplete = async () => {
    try {
      const data = {
        listId: id,
        todoId: selected,
        isCompleted: checked,
        action: "setStatus",
      };

      const { todos } = await updateTodo(data).unwrap();
      const todoList = todos.todos;
      dispatch(setTodo(todoList));
      toast.success("Updated successfully");
      setSelected(null);
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  const handleCheckboxChange = (todoId) => {
    setChecked(!checked);
    setSelected(todoId);
  };
  useEffect(() => {
    selected && handleComplete();
  }, [selected]);

  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <li
      className='relative bg-white rounded-lg m-h-64 p-1 transform   transition duration-300 '
      key={todo._id}
      onMouseEnter={showMenu}
      onMouseLeave={showMenu}>
      <div className='rounded-lg p-4 bg-purple-800 flex flex-col md:flex-row relative '>
        {edit ? (
          <TodoInput
            handleUpdate={handleUpdate}
            id={todo._id}
            text={todo.title}
            handleInput={handleInput}
          />
        ) : (
          <Actions
            todo={todo}
            checked={checked}
            isLoading={isLoading}
            handleCheckboxChange={handleCheckboxChange}
            show={show}
            handleInput={handleInput}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </div>
    </li>
  );
};

export default Li;
const TodoInput = ({ handleUpdate, id, text }) => {
  const inputRef = useRef();
  const handleSubmit = async () => {
    handleUpdate(id, inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className=' relative  flex items-center  m-auto w-full'>
      <input
        ref={inputRef}
        defaultValue={text}
        type='text'
        name=''
        id=''
        className='bg-red-100 p-3 w-full hover:bg-red-200 focus:border-blue-700 focus:outline-8'
      />
      <button onClick={handleSubmit} className='absolute z-10 right-4'>
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

function Actions({
  checked,
  isLoading,
  handleCheckboxChange,
  show,
  handleInput,
  handleDeleteTodo,
  todo,
}) {
  return (
    <>
      <div className='flex'>
        <input
          type='checkbox'
          className='p-3 hidden '
          id={todo._id}
          checked={checked}
          disabled={isLoading}
          onChange={() => handleCheckboxChange(todo._id)}
        />
        <label
          htmlFor={todo._id}
          className={`${
            checked ? "bg-green-600 rounded-full" : "bg-white"
          } h-5 my-auto w-5 transition-all duration-100 ease-in`}></label>
      </div>
      <p className='font-bold text-lg p-3'>{todo.title}</p>
      <div
        className={`${
          show ? "ml-auto top-0 block absolute right-0" : "hidden"
        }`}>
        <button
          className='bg-orange-500 p-3 capitalize hover:bg-orange-800 hover:text-white'
          onClick={handleInput}>
          edit
        </button>
        <button
          className='p-3 bg-red-500 hover:bg-red-800 hover:text-white capitalize'
          onClick={() => handleDeleteTodo(todo._id)}>
          delete
        </button>
      </div>
    </>
  );
}
