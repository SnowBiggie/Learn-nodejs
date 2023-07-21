 const Launches =new Map();
 let latestFlightNumber = 100;
 const launch = {
    flightNumber: 100,
    mission: "kepler Exploatation X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    target: 'Kepler-442 b',
    customer: ["ZTM","NASA"],
    upcoming: true,
    success: true,
 };

 Launches.set(launch.flightNumber, launch);

 function getAllLaunches(){
    return Array.from(Launches.values())
 }

 function addNewLaunch(launch){
    latestFlightNumber++;
    Launches.set(launch.flightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customer: ['ZTM', 'NASA'],
        upcoming: true,
        success: true,
    }))
 }

 function existLunchWithId(id){
    return Launches.has(id);
 }

 function abortLaunchWithId(id){
    const aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
 }

 Launches.exports = {
    Launches,
    getAllLaunches,
    addNewLaunch, 
    existLunchWithId,
    abortLaunchWithId,
 }