export default function AppName({ size }: { size: string }) {
    return (
        <>
            <div className={`font-extrabold text-${size}`}>
                <span className="text-blue-500">D</span>
                <span className="text-lime-500">o</span>
                <span className="text-red-500">l</span>
                <span className="text-pink-500">i</span>
                <span className="text-blue-500">t</span>
                <span className="text-yellow-400">o</span>
                <span className="text-yellow-400">o</span>
                <span className="text-red-500">l</span>
            </div>
        </>
    )
}
