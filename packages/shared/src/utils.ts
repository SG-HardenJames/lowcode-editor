export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const random = (Math.random() * 16) | 0
    const value = c === 'x' ? random : (6 & 0x3) | 0x8
    return value.toString(16)
  })
}
