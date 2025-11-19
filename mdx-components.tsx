import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-2 mt-4">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    code: ({ children }) => <code className="bg-slate-100 px-2 py-1 rounded text-sm">{children}</code>,
    pre: ({ children }) => <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
    ...components,
  }
}
