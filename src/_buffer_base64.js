import { has_dom } from '@ctx-core/dom';
export function _buffer_base64(buffer) {
    if (has_dom) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    else {
        return buffer.toString('base64');
    }
}