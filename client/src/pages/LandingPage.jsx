const LandingPage = () => {
  return (
    <div className='container p-6 bg-gradient-to-r from-purple-200 to-blue-300 '>
      <div className='flex flex-col justify-center items-center min-h-screen '>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4 title'>
            Get Organized and Stay Productive with To-Do
          </h1>
          <p className='text-lg mb-8'>
            Simplify your life, prioritize tasks, and accomplish more with ease.
          </p>
        </div>

        <div className='bg-red '>
          {sections.map((section, i) => (
            <div className=' text-white text-left mb-6' key={i}>
              <h3 className='text-xl font-bold text-red-400'>
                {section.title}
              </h3>
              <p className=' text-purple-800'>{section.description}</p>
            </div>
          ))}
          <button className='py-3 px-6 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-200'>
            Get Started
          </button>
        </div>
      </div>
    </div>
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
