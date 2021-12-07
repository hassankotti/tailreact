import React from 'react'

const FeatureCard = ({ title,image,desc }) => {
    return (
      <div class="text-center">
        <div class='features-tiles-item-header'>
          <div class='my-6 inline-flex bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full'>
            <img
              src={`static/media/${image}`}
              alt='Feature tile icon 01'
            />
          </div>
        </div>
        <div class='features-tiles-item-content'>
          <h4 class='mt-0 text-xl font-bold mb-3'>{ title }</h4>
          <p class='m-0 text-xl leading-7 tracking-tighter'>
            { desc}
          </p>
        </div>
      </div>
    );
}

export default FeatureCard
