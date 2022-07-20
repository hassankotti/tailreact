import React from "react";
import FAQsItem from "./FAQsItem";
import fAQsList from "../data/faqs";
const FAQs = () => {
  return (
    <section className="py-16 mx-6 border-b border-ebony-400 lg:mx-4">
      <div className="container">
        <div className="lg:px-24">
          <h2 className="pb-20 font-sans text-lg font-semibold text-center lg:text-5xl text-gray-50 lg:px-20 leading-tighter">
            FAQ - Lorem ipsum is placeholder text commonly used.
          </h2>
        </div>
        <div className="lg:px-32">
          <ul className="grid grid-cols-1 mx-auto border-t border-b divide-y divide-gray-400 border-ebony-400">
            {fAQsList.map((item, index) => {
              return (
                <li className="px-4" key={index}>
                  <FAQsItem question={item.question} answer={item.answer} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
