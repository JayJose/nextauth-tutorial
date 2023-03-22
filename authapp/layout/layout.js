export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div>{children}</div>
    </div>
  );
}
