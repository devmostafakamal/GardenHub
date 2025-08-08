import React from "react";

function FeatureGardenrs({ active }) {
  const { profileImage, name, bio, specialty, location } = active;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm ">
        <figure className="px-10 pt-10">
          <img src={profileImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <div className="">
            <h3 className="text-2xl">{specialty}</h3>
            <p className="text-gray-400">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureGardenrs;
