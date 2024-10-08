import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function fetchBlogPosts() {
  const Parser = require("rss-parser");
  const parser = new Parser();
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@ingenierias_lentas");
    const posts = feed.items.map((item: any) => ({
      title: item.title,
      description: item.contentSnippet,
      slug: item.link.split("/").pop(),
      date: new Date(item.pubDate).toLocaleDateString(),
      link: item.link,
    }));
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await fetchBlogPosts();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8 text-center">
          Blog
        </h1>

        {blogPosts.length === 0 ? (
          <div className="flex flex-col items-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
            <p className="text-2xl text-gray-700 dark:text-gray-300">Coming Soon</p>
          </div>
        ) : (
          <div className="space-y-8">
            {blogPosts.map((post: any) => (
              <div
                key={post.slug}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center"
              >
                <Image
                  src="/images/medium-logo.png"
                  alt="Medium Logo"
                  width={40}
                  height={40}
                  className="mr-4"
                />
                <div>
                  <Link href={post.link}>
                    <h2 className="text-2xl font-semibold text-black dark:text-white hover:underline">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    {post.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}