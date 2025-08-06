import { MapPin, Search } from 'lucide-react'
import Events from './Events'

export default function Home() {
    return (
        <>
            {/* LOGO */}
            <div className="flex items-center justify-between">
                <h1>LOGO</h1>
                <button className="bg-orange-600 px-5 py-1.5 font-semibold text-black cursor-pointer hover:bg-orange-600/95">
                    LOGIN
                </button>
            </div>

            {/* SEARCH EVENTS */}
            <div className="flex gap-0.5 pt-8 pb-10">
                <div className="w-full flex items-center bg-zinc-800 px-4">
                    <Search strokeWidth={2} size={15} />
                    <input
                        type="search"
                        placeholder="Search event..."
                        className="px-2 py-3 outline-0 font-light text-sm w-full"
                    />
                </div>
                <div className="flex items-center bg-zinc-800 px-4">
                    <MapPin strokeWidth={2} size={15} />
                    <input
                        type="text"
                        placeholder="Location"
                        className="px-2 py-2 outline-0 font-light text-sm"
                    />
                </div>
                <div className="flex items-center bg-zinc-800 px-2">
                    <input
                        type="date"
                        placeholder="Time"
                        className="px-2 py-2 1/6 outline-0 font-light text-sm"
                    />
                </div>
            </div>

            {/* HEADING */}
            <h1 className="text-4xl font-semibold pb-10">UPCOMING EVENTS</h1>

            {/* EVENTS */}
            <Events />
        </>
    )
}
