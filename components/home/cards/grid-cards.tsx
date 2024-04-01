import { GHLink } from "./gh-link";
import { SocailsCard } from "./socials-card";

export const GridCards = () => {
  return (
    <div>
      <div className="w-full grid md:grid-cols-6 grid-cols-2 mt-8 gap-2 md:gap-3 border border-blue-300">
        <div className="col-span-3">
          <GHLink />
        </div>
        <div className="col-span-3">
          <SocailsCard />
        </div>
      </div>
    </div>
  );
};
