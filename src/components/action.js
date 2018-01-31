export const REQUEST_BLOCKNUMBER = "REQUEST_BLOCKNUMBER";

export function requestBlocknumber() {
    console.log("action REQUEST_BLOCKNUMBER");
    return {
        type: REQUEST_BLOCKNUMBER
    }
}

export const REQUEST_COINNUMBER = "REQUEST_COINNUMBER";

export function requestCoinnumber() {
    console.log("action REQUEST_COINNUMBER");
    return {
        type: REQUEST_COINNUMBER
    }
}
