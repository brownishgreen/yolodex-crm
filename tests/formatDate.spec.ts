//import the test helper from vitest
import { describe, it, expect } from 'vitest'

//import the function under test from the utils folder
import { formatDate } from '../src/utils/formatDate'

//describe the function under test
//it should format ISO string to yyyy-mm-dd
//it should return empty string for null/undefined
//it should return empty string for invalid date
describe('formatDate', () => {
  it('formats ISO string to yyyy-mm-dd', () => {
    expect(formatDate('2025-10-11T12:00:00.000Z')).toBe('2025-10-11')
  })

  it('returns empty string for null/undefined', () => {
    expect(formatDate(null)).toBe('')
    expect(formatDate(undefined)).toBe('')
  })

  it('returns empty string for invalid date', () => {
    expect(formatDate('not-a-date')).toBe('')
  })
})
