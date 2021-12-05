import React from 'react'
import teamList from "../data/team";
import TeamCard from './TeamCard';
const Team = () => {
    return (
        <section className="p-20 border-b border-ebony-400 mx-6">
            <h1 className="pb-20 lg:text-5xl text-lg font-semibold font-sans text-gray-50 text-center lg:px-20 leading-tighter">Meet the team </h1>
            <div className="grid gap-6 lg:grid-cols-3 grid-cols-1 place-items-stretch">
                {
                    teamList.map((item) => {
                        return (
                            <TeamCard title={item.title} name={item.name} img={item.img} desc={item.desc} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team
