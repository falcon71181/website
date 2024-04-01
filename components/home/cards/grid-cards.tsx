import { GHLink } from "./gh-link";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-2 mt-8 gap-2 md:gap-3">
        <div className="col-span-1">
          <GHLink />
        </div>
      </div>
    </div>
  );
};
