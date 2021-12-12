function random_string() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const stringLength = 10;
    let randomString = "";

    for(let i = 0; i < stringLength; i++) {
        const charIndex = Math.floor(Math.random() * chars.length);
        randomString += chars.substring(charIndex, charIndex + 1);
    }

    return randomString;
}

module.exports = random_string;