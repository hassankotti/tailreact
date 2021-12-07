import React from "react";
import featuresList from "../data/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
      <section class="relative mt-6">
        <div class='grid lg:grid-cols-3 my-12 mx-auto max-w-7xl px-8'>
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
      </section>
    );
};

export default Features;
