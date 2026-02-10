import PlayIcon from '../../../assets/playIcon';

export default function TrackCard() {
    return (
        <>
            <div className="card w-full bg-[#0c0109] shadow-xl rounded-xl">
                <div className="card-body">
                    <figure className="rounded-xl">
                        <img src="https://m.media-amazon.com/images/I/71ZSwecW9JL._AC_UF894,1000_QL80_.jpg" alt="Shoes" />
                    </figure>
                    <h2 className="card-title text-white">Track Name</h2>
                    <p className="text-gray-500">Artist Name</p>
                    <p className="text-gray-500">Album Name</p>

                    <div className="mt-4 flex items-center gap-4">
                        <button
                            type="button"
                            className="cursor-pointer h-8 w-8 rounded-full bg-[#73106B] text-white grid place-items-center"
                            aria-label="Play"
                            title="Play"
                        >
                            <PlayIcon />
                        </button>

                        <div className="flex-1">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                defaultValue="0"
                                className="my-range range h-1"
                            />

                            <div className="mt-1 flex justify-between text-xs text-gray-600">
                                <span>0:00</span>
                                <span>0:30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}