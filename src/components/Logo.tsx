import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src='/assets/logo.svg' width={54} height={54} alt=''></Image>
        </Link>
    );
};

export default Logo;