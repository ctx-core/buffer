import { has_dom } from '@ctx-core/dom'
/**
 * @param base64{string}
 * @return {Uint8Array}
 */
export function base64__buffer_(base64) {
	if (has_dom) {
		return Uint8Array.from(window.atob(base64, (c)=>c.charCodeAt(0)))
	} else {
		return Buffer.from(base64, 'base64')
	}
}
export {
	base64__buffer_ as base64_buffer_,
	base64__buffer_ as _base64_buffer,
}
