import { useSelector } from "react-redux";
import Lists from "../components/Lists";

const Home = () => {
  const { lists } = useSelector((state) => state.lists);

  return (
    <div className='relative min-h-screen grid place-content-center py-9'>
      <div className='relative container ml-auto mr-auto flex flex-wrap items-start'>
        {lists.map((list) => (
          <Lists list={list} key={list._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
