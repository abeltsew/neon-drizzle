'use client';
import { ModeToggle } from '@/components/ui/MoodToogle';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Calculator } from 'lucide-react';
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
      <ModeToggle />
      <Button>Click me</Button>
      <Calendar />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Profile;
