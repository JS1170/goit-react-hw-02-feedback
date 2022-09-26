const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Counter__controls">
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
      {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;