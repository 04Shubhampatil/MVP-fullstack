import React, { useEffect, useState } from "react";
import axios from "axios";
import TopicsCard from "./TopicsCard";
import { useNavigate } from "react-router-dom";

const Topics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
 

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/topics/get");
      setData(res.data.topics);
      console.log(res.data.topics);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

 
  return (
   <div className="min-h-screen flex items-center justify-center mx-auto p-6">
  {loading ? (
    <p className="text-indigo-500 text-xl">Loading...</p>
  ) : error ? (
    <p className="text-red-500 text-xl">{error}</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
      {data.map((item) => (
        <TopicsCard 
          key={item._id}
          id={item._id}
          topic={item.topic}
          description={item.description}
          image={item.image}
          onClick={() => navigate(`/questions/${item.topic}`)}
        />
      ))}
    </div>
  )}
</div>

  );
};

export default Topics;
