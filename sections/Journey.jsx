import React, { Fragment } from "react";
import Image from "next/image";
import { GiRailRoad } from "react-icons/gi";

import {
  School,
  Iit,
  College,
  YouTube,
  FirstInternship,
  SecondInternship,
} from "./journeyParts";

import { JourneyData } from "@/constants";

const Journey = () => {
  return (
    <Fragment>
      <div className="dark:bg-black bg-[#ecf8f9] overflow-x-hidden py-8">
        <section id="myJourney">
          <h3 className="sectionHeading">
            <span className="mr-4">
              <GiRailRoad />
            </span>
            My Journey
          </h3>
        </section>

        <div className="md:flex hidden justify-center mx-8">
          <div className="py-5">
            <School />

            <College />

            <FirstInternship />
          </div>

          <div className="border dark:border-white border-gray-700 border-solid min-h-[90vh]" />

          <div className="py-5">
            <Iit />

            <YouTube />

            <SecondInternship />
          </div>
        </div>

        <MobileScreenJourney />
      </div>
    </Fragment>
  );
};

export default Journey;

const MobileScreenJourney = () => {
  const visibleFun = (e) => {
    const smallBorder =
      e.target.parentElement.parentElement.nextElementSibling.classList;

    const detailBox =
      e.target.parentElement.parentElement.nextElementSibling.nextElementSibling
        .classList;

    if (smallBorder.contains("h-0")) {
      smallBorder.replace("h-0", "h-[20px]");
      smallBorder.replace("border-0", "border");
    } else {
      smallBorder.replace("h-[20px]", "h-0");
      smallBorder.replace("border", "border-0");
    }

    if (detailBox.contains("h-0")) {
      detailBox.replace("h-0", "min-h-[300px]");
    } else {
      detailBox.replace("min-h-[300px]", "h-0");
    }
  };
  return (
    <>
      <div className="mx-[5%] pb-10 md:hidden">
        {JourneyData.map((journey, key) => (
          <React.Fragment key={key}>
            <div className="h-[50px] border dark:border-white border-[black] m-auto w-fit" />

            <div className="border-2 dark:border-white border-[black] border-solid rounded">
              <div className="flex gap-5 px-5 py-2">
                <p className="cursor-pointer text-lg" onClick={visibleFun}>
                  +
                </p>
                <p>{journey.heading}</p>
                <p className="ml-auto">{journey.time}</p>
              </div>
            </div>

            <div className="border-0 dark:border-white border-black m-auto w-fit h-0" />

            <div className="border-white h-0 overflow-hidden">
              {journey.image && (
                <Image
                  alt={journey.heading}
                  className="w-full"
                  height={200}
                  src={journey.image}
                  width={300}
                />
              )}
              <div className="py-2">
                <ul className="list-inside list-disc">{journey.summary}</ul>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
