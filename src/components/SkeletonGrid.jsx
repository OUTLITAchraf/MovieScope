export default function SkeletonGrid({ count = 5 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-700 rounded-lg h-60 w-full"></div>
            <div className="mt-2 bg-gray-700 rounded h-4 w-3/4"></div>
          </div>
        ))}
    </div>
  );
}