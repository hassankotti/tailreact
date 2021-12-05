import React from 'react'
import FAQsItem from './FAQsItem'
import fAQsList from "../data/faqs";
const FAQs = () => {
    return (
        <section className=" py-16 border-b border-ebony-400 mx-6 lg:mx-4">
            <div className="container">
                <div className="">
                    <div className="lg:px-24">
                        <div className="">
                            <h2 className="pb-20 lg:text-5xl text-lg font-semibold font-sans text-gray-50 text-center lg:px-20 leading-tighter">FAQ - Lorem ipsum is placeholder text commonly used.</h2>
                        </div>
                        <div className="lg:px-32">
                            <ul className="mx-auto grid grid-cols-1 divide-y divide-gray-400 border-t border-b border-ebony-400">
                                {
                                    fAQsList.map((item, index) => {
                                        return (
                                            <li className="px-4" key={index}>
                                                <FAQsItem question={item.question} answer={item.answer} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs
