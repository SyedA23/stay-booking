export default function Error({ message, retry }) {
  return (
    <div className="text-center p-20">
      <p className="text-red-500">{message}</p>
      <button onClick={retry} className="mt-4 border px-5 py-2">
        Retry
      </button>
    </div>
  );
}
