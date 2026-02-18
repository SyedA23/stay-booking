const Error = ({ message, onRetry }) => {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-red-500 mb-3">
        Oops! Something went wrong
      </h2>

      <p className="text-gray-600 mb-6">
        {message || "We are unable to load stays right now. Please try again."}
      </p>

      <button
        onClick={onRetry}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
