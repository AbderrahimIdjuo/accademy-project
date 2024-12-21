import React, { useContext } from "react";
import { UserContext } from "../page";



function Button() {
    const { setUser } = useContext(UserContext);
  return (
    <button onClick={()=>{setUser("Abderrahim Oujdi")}} className="shadow-lg btn hover:shadow-2xl p-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white rounded-lg m-4 transition">
      Update
    </button>
  );
}

export default Button;
