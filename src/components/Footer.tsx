export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-paper/50 sm:flex-row">
        <p className="font-mono">bigFriendlyFunction() / © {year} Nicholas Bennett</p>
        <div className="flex gap-6 font-display">
          <a href="https://github.com/nrrb" className="hover:text-rose">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nicholasrrbennett/" className="hover:text-rose">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
