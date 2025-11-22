export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A portfolio site built with Vite, React, and MDX
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Fast Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built with Vite for lightning-fast hot module replacement
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            MDX Support
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Write content with MDX - Markdown with JSX components
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Modern Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            React, TypeScript, and Tailwind CSS for modern development
          </p>
        </div>
      </section>
    </div>
  )
}
