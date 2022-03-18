import "./App.css";
import photo from "./img/logo.png";
function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-900">
      <div className="max-w-sm mx-auto p-8 rounded-xl bg-white shadow-md space-y-2 sm:flex sm:items-center sm:px-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800 sm:dark:hover:bg-gray-400 sm:dark:duration-1000">
        <img
          src={photo}
          alt=""
          className="h-24 mx-auto rounded-full ring-4 ring-green-400 sm:flex-shrink-0 transform hover:scale-105 duration-500"
        />
        <div className="space-y-0.5 sm:text-left">
          <div className="text-center ">
            <h1 className=" text-black font-semibold dark:text-gray-200">
              Md Kaium Islam
            </h1>
            <p className="text-gray-500 font-medium dark:text-gray-400 sm:dark:text-red-200">
              Programmer
            </p>
          </div>
          <button className="btn btn-purple ">Visit Now</button>
          <button className="btn btn-green">Website</button>
        </div>
      </div>
    </div>
  );
}

export default App;
