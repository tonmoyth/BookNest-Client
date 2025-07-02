import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("./blog.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);
  return <div className="min-h-screen pt-20 p-6">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            blogData.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
        }
    </div>
  </div>;
};

export default Blog;
