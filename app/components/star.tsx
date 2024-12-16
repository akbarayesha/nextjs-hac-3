const SmallStars = ({ rating = 0, total = 5 }) => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: total }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            <path d="M12 2.25l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.27l-6.18 3.25 1.18-6.88-5-4.87 6.91-.99L12 2.25z" />
          </svg>
        ))}
      </div>
    );
  };
  
  export default SmallStars;