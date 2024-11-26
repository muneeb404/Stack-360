import React from 'react';
import StackLogo from './StackLogo';
import { Images } from '../custom/image'

// Logo data for each category
const logos = {
  Technologies: [
    { img: Images.tech1 },
    { img: Images.tech2 },
    { img: Images.tech3 },
    { img: Images.tech4 },
    { img: Images.tech5 },
    { img: Images.tech6 },
    { img: Images.tech7 },
    { img: Images.tech8 },
    { img: Images.tech9 },
    { img: Images.tech10 },
    { img: Images.tech11 },
    { img: Images.tech12 },
  ],
  'Cloud Infrastructure': [
    { img: Images.cloud1 },
    { img: Images.cloud2 },
    { img: Images.cloud3 },
    { img: Images.cloud4 },
    { img: Images.cloud5 },
    { img: Images.cloud6 },
    { img: Images.cloud7 },
    { img: Images.cloud8 },
    { img: Images.cloud9 },
    { img: Images.cloud10 },
    { img: Images.cloud11 },
    { img: Images.cloud12 },
  ],
  Devops: [
    { img: Images.dev1 },
    { img: Images.dev2 },
    { img: Images.dev3 },
    { img: Images.dev4 },
    { img: Images.dev5 },
    { img: Images.dev6 },
    { img: Images.dev7 },
    { img: Images.dev8 },
    { img: Images.dev9 },
    { img: Images.dev10 },
    { img: Images.dev11 },
    { img: Images.dev12 },
  ],
};

function TechStackLogo({ activeCategory }) {
  // Get logos for the active category
  const categoryLogos = logos[activeCategory] || [];

  return (
    <div className="flex flex-col">
      <div className="flex gap-7 py-7 flex-wrap flex-grow-6 justify-center">
        {categoryLogos.map((logo, index) => (
          <StackLogo key={index} img={logo.img} />
        ))}
      </div>
    </div>
  );
}

export default TechStackLogo;
