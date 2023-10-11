"use client"
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion"

/* COUNTER */
/* import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux"; */

/* API products state */
/* import { useGetProductsQuery } from '@/redux/services/productApi' */


function MainContentHome() {



    const productsDiv = useRef(null)
    const { scrollYProgress } = useScroll({
        target: productsDiv,
        offset: ["start end", "end end"]
    })




    const smoothOpacity = useSpring(scrollYProgress, { stiffness: 100, damping: 50, mass: 0.5 })

    /* API products state */
/*     const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

    if (isLoading || isFetching) return <p>loading...</p>;
    if (error) return <p>some error</p>;
    console.log("la dataa", data)
 */






    /* COUNTER */
    /*   const count = useSelector((state) => state.counterReducer.value);
      const dispatch = useDispatch();
   */
    return (
        <div className="py-20 "> <div className="divider"></div>

            <div ref={productsDiv} className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8" >


                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }}/* style={{ scaleX: scrollYProgress }} */  /* animate={{ opacity:scrollYProgress, scale: 1 }} */ /* transition={{ ease: "easeInOut", duration: 0.8 }}  */ className="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div  /* initial={{ opacity: 0.5, scale: 0.9 }} */ style={{ opacity: smoothOpacity, scale: smoothOpacity }} className="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }}/* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 3 }} */ className="h-32 rounded-lg bg-gray-400 lg:col-span-2"></motion.div>


                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }} /* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 4 }} */ className="h-32 rounded-lg bg-gray-400 lg:col-span-2"></motion.div>
                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }} /* initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ease: "easeInOut", duration: 5 }} */ className="h-32 rounded-lg bg-gray-400"></motion.div>
                <motion.div style={{ opacity: smoothOpacity, scale: smoothOpacity }} className="h-32 rounded-lg bg-gray-400"></motion.div>


            </div>

            {/* COUNTER */}
            {/*             <h4 style={{ marginBottom: 16 }}>{count}</h4>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button
                onClick={() => dispatch(decrement())}
                style={{ marginInline: 16 }}
            >
                decrement
            </button>
            <button onClick={() => dispatch(reset())}>reset</button> */}



{/* 
            <div className="grid grid-cols-3">
                {error ? (
                    <p>some error</p>
                ) : isLoading || isFetching ? (
                    <p>loading...</p>
                ) : (
                    data?.map((product) => (
                        <div key={product.id}>

                            <p key={product.id} className="text-center font-bold mt-4">{product.title}</p>
                        </div>
                    ))
                )}
            </div> */}


        </div>


    )
}

export default MainContentHome
