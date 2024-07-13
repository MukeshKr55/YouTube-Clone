import {
  ChevronDown,
  ChevronUp,
  Clock,
  Film,
  Flame,
  Gamepad2,
  HeartHandshake,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Menu,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import logo from "../assets/youtube_logo.png";
import { Children, ElementType, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "../components/Button";
import { playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const { isSmallOpen, isLargeOpen, toggle, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={HeartHandshake}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library/" />
      </aside>

      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-55"
        />
      )}

      <aside
        className={`w-56 h-full lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2  ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div
          className={`flex mr-2 md:mr-4 md:gap-4 items-center flex-shrink-0 mt-2 lg:hidden sticky top-0 bg-white`}
        >
          <Button variant="ghost" size="icon">
            <Menu onClick={toggle} />
          </Button>
          <a href="/">
            <img src={logo} alt="Logo" className={`ml-2 h-10`} />
          </a>
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem
            Icon={HeartHandshake}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem Icon={Library} title="Library" url="/library" />
          <LargeSidebarItem Icon={History} title="History" url="/history" />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            Icon={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />

          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />

        {/* Subscriptions */}
        <LargeSidebarSection visibleItemCount={5}>
          {subscriptions.map((sub) => (
            <LargeSidebarItem
              key={sub.id}
              Icon={sub.imgUrl}
              title={sub.channelName}
              url={`/@${sub.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem Icon={Flame} title="Trending" url="/trending" />
          <LargeSidebarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem Icon={Music2} title="Music" url="/music" />
          <LargeSidebarItem Icon={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSidebarItem Icon={Radio} title="Live" url="/live" />
          <LargeSidebarItem Icon={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSidebarItem Icon={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem Icon={Lightbulb} title="Learning" url="/learning" />
          <LargeSidebarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem Icon={Podcast} title="Podcasts" url="/podcasts" />
        </LargeSidebarSection>
      </aside>
    </>
  );
};

export default Sidebar;

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg"
      )}
      href={url}
    >
      <Icon className="w-5 h-5 " />
      <div className="text-sm ">{title}</div>
    </a>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandedButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandedButton && (
        <Button
          onClick={() => setIsExpanded((p) => !p)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-2"
        >
          <ButtonIcon className="w-5 h-5" />
          <div className="text-sm">
            {isExpanded ? "Show Less" : "Show More"}
          </div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  Icon: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSidebarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-2 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
      href={url}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt="ggwp" className="w-6 h-6 rounded-full" />
      ) : (
        <Icon className="w-5 h-5" />
      )}

      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
