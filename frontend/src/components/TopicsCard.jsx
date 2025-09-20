import React from "react";

function TopicsCard({ topic, description, image }) {
  return (
    <div className="bg-zinc-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform p-6 flex flex-col items-center text-center">
      <img
        src={image}
        alt="topic"
        className="w-32 h-32 object-cover rounded-md mb-4"
      />
      <h1 className="text-xl font-bold text-indigo-400 mb-2">{topic}</h1>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default TopicsCard;
