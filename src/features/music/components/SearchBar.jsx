import SearchIcon from "../../../assets/searchIcon";

export default function SearchBar() {
    return (
        <>
            <div className="flex items-center justify-center my-10 border-2 border-none rounded-2xl w-[60%] mx-auto px-5 h-15 shadow-[0px_0px_250px_30px_#702459]">
                <SearchIcon />
                <input type="text" placeholder="Search for artists, songs, or albums..." className="border-none shadow-0 rounded-2xl w-full mx-5 h-full focus:outline-none" />
                <button className="bg-linear-to-r from-[#E01FD0] to-[#73106B] text-white rounded-2xl h-10 px-5 cursor-pointer">Search</button>
            </div>
        </>
    )
}
