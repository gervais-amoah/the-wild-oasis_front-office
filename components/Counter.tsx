'use client';

import { useClickContext } from '@/context/counter';

export default function Counter() {
  const { clickCount, incrementClick } = useClickContext();

  return (
    <div>
      <p>Button clicked: {clickCount} times</p>
      <button onClick={incrementClick}>Click Me</button>
    </div>
  );
}
