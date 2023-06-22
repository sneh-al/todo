import { useParams } from "react-router-dom";
import { useGetTodosMutation } from "../slices/todoApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../slices/todoSlice";
import { useEffect } from "react";
import Li from "./Li";
import { toast } from "react-toastify";

const ListComponent = () => {
  const { todos } = useSelector((state) => state.todo);
  const [getTodos, { isLoading }] = useGetTodosMutation();
  const { id } = useParams();

  const dispatch = useDispatch();

  const fetchTodos = async () => {
    try {
      const data = {
        listId: id,
      };
      const { todos } = await getTodos(data).unwrap();
      const todoList = todos.todos;
      dispatch(setTodo(todoList));
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, [id]);
  return (
    <ul className='gap-2 flex flex-col py-4 '>
      {isLoading
        ? "loaidn..."
        : todos.map((todo) => {
            if (todo !== null) {
              return <Li todo={todo} key={todo._id} />;
            }
          })}
    </ul>
  );
};

export default ListComponent;
