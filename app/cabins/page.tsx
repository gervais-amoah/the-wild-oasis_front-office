import Counter from '@/components/Counter';
import React from 'react';

type UserData = {
  id: number;
  name: string;
  email: string;
  website: string;
};

export default async function CabinsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = (await res.json()) as UserData[];
  console.log(data);

  return (
    <div>
      <h1>Cabins</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter />
    </div>
  );
}
