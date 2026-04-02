export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 font-sans">
      <main className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Hello World
        </h1>
        <p className="text-lg text-gray-600">
          Issue dari GitHub berhasil diimplementasikan!
        </p>
        <div className="flex gap-4 mt-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
            Tailwind CSS
          </span>
        </div>
      </main>
    </div>
  );
}
