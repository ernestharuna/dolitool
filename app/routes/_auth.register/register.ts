import client from "~/lib/interceptor";

export default async function registerUser(props: { [k: string]: FormDataEntryValue }) {
    await client.get('sanctum/csrf-cookie');

    return client.post('api/register', {
        name: props.name,
        email: props.email,
        password: props.password,
        password_confirmation: props.confirm_password
    });
}
