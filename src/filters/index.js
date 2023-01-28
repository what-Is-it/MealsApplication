export default function cutWords(str, count) {
    if (!str) return str
    return str.split(' ').slice(0, count).join(' ')
}
