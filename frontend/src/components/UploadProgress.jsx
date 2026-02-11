export default function UploadProgress({ progress }) {
  return (
    <div className="w-full mt-4">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-3 bg-blue-600 transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 mt-1 text-right">
        {progress}%
      </p>
    </div>
  );
}
