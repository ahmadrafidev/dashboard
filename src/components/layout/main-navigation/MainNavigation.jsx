import React from "react";

import ProfilePicture from '../../assets/Profile.png';
import Logout from '../../assets/logout.png'


export default function MainNavigation(){
    return(
        <div className="px-10 bg-white shadow-md sticky top-0 h-16 w-screen p-4 flex items-center justify-between">
            <div>
                <p className="text-4xl">Advotics</p>
            </div>
            <div className="flex items-center">
                <div className="flex-col justify-center px-3">
                    <p className="text-center">Username</p>
                    <p className="text-center">Company Name</p>
                </div>
                <div className="px-3">
                    <img src={ProfilePicture} alt="profile picture"/>
                </div>
                <div className="px-3">
                    <img src={Logout} alt="profile picture"/>
                </div>
            </div>
        </div>

    );
}