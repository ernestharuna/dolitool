import { Link, Outlet, redirect } from '@remix-run/react'
import { AlignRight } from 'lucide-react'
import AppName from '~/components/shared/app-name'
import getAuthUser from '../_user/auth-user';
import { toast } from '~/hooks/use-toast';

export async function clientLoader() {
    try {
        await getAuthUser();
        toast({
            description: "Welcome back!",
        })
        return redirect('/dashboard');
    } catch ({ response }: any) {
        return null;
    }
}

export default function AuthLayout() {
    return (
        <div>
            <div className="container">
                <header className="py-4">
                    <nav className="flex items-center justify-between">
                        <Link to={"/"} className='flex items-center gap-1'>
                            <AppName size='text-base' />
                        </Link>
                        <div className="md:block hidden font-medium text-gray-500">
                            <a href="" className="text-sm px-2 py-1">Docs</a>
                            <a href="" className="text-sm px-2 py-1">Pricing</a>
                            <a href="" className="text-sm px-2 py-1">Register</a>
                        </div>
                        <div className="md:hidden block">
                            <AlignRight />
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