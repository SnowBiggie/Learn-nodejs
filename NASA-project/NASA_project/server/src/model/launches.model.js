const launches = new Map();

let latestFlightNumber = 100;

const launch ={
    flightNumer: 100,
    mission: "kepler Exploration X",
    rocket: 'explore IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumer, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function existLaunchWithId(LaunchID){
    return launches.has(LaunchID);
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(launch.latestFlightNumber, 
        Object.assign(launch,{
            upcoming: true,
            success: true,
            customers: ['ZTM', 'NASA'],
            flightNumber: latestFlightNumber,
    }));
};

function abbortLuanchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    abbortLuanchById
}