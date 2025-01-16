"use client";
import Link from 'next/link'
import fontStyles from '@/app/css/customfont.module.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
    return (
        <div className="z-50 w-full h-20 px-10 py-5 flex justify-between backdrop-blur-lg border-b border-neutral-700/80 items-center fixed top-0">
            {/*my name*/}
            <div className="h-[50px]"> {/* Add fixed height container */}
                <h1 className={`font-bold ${fontStyles.belanosima}`}>
                    <DotLottieReact
                        src="https://lottie.host/2d042266-c6a2-4e1c-832d-27edc5fa6451/TiFjcYZEp7.lottie"
                        loop
                        autoplay // Add autoplay
                        style={{ height: '70px', width: '70px' }} // Use style instead of height/width props
                        renderConfig={{
                            autoResize : true,
                            devicePixelRatio : 2,
                            freezeOnOffscreen: true,
                        }
                        }
                    />
                </h1>
            </div>
            <div className={`${fontStyles.belanosima} text-xl flex justify-center gap-20 items-center`}>
                <ul className="flex-row flex gap-20">
                    <li className="cursor-pointer transition-all duration-300 hover:text-neutral-800">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="cursor-pointer transition-all duration-300 hover:text-neutral-800">About</li> {/* Fixed empty li */}
                    <li className="cursor-pointer transition-all duration-300 hover:text-neutral-800">Contact</li> {/* Changed duplicate Home */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;