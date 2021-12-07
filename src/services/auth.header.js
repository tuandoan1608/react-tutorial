export default function authHeader() {
    const user = localStorage.getItem("user");
    if (user && user) {
        return user;
    } else {
        return {};
    }
}