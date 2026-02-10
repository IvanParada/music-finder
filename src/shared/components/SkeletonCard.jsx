export default function SkeletonCard() {
    return (
        <div className="card w-full bg-[#0D0C0C] shadow-xl rounded-xl">
            <div className="card-body">
                <div className="skeleton rounded-xl w-full aspect-square" />

                <div className="mt-4 space-y-3">
                    <div className="skeleton h-5 w-2/3" />
                    <div className="skeleton h-4 w-1/3" />
                    <div className="skeleton h-4 w-1/2" />
                </div>

                <div className="mt-5 flex items-center gap-4">
                    <div className="skeleton h-11 w-11 rounded-full" />

                    <div className="flex-1">
                        <div className="skeleton h-2 w-full rounded-full" />

                        <div className="mt-2 flex justify-between">
                            <div className="skeleton h-3 w-10" />
                            <div className="skeleton h-3 w-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}