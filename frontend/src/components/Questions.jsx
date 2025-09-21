import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const { topic } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // track user answers

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5500/api/questions/get/${topic}`
      );
      setQuestions(res.data.getdata);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [topic]);

  // handle option click
  const handleSelect = (qId, option, correctAnswer) => {
    if (selectedAnswers[qId]) return; // prevent re-selection
    setSelectedAnswers({
      ...selectedAnswers,
      [qId]: { chosen: option, correct: correctAnswer },
    });
  };

  return (
    <div className="min-h-screen  p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Questions for topic: {topic}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-slate-400 text-lg">Loading...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {questions.map((question, qIndex) => {
              const userAnswer = selectedAnswers[question._id];

              return (
                <div
                  key={question._id}
                  className=" rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-xl"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg flex-shrink-0">
                        {qIndex + 1}
                      </span>
                      <h2 className="text-xl font-semibold text-white leading-relaxed">
                        {question.question}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {question.options.map((option, index) => {
                        const isChosen = userAnswer?.chosen === option;
                        const isCorrect = userAnswer?.correct === option;

                        return (
                          <div
                            key={index}
                            onClick={() =>
                              handleSelect(question._id, option, question.answer)
                            }
                            className={`px-6 py-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                              !userAnswer
                                ? "bg-slate-700/50 hover:bg-slate-700 border-slate-600 hover:border-blue-500/50 hover:shadow-lg transform hover:scale-[1.01]"
                                : isChosen && isCorrect
                                ? "bg-emerald-600/20 border-emerald-500/50 text-emerald-100"
                                : isChosen && !isCorrect
                                ? "bg-red-600/20 border-red-500/50 text-red-100"
                                : "bg-slate-700/30 border-slate-600/50 text-slate-300"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{option}</span>
                              {userAnswer && isChosen && (
                                <span className="text-sm font-semibold">
                                  {isCorrect ? "✓" : "✗"}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {userAnswer && (
                      <div className="mt-6 p-4 bg-emerald-600/10 border border-emerald-500/30 rounded-xl">
                        <p className="text-emerald-400 font-medium flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>
                          Correct Answer: {question.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;