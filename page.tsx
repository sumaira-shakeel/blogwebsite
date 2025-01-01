"use client";

import React from "react";
import CommentSection from "@/components/commentSec";
import AuthorCard from "@/components/authorCard";
import Image from "next/image";

// Post data
const Posts = [
  {
    id: "1",
    title: "HTML Block of Web Development",
    description:
      " HTML uses a system of tags to mark up content, allowing browsers to render and display it properly. The use of semantic HTML tags, such as <article>, <section>, and <header>, not only improves accessibility but also aids in search engine optimization (SEO). HTML5, the latest version, introduced new elements like <video>, <audio>, and <canvas>, enabling more dynamic and interactive experiences without relying on third-party plugins. Alongside CSS and JavaScript, HTML plays a vital role in creating interactive and user-friendly websites. Its simple structure makes it easy to learn and implement, but mastering its advanced features is essential for building complex web applications. Understanding HTML's role in web development is key to ensuring that content is accessible, usable, and engaging for users across various devices and platforms. With a strong grasp of HTML, developers can lay the groundwork for any modern website or application, ensuring a solid foundation for further design and functionality enhancements.",
    image: "/image/html.jpg",
  },
    {
    id: "2",
    title: "CSS Styling for Modern Websites",
    description:
      "CSS styling is a crucial aspect of modern web development, allowing developers to design and layout websites that are both visually appealing and functional. By applying CSS (Cascading Style Sheets) to HTML elements, developers can control the colors, fonts, spacing, and positioning of content. With the rise of responsive design, CSS has become even more powerful, offering tools like Flexbox and CSS Grid to create adaptive and dynamic layouts that work on all devices. Additionally, CSS enables animations, transitions, and interactive effects, enhancing user experience and engagement. Modern CSS also includes features like variables, custom properties, and media queries, which streamline the development process and promote reusability. As web standards evolve, CSS continues to introduce new properties and techniques to improve performance and accessibility. Mastering CSS allows developers to build websites that are not only aesthetically pleasing but also fast, accessible, and optimized for search engines. From designing sleek landing pages to building complex e-commerce platforms, CSS plays a key role in shaping the modern web. With a solid understanding of CSS, developers can create designs that stand out while ensuring consistency across different browsers and platforms. Embracing the latest CSS features empowers developers to bring their creative vision to life while ensuring the usability and scalability of their websites.",
    image: "/image/next.jpg",
  },
  {
    id: "3",
    title: "JavaScript: The Dynamic Web Language",
    description:
      "Learn JavaScript to add interactivity and functionality to your web pages. is the cornerstone of interactivity on the web, enabling developers to create engaging and responsive user experiences. It powers everything from simple animations to complex web applications, making websites come alive with real-time updates and dynamic functionality. As a versatile and widely-used language, JavaScript bridges the gap between design and functionality, ensuring seamless interaction for users. Whether you're building interactive forms or full-scale applications, JavaScript is the key to unlocking the true potential of the modern web.",
    image: "/image/javascript.jpg",
  },
    {
    id: "4",
    title: "Responsive Design with Flexbox and Grid",
    description:
      "Responsive design is the cornerstone of modern web development, ensuring websites look great on all devices. Flexbox and CSS Grid are powerful tools that simplify the creation of flexible and adaptive layouts. Flexbox excels in arranging elements in a single direction, either row or column, with ease of alignment and distribution. CSS Grid, on the other hand, provides a two-dimensional layout system, making it perfect for complex designs. Together, they allow developers to craft responsive designs that adapt seamlessly to different screen sizes. From stacking elements vertically on mobile to arranging intricate grids on desktops, these tools offer unparalleled control. Flexbox is ideal for smaller components like navigation bars, while Grid shines in defining page layouts. Embracing these techniques not only enhances user experience but also streamlines development workflows. With Flexbox and Grid, creating visually appealing, responsive, and user-friendly designs has never been easier. Dive into these modern CSS methodologies and transform the way you build the web!",
      image: "/image/flex.jpg",

  },
    {
    id: "5",
    title: "Introduction to React.js for Beginners",
    description:
      "React.js is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components, making code more organized and efficient. With its virtual DOM, React ensures high performance by updating only the necessary parts of the UI. React’s component-based architecture simplifies the process of managing complex applications. It uses JSX, a syntax extension, to make writing HTML-like code within JavaScript seamless. React is widely adopted for creating interactive and dynamic web applications. Its unidirectional data flow makes state management predictable and easy to debug. Beginners can quickly get started with React due to its extensive documentation and community support. Whether you're building single-page applications or mobile apps, React offers the tools needed to succeed. Dive into React.js and start building modern, responsive, and scalable web experiences today!",
    image: "/image/react.jpg",
  },
  {
    id: "6",
    title: "Next.js: Enhancing Your React Apps",
    description:
      "Next.js is a powerful React framework that simplifies building modern web applications. It offers features like server-side rendering (SSR) and static site generation (SSG) out of the box, ensuring optimal performance and SEO. With its intuitive file-based routing system, creating dynamic and nested routes becomes effortless. Next.js supports API routes, allowing you to build full-stack applications without additional backend setups. Its built-in image optimization ensures faster page load times and better user experiences. The framework’s support for incremental static regeneration (ISR) allows content updates without rebuilding the entire site. Developers love Next.js for its fast refresh feature, which speeds up the development process. It also integrates seamlessly with popular CSS solutions, enabling elegant styling options. Whether you're building e-commerce platforms or personal blogs, Next.js provides the scalability and flexibility needed for modern projects. Elevate your React applications with Next.js and unlock a world of performance and productivity!",
    image: "/image/javascript.jpg",
  },
    {
    id: "7",
    title: "Version Control with Git and GitHub",
    description:
      "Version control is a crucial aspect of modern software development, and Git is one of the most widely used tools for this purpose. Git allows developers to track changes in their code, collaborate effectively, and maintain a history of their work. Paired with GitHub, a cloud-based platform, it becomes even more powerful for teamwork and project management. GitHub enables developers to host repositories, review code, and manage pull requests seamlessly. With Git, you can branch your work, experiment freely, and merge features back into the main project when ready. It also makes rolling back changes simple, ensuring mistakes are never permanent. GitHub enhances collaboration with tools like issue tracking and project boards. Open-source enthusiasts use GitHub to share projects and contribute to a global community. Learning Git and GitHub is essential for anyone aspiring to work in tech. Together, they form the backbone of efficient, collaborative, and reliable software development workflows.",
      image: "/image/giticon.png",

  },
  {
    id: "8",
    title: "Understanding APIs and RESTful Services",
    description:
      "Understanding APIs and RESTful services is fundamental for modern web and mobile app development. An API (Application Programming Interface) allows different software applications to communicate and interact with each other, enabling developers to use functionalities from external services without having to build them from scratch. RESTful services are a type of API that adhere to the principles of REST (Representational State Transfer), an architectural style that prioritizes simplicity, scalability, and statelessness. REST APIs use standard HTTP methods such as GET, POST, PUT, and DELETE to perform actions on resources, which are represented by URLs. These services typically exchange data in lightweight formats like JSON or XML, making them ideal for web and mobile applications. One of the key characteristics of REST is statelessness, meaning that each API call contains all the necessary information to complete the request, without relying on prior interactions. Additionally, REST APIs can be secured using authentication methods like API keys or OAuth. They play a crucial role in enabling integration across various platforms, powering everything from social media apps to enterprise systems, and are a cornerstone of modern web development.",
      image: "/image/apiicon.jpg",

  },
    {
    id: "9",
    title: "Mastering Data Structures and Algorithms",
    description:
      "Mastering data structures and algorithms is essential for becoming an effective software engineer. Data structures, like arrays, linked lists, trees, and graphs, provide efficient ways to store and organize data, enabling faster data retrieval and modification. Algorithms are step-by-step procedures or formulas for solving problems, such as sorting, searching, and traversing data structures. A deep understanding of algorithms allows developers to write optimized code that performs well even with large datasets. Choosing the right data structure and algorithm for a given problem is crucial for achieving the best performance, both in terms of time and space complexity. Common algorithms, such as QuickSort, MergeSort, and Dijkstra’s algorithm, help solve various computational problems efficiently. Understanding time and space complexity, often represented by Big O notation, is key to evaluating the efficiency of different approaches. A strong grasp of these concepts empowers developers to tackle complex challenges in software development, from building responsive applications to solving competitive programming problems. Mastering data structures and algorithms also enhances problem-solving skills, which are vital in coding interviews and real-world projects. Ultimately, it helps in creating scalable, maintainable, and high-performing systems.",
      image: "/image/datastructure.jpg",

  },







];

// TypeScript props type
interface PageProps {
  params: {
    id: string;
  };
}

// Main component
export default function Post({ params }: PageProps) {
  const { id } = React.use(params); // Unwrap the promise to access the 'id' directly
  const post = Posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">
        Post not found
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-blue-400 text-center">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={500} // Adjust width and height accordingly
          height={300}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postid={post.id} />
      <AuthorCard />
    </div>
  );
}

