import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Link } from "@tanstack/react-router";

export function AppHeader() {
  return (
    <header className="border-b">
      <div className="container flex justify-between items-center h-16">
        <Link to="/">Tanstack Start Starter</Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
