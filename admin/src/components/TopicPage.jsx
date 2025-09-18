import React, { useState } from "react";
import axios from "axios";

function TopicPage() {
  const [topics, setTopics] = useState({
    topic: "",
    description: "",
    image: "",
   
  });
  const handlesubmit =async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("http://localhost:5500/api/topics/add", topics);
      console.log(res.data);
      
      setTopics({
        topic: "",
        description: "",
        image: "",
       
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-lg flex flex-col gap-4 my-3 py-7 px-6 bg-zinc-800   rounded-2xl inset-shadow-sm inset-shadow-indigo-500 shadow-xl"
      >
        <h1 className="text-2xl font-bold text-white text-center">
          Topic submition
        </h1>

        <input
          type="text"
          placeholder="Topic"
          value={topics.topic}
          onChange={(e) => setTopics({ ...topics, topic: e.target.value })}
          className="input input-success w-full  px-4 py-2 rounded-"
        />

        <textarea
          placeholder="Description"
          value={topics.description}
          onChange={(e) =>
            setTopics({ ...topics, description: e.target.value })
          }
          className="textarea textarea-info  w-full   px-3 py-2 rounded-xl"
        ></textarea>

        <input
          type="text"
          placeholder="Image Link"
          value={topics.image}
          onChange={(e) => setTopics({ ...topics, image: e.target.value })}
          className="input input-primary   w-full  px-3 py-2  rounded-xl"
        />

        <button className="btn btn-primary  w-full   hover:bg-indigo-700 py-2 px-5 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TopicPage;
