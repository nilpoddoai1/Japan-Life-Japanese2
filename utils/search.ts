export function searchItems<T extends Record<string, unknown>>(items: T[], query: string, keys: (keyof T)[]) {
  const lower = query.trim().toLowerCase()
  if (!lower) return items

  return items.filter((item) =>
    keys.some((key) => {
      const value = item[key]
      return typeof value === 'string' && value.toLowerCase().includes(lower)
    })
  )
}
