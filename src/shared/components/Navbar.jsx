import MusicIcon from "../../assets/musicIcon";

export default function Navbar() {
    return (
        <div className="navbar bg-base-300 px-5">
            <MusicIcon />
            <div className="flex flex-col items-start ml-2">
                <p className="text-xl font-bold">Music Finder</p>
                <p className="text-xs font-light text-gray-400">Find your favorite music</p>
            </div>
        </div>
    )
}