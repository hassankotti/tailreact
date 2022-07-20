import React from "react";
import featuresList from "../data/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-16 mx-6 border-b border-ebony-400 lg:mx-4">
      <div className="container">
        <div className="lg:px-24">
          <h2 className="pb-20 font-sans text-lg font-semibold text-center lg:text-5xl text-gray-50 lg:px-20 leading-tighter">
            Features.
          </h2>
        </div>
        <div class="grid lg:grid-cols-3 my-12 mx-auto max-w-7xl px-8">
          {featuresList.map((item, index) => {
            return (
              <FeatureCard
                title={item.title}
                image={item.img}
                desc={item.desc}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
