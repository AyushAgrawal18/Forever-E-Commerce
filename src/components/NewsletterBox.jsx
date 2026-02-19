import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 10% OFF
      </p>
      <p className="text-gray-400 mt-3">
        Don't miss out on the chance to save big on your favorite products. Sign
        up now and be the first to know about our exciting deals!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer hover:bg-gray-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
