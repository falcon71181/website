import { GHLink } from "./gh-link";
import { SocailsCard } from "./socials-card";
import { DiscordCard } from "./discord=card";

// TODO: Add 1 more card
export const GridCards = () => {
  return (
    <div>
      <div className="w-full grid md:grid-cols-6 grid-cols-2 mt-2 gap-2 md:gap-3">
        <div className="col-span-3">
          <GHLink />
        </div>
        <div className="col-span-2 space-y-5 py-1.5">
          <SocailsCard />
          <DiscordCard />
        </div>
      </div>
    </div>
  );
};
