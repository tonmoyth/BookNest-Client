import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <img
              src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" // exciting gif
              alt="404 Not Found"
              className="w-96 mb-8 rounded-4xl"
            />
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
          to='/'
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded bg-secondary text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
