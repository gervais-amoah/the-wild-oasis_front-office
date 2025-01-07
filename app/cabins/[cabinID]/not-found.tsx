import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">The cabin could not be found</h1>
      <Link
        href="/cabins"
        className="px-6 my-3 py-1 text-lg text-primary-500 hover:text-primary-600 transition-all"
      >
        <p className="text-lg">Go back to the cabins list</p>
      </Link>
    </main>
  );
}
