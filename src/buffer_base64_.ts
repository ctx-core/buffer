import { has_dom } from '@ctx-core/dom'
export function buffer_base64_(buffer:Buffer) {
	if (has_dom) {
		let binary = ''
		const bytes = new Uint8Array(buffer)
		const len = bytes.byteLength
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i])
		}
		return window.btoa(binary)
	} else {
		return buffer.toString('base64')
	}
}
export {
	buffer_base64_ as _buffer_base64,
}
