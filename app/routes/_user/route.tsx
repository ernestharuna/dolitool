import { Link, Outlet, redirect, useLoaderData } from '@remix-run/react'
import { AlignRight } from 'lucide-react'
import AppName from '~/components/shared/AppName'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import getAuthUser from './auth-user'
import { toast } from '~/hooks/use-toast'

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
        <div>
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

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}