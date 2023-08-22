import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";

import { SocialMediaData, SocialMedia } from "../constants";
import { BlogContext } from "../contextApi/blogContext";

const SocialMediaComponent: React.FC = () => {
  const { setShowModal } = useContext(BlogContext);

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

        <button
          className="p-2 rounded-full text-xl bg-[#f2925a] text-white"
          onClick={() => setShowModal(true)}
        >
          <MdFeedback />
        </button>
      </div>
    </Fragment>
  );
};

export default SocialMediaComponent;
