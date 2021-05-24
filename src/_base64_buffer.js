import { has_dom } from '@ctx-core/dom';
export function _base64_buffer(base64) {
    if (has_dom) {
        return Uint8Array.from(window.atob(base64), c => c.charCodeAt(0));
    }
    else {
        return Buffer.from(base64, 'base64');
    }
}
