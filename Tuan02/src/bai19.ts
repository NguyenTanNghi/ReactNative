import { fetchUser } from "./bai18";

export async function fetchUsers(ids: number[]) {
    const users = [];
    for (const id of ids) {
        const user = await fetchUser(id);
        users.push(user);
    }
    return users;
}
