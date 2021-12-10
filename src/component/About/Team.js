import React from 'react';
import team_1 from '../../image/profile.jpg'
import team_2 from '../../image/team-member-2.jpeg'
import team_3 from '../../image/team-member.jpeg'
import team_4 from '../../image/team-member-3.jpg'

const Team = () => {
    return (
        <div className="text-center my-36">
            <p className="mb-2"><span className="border-b-2 border-yellow-500 text-lg text-gray-500">Expert People</span></p>
            <h2 className="text-4xl font-bold text-gray-500 mb-10">Meet The Team</h2>
            <div className="flex justify-center">
                <div className="max-w-xs overflow-hidden ml-5">
                    <img className="w-full rounded-lg max-h-80" src={team_1} alt="team-Member-1" />
                    <p className="bg-recent text-lg font-bold text-gray-500 rounded-lg my-5 py-3">Nourin Hiya</p>
                </div>
                <div className="max-w-xs overflow-hidden ml-5">
                    <img className="w-full rounded-lg" src={team_2} alt="team-Member-1" />
                    <p className="bg-recent text-lg font-bold text-gray-500 rounded-lg my-5 py-3">Masuka Nourin</p>
                </div>
                <div className="max-w-xs overflow-hidden ml-5">
                    <img className="w-full rounded-lg" src={team_3} alt="team-Member-1" />
                    <p className="bg-recent text-lg font-bold text-gray-500 rounded-lg my-5 py-3">Masuka Hiya</p>
                </div>
                <div className="max-w-xs overflow-hidden ml-5">
                    <img className="w-full rounded-lg" src={team_4} alt="team-Member-1" />
                    <p className="bg-recent text-lg font-bold text-gray-500 rounded-lg my-5 py-3">Masuka Nourin</p>
                </div>
            </div>
        </div>
    );
};

export default Team;