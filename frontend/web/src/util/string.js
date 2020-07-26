const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-+';

export const random = length => {
  return Array(length).fill(null).map(r => characters.charAt(Math.floor(Math.random() * characters.length))).join("")
}