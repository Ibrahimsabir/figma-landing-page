import Achievement from "../../component/achievements"
import TeamCard, { TeamProp } from "../../component/team"
import React from "react"


export default function Team(){
    const teamMembers:TeamProp[] = [
        {
            image:"/images/team-member5.png",
            teamMem:"Fazal Kehar",
            memTitle:"Marketing Coordinator"
        },
        {
            image:"/images/team-member2.png",
            teamMem:"Joseph Munyambu",
            memTitle:"Marketing Manager"
        },
        {
            image:"/images/team-member3.png",
            teamMem:"Joseph Ngumbau",
            memTitle:"Office Assistant"
        },
        {
            image:"/images/team-member4.png",
            teamMem:"Erick Kipkemboi",
            memTitle:"Web Designer"
        },
        {
            image:"/images/team-member5.png",
            teamMem:"Stephen Kerubo",
            memTitle:"Manager for Sales"
        },
        {
            image:"/images/team-member6.png",
            teamMem:"John Leboo",
            memTitle:"UI/UX Designer"
        },
    ]
    return(
        <>
        <Achievement />
        <div className="flex w-full max-w-[1280px] bg-secondary flex-col max-h-screen items-center text-center py-12 px-4 bg-slate-100">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-gray-600 mb-10 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="grid grid-cols md:grid-cols-3 space-y-8 md:gap-8 px-8 w-full max-w-6xl">
            {teamMembers.map((team, index)=>
            <TeamCard key={index} {...team}/>)}
        </div>
        </div></>
        
        
    )
}