import { has_dom } from '@ctx-core/dom'
export function base64_buffer_(base64:string) {
	if (has_dom) {
		return Uint8Array.from(window.atob(base64), c=>c.charCodeAt(0))
	} else {
		return Buffer.from(base64, 'base64')
	}
}
export {
	base64_buffer_ as _base64_buffer,
}
