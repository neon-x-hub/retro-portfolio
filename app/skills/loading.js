export default function loading() {
    const loadingText = "Loading...";
    return (
        <div>
            return (
            <div className="fixed inset-0 w-screen h-screen bg-white flex flex-col items-center justify-center z-[9999]">
                {/* Loading text */}
                <div className="text-2xl text-black uppercase font-bold tracking-wider">
                    {loadingText}
                </div>
            </div>
            );
        </div>
    )
}
