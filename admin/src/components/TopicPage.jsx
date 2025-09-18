import React, { useState } from "react";
import axios from "axios";
import { FileText, ImageIcon,Type, AlignLeft,Send  } from "lucide-react";

function TopicPage() {
  const [topics, setTopics] = useState({
    topic: "",
    description: "",
    image: "",
  });
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(
        "http://localhost:5500/api/topics/add",
        topics
      );
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
        <h1 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
          <FileText size={22} /> Topic submition
        </h1>
        <div className=" relative">
          <Type className="text-gray-500 absolute z-20 top-3 left-3" size={20} />
        <input
          type="text"
          placeholder="Topic"
          value={topics.topic}
          onChange={(e) => setTopics({ ...topics, topic: e.target.value })}
          className="input input-success w-full  px-9 py-2 rounded-xl "
        />
        </div>

       <div className=" relative">  
         <AlignLeft className="text-gray-500 absolute z-20 top-3 left-3" size={20} />
         <textarea
          placeholder="Description"
          value={topics.description}
          onChange={(e) =>
            setTopics({ ...topics, description: e.target.value })
          }
          className="textarea textarea-info  w-full   px-9 py-2 rounded-xl"
        ></textarea>
       </div>

       <div className=" relative">
         <ImageIcon className="text-gray-500 absolute z-20 top-3 left-3" size={20} />
         <input
          type="text"
          placeholder="Image Link"
          value={topics.image}
          onChange={(e) => setTopics({ ...topics, image: e.target.value })}
          className="input input-primary   w-full  px-9 py-2  rounded-xl"
        />
       </div>

        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          <Send size={20} /> Submit
        </button>
      </form>
    </div>
  );
}

export default TopicPage;
