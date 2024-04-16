/**
 * @vitest-environment jsdom
 */
import { isDarkMode } from '../is-dark-mode'
import { describe, expect, it, vi } from 'vitest'

describe('isDarkMode', () => {
  const matchMediaMock = vi.fn((query: unknown) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
  vi.stubGlobal('matchMedia', matchMediaMock)

  // it('should return true when prefers-color-scheme is dark', () => {
  //   expect(isDarkMode()).toBe(true)
  // })

  it('should return false when prefers-color-scheme is not dark', () => {
    expect(isDarkMode()).toBe(false)
  })
})
