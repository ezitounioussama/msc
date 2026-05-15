interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  
  return res.json();
}

async function getUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  return res.json();
}

export const metadata = {
  title: "Test | API Fetch Demo",
  description: "Testing fetch from JSONPlaceholder API",
};

export default async function TestPage() {
  const posts = await getPosts();
  const user = await getUser(1);
  console.log(posts)
  // BUG 1: Accessing non-existent property (runtime error)
  const userName = user.name;

  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight">API Fetch Test</h1>
        <p className="mt-4 text-zinc-600 dark:text-white/65">
          Fetching from jsonplaceholder.typicode.com/posts
        </p>

        <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
            User: {userName} | Post: {posts[10000]?.title || 'N/A'}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 12).map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h2 className="text-lg font-semibold line-clamp-2">{post.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-white/65 line-clamp-3">
                {post.body}
              </p>
              <p className="mt-4 text-xs text-zinc-400">Post #{post.id}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}