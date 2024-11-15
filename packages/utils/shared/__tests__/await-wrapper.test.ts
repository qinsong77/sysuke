import { describe, expect, it } from 'vitest'

import { awaitWrapper } from '../await-wrapper'

describe('awaitWrapper', () => {
  it('should return [null, value] when promise resolves', async () => {
    const promise = Promise.resolve('success')
    const result = await awaitWrapper(promise)
    expect(result).toEqual([null, 'success'])
  })

  it('should return [error, null] when promise rejects', async () => {
    const error = new Error('failure')
    const promise = Promise.reject(error)
    const result = await awaitWrapper(promise)
    expect(result).toEqual([error, null])
  })
})
