import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

function About() {
  const { data, isPending } = useQuery({
    queryKey: ['hello'],
    queryFn: () => fetch('/api/hello').then((res) => res.json()),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h1 className="font-medium text-2xl text-red-500">About Page is Here</h1>
      {!isPending ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>loading data...</p>
      )}
    </div>
  );
}

export const Route = createFileRoute('/about')({
  component: About,
});
