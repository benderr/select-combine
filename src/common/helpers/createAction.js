/**
 * create action helper
 * @param type
 * @param payload
 * @returns {{type: *}}
 */
export function createAction(type, payload = {}) {
    return {type, payload: payload};
}
