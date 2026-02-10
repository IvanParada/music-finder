import SearchBar from "../music/components/SearchBar"

export default function MusicPage() {
    return (
        <>
            <div>
                <section className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mt-[5%]">Find your next favorite sound</h1>
                    <p className="text-md mt-[2%] text-gray-500 max-w-[40%] mx-auto text-center">Search through millions of tracks and albums available in the library.</p>
                </section>
                <SearchBar />
            </div>
        </>
    )
}