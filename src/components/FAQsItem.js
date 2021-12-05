import React, { useState } from 'react'

const FAQsItem = ({ question, answer }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="text-gray-50 flex-col items-center justify-center">
            <div className="flex items-center justify-between">
                <span className="font-meduim text-lg py-4">{question}</span>
                <button onClick={() => setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" stroke="currentColor">
                        {
                            show ?
                                (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" stroke="currentColor" />)
                                :
                                (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" stroke="currentColor" />)
                        }
                    </svg>
                </button>
            </div>
            <div className={`${show ? '' : 'hidden'} transition ease-in-out duration-700  font-meduim text-sm py-4`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FAQsItem
