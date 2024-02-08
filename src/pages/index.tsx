import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [name, setName] = useState('Testing');

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setName(data.name);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('proses selesai');
      });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl">{name}</h1>
    </div>
  );
}

