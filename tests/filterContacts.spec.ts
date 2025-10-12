import { describe, it, expect } from 'vitest'
import { filterContacts } from '../src/utils/filterContacts'

const sampleContacts = [
  { id: '1', name: 'John Doe', email: 'john@doe.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@smith.com' },
  { id: '3', name: 'Mike Johnson', email: 'mike@johnson.com' },
  { id: '4', name: 'Emily Brown', email: 'emily@brown.com' }
]

describe('filterContacts', () => {
  // empty query should return full list
  it('returns full list for empty query', () => {
    expect(filterContacts(sampleContacts, '')).toEqual(sampleContacts)
  })

  // exact / partial name match (case-sensitive input but function should be case-insensitive)
  it('filters by name (partial match)', () => {
    expect(filterContacts(sampleContacts, 'John')).toEqual([
      { id: '1', name: 'John Doe', email: 'john@doe.com' },
      { id: '3', name: 'Mike Johnson', email: 'mike@johnson.com' } // "John" matches "Johnson"
    ])
  })

  // case-insensitive match
  it('is case-insensitive when matching', () => {
    expect(filterContacts(sampleContacts, 'jane')).toEqual([
      { id: '2', name: 'Jane Smith', email: 'jane@smith.com' }
    ])
  })

  // matches by email
  it('filters by email substring', () => {
    expect(filterContacts(sampleContacts, 'brown.com')).toEqual([
      { id: '4', name: 'Emily Brown', email: 'emily@brown.com' }
    ])
  })

  // whitespace-only query should be treated as empty (if your implementation trims)
  it('treats whitespace-only query as empty and returns full list', () => {
    expect(filterContacts(sampleContacts, '   ')).toEqual(sampleContacts)
  })
})
