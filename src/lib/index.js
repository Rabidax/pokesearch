import Fuse from 'fuse.js'

export default function search(pattern, list, keys = ["name"]) {
	const fuse = new Fuse(list, { keys })
	return fuse.search(pattern)
}
