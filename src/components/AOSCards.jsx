import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function AOSCards({ animateType = "zoom-in-left", children, duration = 800 }) {
    useEffect(() => {
        AOS.init({ duration: duration, once: false }) // once:false = animate every time
    }, [duration])

    return (
        <div data-aos={animateType}>
            {children}
        </div>
    )
}
// <div className="grid grid-cols-3 gap-6 p-6">
//     {[...Array(20)].map((_, i) => (
//         <div key={i} data-aos="zoom-in-left" className="p-6 bg-white rounded-2xl shadow-lg">
//             <h2 className="text-xl font-semibold mb-2">AOS Card {i + 1}</h2>
//             <p className="text-gray-600">This animates on scroll using AOS.</p>
//         </div>
//     ))}
// </div>
