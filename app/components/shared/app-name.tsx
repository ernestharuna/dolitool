export default function AppName({ size = "9xl" }: { size: string }) {
    const sizeClass = {
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
    }[size] || "text-base"; // Fallback to base size if not found

    return (
        <div className={`font-extrabold ${sizeClass}`}>
            <span className="text-blue-500">D</span>
            <span className="text-lime-500">o</span>
            <span className="text-red-500">l</span>
            <span className="text-pink-500">i</span>
            <span className="text-blue-500">t</span>
            <span className="text-yellow-400">o</span>
            <span className="text-yellow-400">o</span>
            <span className="text-red-500">l</span>
        </div>
    );
}
