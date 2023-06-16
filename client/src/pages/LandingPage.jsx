import { Link, Navigate } from "react-router-dom";
import heroImage from "../assets/hero.svg";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (userInfo) {
    return <Navigate to='/home' replace />;
  }
  return (
    <section className='bg-slate-900'>
      <div className='flex flex-wrap '>
        <div className=' lg:pt-16 pb-6 w-full lg:w-1/2 h-screen flex z-10'>
          <div className='max-w-md m-auto flex '>
            <div className=' m-6'>
              <h1 className='text-3xl font-bold mb-4 title'>
                Get Organized and Stay Productive with TaskSuchi
              </h1>
              {sections.map((section, i) => (
                <div className=' text-white text-left mb-6' key={i}>
                  <h3 className='text-xl font-bold text-red-400'>
                    {section.title}
                  </h3>
                  <p className=' text-purple-800'>{section.description}</p>
                </div>
              ))}
              <Link
                to='/register'
                className='py-2 px-6 rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-600 hover:text-white transition duration-200 font-bold'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className='block relative w-full lg:w-1/2 bg-green-600'>
          <div className='absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center'>
            <img className='lg:max-w-xl mx-auto' src={heroImage} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

const sections = [
  {
    title: "Effortless Task Management",
    description:
      "Create and organize your to-do lists, set due dates, and receive reminders. Stay on top of your tasks and never miss a deadline.",
  },
  {
    title: "Boost Productivity and Focus",
    description:
      "Prioritize tasks, categorize them, and break them down into smaller sub-tasks. Stay focused, motivated, and accomplish your goals efficiently.",
  },
  {
    title: "Access Anywhere, Anytime",
    description:
      "Access your to-do lists on any device, whether you're at home, in the office, or on the go. Stay productive and organized wherever you are.",
  },
];
