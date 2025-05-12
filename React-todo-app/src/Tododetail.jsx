import React from "react";
// import { GrEdit } from "react-icons/gr";

const Tododetail = () => {
  return (
    <div className="mt-8 rounded-md border border-gray-500/50 shadow">
      <form className="px-5 py-5 flex items-center gap-3">
        <div className="w-full flex items-center gap-3">
          <label
            htmlFor=""
            className="capitalize font-medium text-gray-700 text-lg"
          >
            edit
          </label>
          <input
            type="edit"
            placeholder="Move the lawn"
            className="w-full px-2 py-2.5 rounded-sm inline-block ring-1 ring-gray-400"
          />
        </div>

        <button className="px-2.5 py-0.5 ring-2 ring-pink-500 rounded-md text-lg font-medium">
          save
        </button>
      </form>

      <div>
        {/* <ul className="border-t border-gray-500/50 overflow-y-auto">
          <li className="w-full px-3 py-5">Vacum the carpet</li>
          <input type="checkbox" />
        </ul> */}
        {/* <GrEdit /> */}
      </div>
      {/* <ul className="border-t border-gray-500/50 overflow-y-auto">
        <li className="w-full px-3 py-9"></li>
      </ul>
      <ul className="border-t border-gray-500/50 overflow-y-auto">
        <li className="w-full px-3 py-9"></li>
      </ul> */}
    </div>
  );
};

export default Tododetail;
