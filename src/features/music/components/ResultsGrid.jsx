import { useEffect } from "react";
import { useMusicStore } from "../store/useMusicStore";
import TrackCard from "./TrackCard";
import SkeletonCard from "../../../shared/components/SkeletonCard";

export default function ResultsGrid() {
  const fetchResults = useMusicStore((s) => s.fetchResults);
  const results = useMusicStore((s) => s.results);
  const loading = useMusicStore((s) => s.loading);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <div className="mx-auto w-full px-4 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : results.length > 0 ? (
          results.map((track) => <TrackCard key={track.id} track={track} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
            <p className="text-xl font-medium">No results found</p>
            <p className="text-sm mt-2">Try searching for something else.</p>
          </div>
        )}
      </div>
    </div>
  );
}
