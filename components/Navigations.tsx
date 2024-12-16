'use client';

import { useClickContext } from '@/context/counter';
import Link from 'next/link';
import React from 'react';

export default function Navigations() {
  const { clickCount } = useClickContext();
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
      <li>Counter: {clickCount}</li>
    </ul>
  );
}
