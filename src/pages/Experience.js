import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaFighterJet } from "react-icons/fa";
import { IoMdSchool } from 'react-icons/io'
import { FaFlagUsa } from "react-icons/fa";
import usaf from "../assets/images/usaf.svg"

function Experience() {
  const [showAF, setShowAF] = useState(false);
  const [showWS, setShowWS] = useState(false);

  const toggleShowAF = () => setShowAF(!showAF);
  const toggleShowWS = () => setShowWS(!showWS);


  return (
    <div className='animate-fade divide-y-2 divide-gray-100'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl ml-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Experience
          </h1>
      </div>
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a" animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "lightgrey", color: "#333", display:'flex', justifyContent:'center', alignItems:'center' }}
          icon={<img src={usaf} alt='usaf'/>}
        >
          <div className="flex flex-row justify-between max-w-full">
          <h3 className="font-bold">
            United States Air Force
          </h3>
          <b>2013 -2021</b>
          </div>
          <p> Aerospace Ground Equipment Journeyman | E-5 / NCO</p>
          <div className="mt-3 font-sans font-extralight">Misawa, JP | Clovis, NM | Colorado Springs, CO</div>
          <div className="flex justify-end">
          <button
            type="button"
            className="inline-block rounded bg-primary mt-2 p-1 text-xs font-medium uppercase leading-normal text-black border-2 transition-shadow duration-150 hover:shadow-slate-500 hover:shadow-sm"
            onClick={toggleShowAF}
          >
            {`Show ${showAF ? 'less' : 'more'}`}
          </button>
          </div>
            <div className={`${showAF ? '' : `hidden` } block rounded-lg p-6 dark:bg-neutral-700 dark:text-neutral-50`}>
            <ul className="list-disc flex flex-col gap-3 font-light">
              <li>Interpreted diagnostic code information to isolate hardware and software failures, performing correctional measures to repair discovered flaws.</li>
              <li>Analyzed hardware to determine fault locations and applied debugging procedures for mitigation purposes.</li>
              <li>Repaired mechanical, electronic and hydraulic components of specialized aviation support systems.</li>
              <li>Maintained equipment per manufacturer specifications, applying prescribed preventive maintenance per support documentation.</li>
              <li>Performed preventive and corrective maintenance on aviation support equipment and associated systems and components.</li>
            </ul>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "lightgrey", color: "#333" }}
          icon={<IoMdSchool/>}
        >
          <div className="flex flex-row justify-between max-w-full">
          <h3 className="font-bold">
            Colorado State University
          </h3>
          <b>2019-2023</b>
          </div>
          <p>
            Bachelor's of Science in Computer Science
          </p>

          <div className="mt-3 font-sans font-extralight">Fort Collins, CO</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "lightgrey", color: "#333" }}
          icon={<FaFlagUsa/>}
        >
          <div className="flex flex-row justify-between max-w-full">
          <h3 className="font-bold">
            Veteran's Affairs
          </h3>
          <b>2021-2023</b>
          </div>
          <p>Work-Study | Front Desk</p>
          <div className="mt-3 font-sans font-extralight">Fort Collins, CO</div>
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-block rounded bg-primary p-1 text-xs font-medium uppercase leading-normal text-black border-2 transition-shadow duration-150 hover:shadow-slate-500 hover:shadow-sm"
              onClick={toggleShowWS}
            >
              {`Show ${showWS ? 'less' : 'more'}`}
          </button>
          </div>
            <div className={`${showWS ? '' : `hidden` } block rounded-lg p-6 dark:bg-neutral-700 dark:text-neutral-50`}>
            <ul className="list-disc flex flex-col gap-3 font-light">
              <li>Answered multi-line phone system to respond to inquiries and transfer calls to correct departments and personnel.</li>
              <li>Greeted visitors and customers upon arrival, offered assistance and answered questions to build rapport and retention.</li>
            </ul>
            </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  
    </div>
  );
}

export default Experience