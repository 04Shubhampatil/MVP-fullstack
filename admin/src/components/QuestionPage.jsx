import React from "react";
import axios from "axios";

function QuestionPage() {
  const handlesubmit = async (e) => {
    e.preventDefault();

    const Question = {
      topic: e.target[0].value,
      question: e.target[1].value,
      options: [
        e.target[2].value,
        e.target[3].value,
        e.target[4].value,
        e.target[5].value,
      ],
      answer: e.target[6].value,
    };

    const res = await axios.post(
      "http://localhost:5500/api/questions/add",
      Question
    );
    console.log(res.data);

    // Reset form fields
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-lg flex flex-col gap-4 my-3 py-7 px-6 bg-zinc-800 rounded-2xl inset-shadow-sm inset-shadow-indigo-500 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-white text-center">
          Question Submission
        </h1>

        <input
          type="text"
          placeholder="Enter Topic"
          className="input input-success w-full px-4 py-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Enter Question"
          className="input input-warning w-full px-4 py-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Option 1"
          className="input input-error w-full px-3 py-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Option 2"
          className="input input-error w-full px-3 py-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Option 3"
          className="input input-error w-full px-3 py-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Option 4"
          className="input input-error w-full px-3 py-2 rounded-xl"
        />
        <input
          type="text"
          placeholder="Answer"
          className="input input-info w-full px-3 py-2 rounded-xl"
        />

        <button className="btn btn-primary w-full hover:bg-indigo-700 py-2 px-5 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuestionPage;
