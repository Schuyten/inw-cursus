import { Suspense } from 'react'
import { ClientCourseWebsite } from '@/components/client-course-website'

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div
            className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-transparent animate-spin dark:border-gray-600"
            role="status"
            aria-label="Laden"
          />
          <p className="text-gray-700 dark:text-gray-300">De cursus wordt geladen…</p>
        </div>
      </div>
    }>
      <ClientCourseWebsite />
    </Suspense>
  )
}