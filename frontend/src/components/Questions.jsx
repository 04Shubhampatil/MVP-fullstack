import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Questions = () => {
  const [questions, setQuestions] = React.useState([]);
  const { topic } = useParams(); // dynamic topic from URL
  const [loading, setLoading] = React.useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5500/api/questions/get/${topic}`); // replace with your API endpoint
      console.log(res.data.getdata);
      
      setQuestions(res);
      setLoading(false);
    } catch (error) {
      console.error(error);
    
    }
  finally {
    setLoading(false);
  }
  };

  React.useEffect(() => {
    getData();
  }, [topic]);



  return (
    <div>
      <h1>Questions for topic: {topic}</h1>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          questions.map((question) => (
            <div key={question._id}>
              <h2>{question.question}</h2>
              <ul>
                {question.options.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
              <p>Answer: {question.answer}</p>
            </div>
          ))
        )
      }
    </div>
  )
};

export default Questions;
