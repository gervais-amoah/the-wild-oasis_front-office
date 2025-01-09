import { getCabinsLength } from '@/lib/data-service';

export default async function CabinsLength() {
  const count = await getCabinsLength();

  return <span>{count}</span>;
}
