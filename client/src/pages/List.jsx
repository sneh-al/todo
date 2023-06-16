import { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetTodosMutation } from "../slices/todoApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../slices/todoSlice";
import ListComponent from "../components/ListComponent";
import TodoInput from "../components/TodoINput";

const List = () => {
  return (
    <div className='m-h-screen grid place-items-center  '>
      <div className='w-full max-w-lg p-5 flex flex-col '>
        <div>
          <TodoInput />
        </div>
        <ListComponent />
      </div>
    </div>
  );
};

export default List;
