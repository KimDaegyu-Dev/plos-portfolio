import AboutContent from '../content/about.mdx'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="prose dark:prose-invert max-w-none">
          <AboutContent />
        </div>
      </div>
    </div>
  )
}
