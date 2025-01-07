'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  console.error(error?.message);
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="text-bg">We are sorry about that</p>
      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-4 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
