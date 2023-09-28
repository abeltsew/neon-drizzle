'use client';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="p-4">
      <Button>Click me</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Profile;
