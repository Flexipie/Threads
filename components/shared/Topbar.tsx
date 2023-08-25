import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";


function Topbar (){
    return (
        <nav className="topbar">
            <Link className="flex" href="/">
                <Image src="/assets/assets/logo.svg" alt="logo" width={28} height={28} className="mr-4" />
                <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
            </Link>

            <div className=" flex items-cetner gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image 
                                src="/assets/assets/logout.svg"
                                alt="logout"
                                width={24}
                                height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher 
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger:
                            "py-2 px-4"
                        }
                    }}  
                />
            </div>
        </nav>
    )
        
}
 
export default Topbar;