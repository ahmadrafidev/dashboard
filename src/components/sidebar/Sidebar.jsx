import React from "react";
import {Link} from "react-router-dom";

import DashboardIcon from '../assets/dashboard.png';
import { GrTextAlignFull } from "react-icons/gr";

export default function Sidebar(){
    return(
      <div className="flex sticky top-16 h-[calc(100vh-64px)]">
        <div className="bg-white shadow-md p-5">
          <div className="mt-2.5">
            <ul>
              <li className="mb-2">
                <GrTextAlignFull size={30} color={"#C5C5C5"}/>
              </li>
              <Link to="/" className="link">
                <li>
                  <img src={DashboardIcon} alt="dashboard icon" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
}