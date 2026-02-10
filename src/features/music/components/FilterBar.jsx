import { useState } from "react";

export default function FilterBar() {
    const [activeFilter, setActiveFilter] = useState("Songs");

    return (
        <section className="flex mx-[5%] my-6">
            <div className="relative flex w-64 p-1 bg-gray-200 dark:bg-gray-800 rounded-full shadow-inner">
                <span
                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-linear-to-r from-[#E01FD0] to-[#73106B] rounded-full shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] left-1 ${activeFilter === "Albums" ? "translate-x-full" : "translate-x-0"
                        }`}
                />

                <button
                    onClick={() => setActiveFilter("Songs")}
                    className={`relative z-10 w-1/2 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none ${activeFilter === "Songs"
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        }`}
                >
                    Songs
                </button>
                <button
                    onClick={() => setActiveFilter("Albums")}
                    className={`relative z-10 w-1/2 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none ${activeFilter === "Albums"
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        }`}
                >
                    Albums
                </button>
            </div>
        </section>
    );
}