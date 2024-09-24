import { Form, Link, Outlet, redirect, useLoaderData } from '@remix-run/react'
import { AlignRight } from 'lucide-react'
import AppName from '~/components/shared/app-name'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import getAuthUser from './auth-user'
import { toast } from '~/hooks/use-toast'
import NavButton from '~/components/shared/nav-button'

const NAV: { href: string, title: string }[] = [
    { href: 'dashboard', title: 'Dashboard' },
    { href: 'profile', title: 'Profile' }
]

export async function clientLoader() {
    try {
        const user = await getAuthUser();
        return { user };
    } catch ({ response }: any) {
        toast({
            description: response.data.message || "Something went wrong",
        })
        return redirect('/login');
    }
}

export default function UserLayout() {
    const { user } = useLoaderData<typeof clientLoader>();
    console.log(user);

    return (
        <>
            <div className="container">
                <header className="py-4">
                    <nav className="flex items-center justify-between">
                        <Link to={"/"} className='flex items-center gap-1'>
                            <AppName size='text-base' />
                        </Link>
                        <div className='flex gap-1 items-center'>
                            <div className="md:block hidden font-medium text-gray-500">
                                <a href="" className="text-sm px-2 py-1">{user.name}</a>
                            </div>
                            <div className="md:hidden block">
                                <AlignRight />
                            </div>
                            <div>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </nav>
                </header>

                <section className="mb-5">
                    <h2 className="text-3xl font-bold mb-3">Hey, {(user.name).split(" ")[0]}</h2>
                    <p className="text-xs text-gray-500">
                        Here you can manage your tasks, view your progress, and even set reminders.
                    </p>
                </section>

                <main>
                    <section className="flex">
                        <div className="border-e pe-5">
                            {NAV.map((item) => (
                                <NavButton href={item.href} label={item.title} />
                            ))}
                            <Form method="POST" action="/logout" className="block w-full"
                                onSubmit={(event) => {
                                    const response = confirm("Are you sure you want to logout?");
                                    if (!response) {
                                        event.preventDefault();
                                    }
                                }}
                            >
                                <button type="submit"
                                    className="block w-full text-start py-1 px-4 mt-5 text-xs border border-red-500  text-red-500 rounded">
                                    Logout
                                </button>
                            </Form>
                        </div>
                        <div className='container'>
                            <Outlet />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}