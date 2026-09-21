function login(username, password) {
    // Tai khoan bi khoa
    if (username === "locked") {
        return false;
    }
// bo sung ghi chu
    // Dang nhap dung
    if (username === "admin" && password === "999") {
        return true;
    }

    // Username rong
    if (username === "") {
        return false;
    }

    // Mat khau chua ky tu dac biet
    if (/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }

    // Sai username hoac password
    return false;
}

module.exports = login;

