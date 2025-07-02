import React from "react";
import { Link } from "react-router";

const BlogCard = ({blog}) => {
    const {id,author,title,date,views,image} = blog;
  return (
    <Link to={`/blog/${id}`} className="flex flex-col rounded-lg hover:cursor-pointer bg-accent-content transition duration-300 transform   hover:scale-105 group ">
      <div
        
      >
        <img
          alt=""
          className="object-cover w-full rounded-t-lg h-52 dark:bg-gray-500"
          src={image}
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <strong
          className="text-xs tracking-wider uppercase text-secondary"
        >
          {author}
        </strong>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {title}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>{date}</span>
          <span>{views}K views</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
