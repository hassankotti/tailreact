import React from 'react'
import teamList from "../data/team";
import TeamCard from './TeamCard';
const Team = () => {
    return (
        <section className="p-20 mx-6 border-b border-ebony-400">
            <h1 className="pb-20 font-sans text-lg font-semibold text-center lg:text-5xl text-gray-50 lg:px-20 leading-tighter">Meet the team </h1>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 place-items-stretch">
                {
                    teamList.map((item) => {
                        return (
                            <TeamCard title={item.title} name={item.name} img={item.img} desc={item.desc} key={item.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team
