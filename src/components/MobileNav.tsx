import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";
import Social from "./Social";

const MobileNav = () => {
    return (
        <div className="p-2">
            <Sheet>
                <SheetTrigger asChild>
                     <AlignJustify className="cursor-pointer"/>
                </SheetTrigger>
                
                <SheetContent>
                    <div className="flex flex-col items-center justify-between h-full py-8">
                        <div className="flex flex-col items-center gap-y-20">
                            <Logo/>
                            <Nav containerStyles="flex flex-col item-center text-center gap-y-6"
                            linkStyles="text-2xl"
                            />
                        </div>
                        <Social containerStyles="flex gap-x-4" iconsStyles="text-2xl"/>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;