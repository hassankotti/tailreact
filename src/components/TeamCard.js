import React from 'react'

const TeamCard = ({ title,name,desc,img}) => {
    return (
        <div className="flex-col justify-center items-center">
            <div className="ng"><div className="team-item-header">
                <div className="w-auto">
                    <img src={img} alt={desc}  />
                </div>
            </div>
                <div className="flex-col justify-center items-center text-center p-4">
                    <h5 className="font-semibold text-base text-white">{name}</h5>
                    <div className="font-meduim text-sm text-blue-400 mt-4">{title}</div>                    
                </div>
            </div>
        </div>
    )
}

export default TeamCard
