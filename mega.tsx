import React from 'react';
import BlogCard from '../components/blogCard';

export default function Mega() {
  const Posts = [
    {
      id: '1',
      title: 'HTML Block of Web Development',
      description: "Explore the fundamentals of HTML, the backbone of all websites.",
      date: '2024-12-18',
      imageUrl: "/image/html.jpg"
    },
    {
      id: '2',
      title: 'CSS Styling for Modern Websites',
      description: "Dive into the world of CSS to design and style visually appealing web pages.",
      date: '2024-12-20',
      imageUrl: "/image/next.jpg"
    },
    {
      id: '3',
      title: 'JavaScript: The Dynamic Web Language',
      description: "Learn JavaScript to add interactivity and functionality to your web pages.",
      date: '2024-12-22',
      imageUrl: "/image/javascript.jpg"
    },
    {
      id: '4',
      title: 'Responsive Design with Flexbox and Grid',
      description: "Master Flexbox and CSS Grid to build layouts that work on all devices.",
      date: '2024-12-24',
      imageUrl: "/image/flex.jpg"
    },
    {
      id: '5',
      title: 'Introduction to React.js for Beginners',
      description: "Understand the basics of React.js and start building dynamic user interfaces.",
      date: '2024-12-26',
      imageUrl: "/image/react.jpg"
    },
    {
      id: '6',
      title: 'Next.js: Enhancing Your React Apps',
      description: "Learn how Next.js makes React development faster and more efficient.",
      date: '2024-12-28',
      imageUrl: "/image/css.jpg"
    },
   
      {
        id: '7',
        title: 'Version Control with Git and GitHub',
        description: "Learn how to manage your code efficiently using Git and collaborate seamlessly with GitHub.",
        date: '2024-12-30',
        imageUrl: "/image/giticon.png"
      },
      {
        id: '8',
        title: 'Understanding APIs and RESTful Services',
        description: "Discover how APIs work and how RESTful services enable communication between systems.",
        date: '2025-01-02',
        imageUrl: "/image/apiicon.jpg"
      },
      {
        id: '9',
        title: 'Mastering Data Structures and Algorithms',
        description: "Enhance your problem-solving skills by learning essential data structures and algorithms.",
        date: '2025-01-05',
        imageUrl: "/image/datastructure.jpg"
      }
   
      ];

  return (
    <div className='mt-0'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
        Exploring the World of Programming
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


