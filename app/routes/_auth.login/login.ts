import client from "~/lib/interceptor";

export default async function loginUser(props: { [k: string]: FormDataEntryValue }) {
    await client.get('sanctum/csrf-cookie');

    return client.post('api/login', {
        email: props.email,
        password: props.password
    });
}
