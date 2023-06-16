import Navlink from "./Navlink";

const NavLinks = () => {
  const normalRoutes = ["register", "login"];

  return (
    <ul className='flex gap-5 items-stretch md:flex-row flex-col    '>
      {normalRoutes.map((item, i) => (
        <Navlink title={item} key={i} />
      ))}
    </ul>
  );
};

export default NavLinks;
