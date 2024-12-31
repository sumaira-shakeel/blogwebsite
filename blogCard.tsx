import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`p-4 bg-teal-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={200}
        className='w-full h-48 object-cover rounded-t-lg'
      />
      <CardTitle className='text-xl font-normal mt-4 text-center'>{post.title}</CardTitle>
      <CardContent className='text-center'>
        <p>{post.description}</p>
      </CardContent>
      <div className='flex flex-col mt-4 items-center'>
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        {/* Updated Link styling */}
        <Link
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 hover:shadow-md transition-all`}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
}

