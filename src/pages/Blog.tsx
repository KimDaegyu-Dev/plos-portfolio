import BlogPost from '../content/blog-example.mdx'

export default function Blog() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="prose dark:prose-invert max-w-none">
          <BlogPost />
        </div>
      </div>
    </div>
  )
}
