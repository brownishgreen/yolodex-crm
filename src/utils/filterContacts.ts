export type Contact = {
  id: string
  name: string
  email: string
}

export function filterContacts(list: Contact[], query: string) {
  if(!query.trim()) return list
  const keyword = query.trim().toLowerCase()
  return list.filter(contact => {
    return contact.name.toLowerCase().includes(keyword) || contact.email.toLowerCase().includes(keyword)
  })
}