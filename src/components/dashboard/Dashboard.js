import React from 'react'
import PlanningList from '../plannings/PlanningList'
import Notifications from './Notifications'

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PlanningList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Dashboard;
