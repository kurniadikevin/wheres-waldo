import Timer from "./timer";

const Dashboard = ()=> {

    return(
        <div className="dashboard">
            <div className="timer-cont"><Timer /></div>
            <div className="head-title">Where's Waldo ?</div>
            <div className="account-area">Account Area</div>
        </div>
    )
}

export default Dashboard;
