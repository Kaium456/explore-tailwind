import React from "react";

const Button = () => {
  return (
    <div>
      <button className="p-4 py-1 bg-lime-600 rounded-full font-bold text-white">
        Click Me
      </button>
      <br />
      <br />
      <button className="p-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-600 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Message
      </button>
    </div>
  );
};

export default Button;
