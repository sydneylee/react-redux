const isString = (value) => {
    return !value || isNaN(value);
}

const validator = {
    isString
}
export default validator;