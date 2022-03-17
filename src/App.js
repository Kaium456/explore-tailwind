import "./App.css";
import photo from "./img/logo.png";
function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-sm mx-auto p-8 rounded-xl bg-white shadow-md space-y-2 sm:flex sm:items-center sm:px-4 sm:space-y-0 sm:space-x-6">
        <img
          src={photo}
          alt=""
          className="h-24 mx-auto rounded-full ring-4 ring-green-400 sm:flex-shrink-0 transform hover:scale-105 duration-500"
        />
        <div className="space-y-0.5 sm:text-left">
          <div className="text-center ">
            <p className="text-lg text-black font-semibold">Md Kaium Islam</p>
            <p className="text-gray-500 font-medium ">Programmer</p>
          </div>
          <button className="mx-6 px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Visit Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
