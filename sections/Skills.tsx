import React, { Fragment } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { SkillsData, Skill } from "../constants";

const Skills: React.FC = () => {
  return (
    <Fragment>
      <section id="skills">
        <div className="dark:bg-[#000000d0] py-8">
          <h3 className="sectionHeading">
            <span className="mr-4">
              <FaLaptopCode />
            </span>
            Skills
          </h3>

          <div>
            <div className="flex flex-wrap gap-6 mx-6 justify-center">
              {SkillsData?.map((skill: Skill, key: number) => (
                <div
                  className="flex flex-col justify-around items-center p-3 border cursor-pointer border-solid border-black dark:border-white md:w-32 md:h-32 w-20 h-20 rounded-lg"
                  key={key}
                >
                  <div className={"md:text-4xl text-2xl"}>
                    {React.createElement(skill.icon, {
                      color: skill.color,
                    })}
                  </div>
                  <p className="md:text-base text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
