
const login = require("./auth");

test("Mat khau sai tra ve false", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Username rong tra ve false", () => {
    expect(login("", "123")).toBe(false);
});

test("Mat khau chua ky tu dac biet tra ve false", () => {
    expect(login("admin", "12@3")).toBe(false);
});

test("Tai khoan bi khoa tra ve false", () => {
    expect(login("locked", "123")).toBe(false);
});

