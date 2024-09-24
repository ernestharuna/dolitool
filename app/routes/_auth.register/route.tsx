import { ClientActionFunctionArgs, Form, Link, redirect, useActionData, useNavigation } from "@remix-run/react";
import registerUser from "./register";
import InputError from "~/components/shared/input-error";

export async function clientAction({ request }: ClientActionFunctionArgs) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    try {
        await registerUser(credentials);
        return redirect('/dashboard');
    } catch ({ response: { data } }: any) {
        const error: any = data?.errors || "An unexpected error occurred";
        return error;
    }
}

export default function Register() {
    const error: any = useActionData<typeof clientAction>();
    const { state } = useNavigation();
    const busy = state === "submitting";

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Create account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Form className="space-y-6" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                            <div className="mt-1">
                                <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                            </div>
                            <InputError for="name" error={error} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                            </div>
                            <InputError for="email" error={error} />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                            </div>
                            <InputError for="password" error={error} />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                            </div>
                            <div className="mt-1">
                                <input id="confirm_password" name="confirm_password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" disabled={busy}
                                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                {busy ? "Processing" : "Register"}
                            </button>
                        </div>
                    </Form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already registered?
                        <Link to="/login" className="ms-2 font-semibold leading-6 text-gray-600 hover:text-gray-500">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}