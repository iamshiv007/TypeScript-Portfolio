import React, { Fragment } from "react";
import Link from "next/link";

import { SocialMediaData, SocialMedia } from "../constants";

const SocialMediaComponent: React.FC = () => {
  return (
    <Fragment>
      <div className="absolute left-14 bottom-10 flex flex-col gap-4 z-10">
        {SocialMediaData.map((social: SocialMedia, key: number) => (
          <Link href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-xl dark:text-white text-white"}
              style={{ background: social.color }}
            >
             {React.createElement(social.icon)}
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMediaComponent;
