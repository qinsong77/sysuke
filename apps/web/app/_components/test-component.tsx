'use client'

import { stringifyObjectSafe } from '@sysuke/utils'
import { useEffect, useState } from 'react'

export function TestComponent() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // eslint-disable-next-line no-console -- just testing
    console.log('count', count)
  }, [count])
  return (
    <div>
      <h1>TestComponent</h1>
      <p>Count: {count}</p>
      <button
        className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        type="button"
        onClick={() => {
          setCount(count + 1)
          stringifyObjectSafe({ count })
        }}
      >
        Increment
      </button>
    </div>
  )
}
