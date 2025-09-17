import React from "react";
// import axios from 'axios'

function QuestionPage() {
  return (
    <div className="  h-screen flex flex-row items-center justify-center ">
      <form className="w-[40%] h-[80vh] flex items-center justify-center flex-col gap-4 my-3 py-7 rounded-2xl bg-zinc-700  shadow-xl">
        <h1 className="text-2xl font-bold">questions submition</h1>

        <input
          type="text"
          placeholder="Topic"
          className="input input-success w-sm px-4 py-2 rounded-lg "
        />

        <textarea
          placeholder="Description"
          className="textarea textarea-info px-3 py-2  w-sm rounded-xl"
        ></textarea>

        <input
          type="text"
          placeholder="Image Link"
          className="input input-primary px-3 py-2 w-sm rounded-xl"
        />

        <input
          type="text"
          placeholder="question ID"
          className="input input-primary px-3 py-2 w-sm rounded-xl"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default QuestionPage;
