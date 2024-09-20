import client from "~/lib/interceptor";

export default async function getAuthUser() {
    const { data } = await client.get('api/user');
    return data
}