import Timer from "./timer";
import Sidebar from "./sidebar";

const Dashboard = ()=> {

    return(
        <div className="dashboard">
            <div className="timer-cont"><Timer /></div> 
            <div className="head-title">Where's Waldo ?</div>
           {/*  <div className="account-area">Account Area</div> */}
            <Sidebar/>
        </div>
    )
}

export default Dashboard;
