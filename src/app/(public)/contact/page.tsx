import ContactImg from "@/components/ContactImg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRightIcon, HomeIcon, Mail, MailIcon, MessageSquare, PhoneCall, User } from "lucide-react";

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                {/* text and illustration */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                           <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                              <span className="w-[30px] h-[2px] bg-primary"></span>
                              Say Hello
                           </div>
                           <h1 className="h1 max-w-md mb-8">Let<span><sup>&apos;</sup></span>s Work Together</h1>
                           <p className="subtitle max-w-[400px]">We also delight you advice and work span together </p>
                    </div>
                    {/* illustration */}
                    <div className="hidden w-full bg-contain bg-top  xl:flex xl:items-center  xl:justify-end">
                        <ContactImg/>
                    </div>
                </div>

                {/* text info and form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    <div className="flex text-muted-foreground flex-col gap-y-4xl:gap-y-14 mb-12 xl:mb-24 font-semibold text-base xl:text-lg">
                        <div className="flex items-center gap-x-8 ">
                            <MailIcon size={18} className="text-primary"/>
                            <div>rifat@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary"/>
                            <div>Dhaka, bangladesh, 1207</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary"/>
                            <div>+6723562362786</div>
                        </div>
                    </div>
                    <form className="flex flex-col gap-y-4">
                       <div className="relative flex items-center">
                           <Input type="name" id="name" placeholder="Name"/>
                           <User className="absolute right-6" size={20}/>
                       </div>
                       <div className="relative flex items-center">
                           <Input type="email" id="email" placeholder="Email"/>
                           <MailIcon className="absolute right-6" size={20}/>
                       </div>
                       <div className="relative flex items-center">
                           <Textarea placeholder="Type Your Message Here"/>
                           <MessageSquare className="absolute top-4 right-6" size={20}/>
                       </div>

                       <Button className="relative flex items-center gap-x-1 max-w-[166px]">
                        Let&apos;s Talk
                        <ArrowRightIcon size={20}/>
                       </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;