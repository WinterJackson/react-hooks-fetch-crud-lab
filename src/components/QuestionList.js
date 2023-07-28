import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch all the questions from the API when the component mounts
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        // Handle any network errors or show a message if needed
      });
  }, []);

  const handleQuestionDeleted = (deletedQuestionId) => {
    // Update the state to remove the deleted question from the list
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== deletedQuestionId)
    );
  };

  return (
    <ul>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          onQuestionDeleted={handleQuestionDeleted}
        />
      ))}
    </ul>
  );
}

export default QuestionList;
