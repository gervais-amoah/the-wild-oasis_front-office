import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <div className="grid items-center justify-center h-full">
      <div className=" mb-[8rem]">
        <Spinner />
        <p className="text-xl text-primary-200">Loading cabin data...</p>
      </div>
    </div>
  );
}
