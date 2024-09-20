export default function InputError({ error, for: field }: { error: Record<string, string[]>, for: string }) {
    return (
        <>
            {error && Array.isArray(error[field]) && error[field].map((errMsg, index) => (
                <div key={index} className="text-xs text-red-600">
                    {errMsg}
                </div>
            ))}
        </>
    );
}