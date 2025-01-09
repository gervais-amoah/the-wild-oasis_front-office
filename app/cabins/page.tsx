import { Suspense } from 'react';
import Loading from './loading';
import CabinList from '@/components/CabinList';

export const revalidate = 2592000; // 30 days in seconds

export const metadata = {
  title: 'Cabins',
  description: 'Cabins page',
};

export default async function CabinsPage() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Loading />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
