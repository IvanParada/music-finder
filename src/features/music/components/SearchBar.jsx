import { useState } from "react";
import SearchIcon from "../../../assets/searchIcon";
import { useMusicStore } from "../store/useMusicStore";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const fetchResults = useMusicStore((state) => state.fetchResults);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults(value);
  };

  const isEmpty = !value.trim();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center my-10 border-2 border-none rounded-2xl w-[60%] mx-auto px-5 h-15 shadow-[0px_0px_250px_30px_#702459]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for artists, songs, or albums..."
            className="border-none shadow-0 rounded-2xl w-full mx-5 h-full focus:outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            disabled={isEmpty}
            className="bg-linear-to-r from-[#E01FD0] to-[#73106B] text-white rounded-2xl h-10 px-5 cursor-pointer disabled:opacity-30"
            onClick={isEmpty ? () => {} : handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
