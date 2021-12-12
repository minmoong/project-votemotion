function database_convert_string(buffer_array) {
    let buffer = [];
    buffer_array.map((value) => { buffer.push(value); });
    return Buffer.from(buffer).toString();
}

module.exports = database_convert_string;