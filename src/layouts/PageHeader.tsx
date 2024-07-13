import {
  ArrowLeft,
  Bell,
  Menu,
  Mic,
  Search,
  Upload,
  UserCircle2,
} from "lucide-react";
import logo from "../assets/youtube_logo.png";
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../context/SidebarContext";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`flex ${
        showFullWidthSearch ? "gap-0" : "gap5"
      } md:gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-1 md:mx-4`}
    >
      {/* Menu bar and logo */}
      <div className={`flex mr-2 md:mr-4 md:gap-4 items-center flex-shrink-0`}>
        <Button variant="ghost" size="icon">
          {showFullWidthSearch ? (
            <ArrowLeft onClick={() => setShowFullWidthSearch(false)} />
          ) : (
            <Menu onClick={toggle} />
          )}
        </Button>
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className={`ml-2 h-10 ${showFullWidthSearch && "hidden"}`}
          />
        </a>
      </div>

      {/* Search bar and Search Icon */}
      <form
        className={`gap-2 md:gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex w-full" : "hidden md:flex"
        }`}
      >
        <div className="flex flex-grow max-w-[700px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 w-full text-lg focus:border-blue-500 outline-none"
          />
          <Button className=" py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-1">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-1">
          <Mic />
        </Button>
      </form>

      {/* Upload, Notificayin and User Icon */}
      <div
        className={`gap-2 md:gap-4 flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircle2 />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
