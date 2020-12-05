export const toDate = (value: string) => {
  const dateValues = value.split('-').map(v => Number(v))
  return new Date(dateValues[0], dateValues[1] - 1, dateValues[2])
}
