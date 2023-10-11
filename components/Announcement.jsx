
"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import logo from '../public/campeonsDelSur.png'
function Announcement() {
    return (
        <div /* className='relative' */>
            <div className="bg-primary px-4 py-3 text-white">
                <motion.div animate={{
                    scale: [1],
                    rotate: [0, 45, -30, 5, -2, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: 0,
                        repeatDelay: 1
                    }} className="flex flex-row place-content-center w-200 h-200">
                    <Image src={logo} width="200" height="auto" alt=""/>
                </motion.div>
                <p className="text-center text-sm font-medium">
                    Pronto estaremos llegando como campeones a tu mesa!
                    <a href="#" className="inline-block underline"></a>
                </p>
            </div>
        </div>
    )
}

export default Announcement
