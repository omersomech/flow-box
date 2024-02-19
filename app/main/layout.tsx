import { SideBar } from "@/components/component/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideBar>{children}</SideBar>
    </div>
  );
}
