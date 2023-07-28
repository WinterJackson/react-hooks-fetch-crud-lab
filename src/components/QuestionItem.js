import React from "react";

function QuestionItem(props) {
  const { id, prompt, answers, correctIndex } = props.question;
  const options = answers || [];

  const handleDelete = () => {
    // Make a DELETE request to delete the question with the corresponding id
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // If the delete request is successful, update the state in the parent component
          props.onQuestionDeleted(id);
        } else {
          // Handle any errors or show a message if needed
        }
      })
      .catch((error) => {
        // Handle any network errors
      });
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
