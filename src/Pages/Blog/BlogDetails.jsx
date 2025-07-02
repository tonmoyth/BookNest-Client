import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaEye } from 'react-icons/fa';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import NavBerButton from '../../Components/SliderButton/NavBerButton';

const BlogDetails = () => {
    const blogData = useLoaderData();
    console.log(blogData)
    const {id} = useParams();
    const [blog,setBlog] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const singleBlog = blogData.find(data => data.id === parseInt(id));
        setBlog(singleBlog);
    },[blogData,id])
   
    return (
        <div className="min-h-screen pt-20 p-6">
            <section className="w-10/12 mx-auto px-4 py-10">
      {/* Back Button */}
      <div className='mb-6'>
        <NavBerButton onClick={() => navigate(-1)} level={`Back to Blog`}></NavBerButton>
      </div>

      {/* Blog Card */}
      <div className="bg-accent-content text-primary shadow-xl rounded-xl overflow-hidden">
        {/* Image */}
        <figure className="h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary">{blog.title}</h1>

          {/* Author + Meta Info */}
          <div className="text-sm text-gray-500 flex flex-wrap items-center gap-4">
            <span>👤 {blog.author}</span>
            <span>📅 {blog.date}</span>
            <span className="flex items-center gap-1"><FaEye /> {blog.views} views</span>
          </div>

          {/* Excerpt */}
          <p className="text-md font-medium text-primary-content">{blog.excerpt}</p>

          {/* Full Content */}
          <div className="prose max-w-none text-primary-content">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default BlogDetails;