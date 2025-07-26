// src/pages/Explore.jsx
import React, { useRef } from 'react';
import { Input } from '@/shadcn/ui/input';
import { Button } from '@/shadcn/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/shadcn/ui/card';
import { Plus, ChevronRight } from 'lucide-react';

const TAGS = [
  'USA',
  'Tech',
  'Business',
  'Health',
  'Science',
  'Sports',
  'World',
];

const ARTICLES = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  image:
    'https://images.unsplash.com/photo-1622033541271-4cabd0f22b25?auto=format&fit=crop&w=800&q=80',
  title:
    'John Lewis, civil rights giant, crosses infamous Selma bridge one final time',
  channelLogo: '/pbs-logo.png',
  channelName: 'PBS News',
  time: '2 hours ago',
}));

export default function Explore() {
  const tagRef = useRef(null);

  const scrollTags = (distance) => {
    if (tagRef.current) {
      tagRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── Search Bar ── */}
      <div className="mb-6 flex justify-center">
        <div className="w-full max-w-xl">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="relative mb-8">
        <div
          ref={tagRef}
          className="flex space-x-4 overflow-x-auto py-2 hide-scrollbar"
        >
          {TAGS.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              className="flex items-center space-x-2 whitespace-nowrap rounded-full px-4 py-1"
            >
              <Plus className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-800">{tag}</span>
            </Button>
          ))}
        </div>

        <button
          onClick={() => scrollTags(200)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* ── Articles Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((a) => (
          <Card key={a.id} className="shadow-sm hover:shadow-lg transition">
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-40 object-cover"
            />
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-lg font-semibold">
                {a.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pt-2 pb-4">
              <div className="flex items-center text-sm text-gray-500">
                <img
                  src={a.channelLogo}
                  alt={a.channelName}
                  className="h-6 w-6 rounded-full mr-2"
                />
                <span>{a.channelName}</span>
                <span className="mx-2">·</span>
                <span>{a.time}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
