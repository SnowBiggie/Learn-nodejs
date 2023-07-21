const {getAllLaunches, addNewLaunch, existLunchWithId, abortLaunchWithId} = require("../../models/launches.model")

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches())
};

function httpAbortLaunch(req, res){
    const launchID = Number(req.params.id);
    if (!existLunchWithId(launchID)){
        return res.status(404).json({
            error: 'Launch not found',
        });
    }
    const aborted = abortLaunchWithId(id)
    return res.status(200).json(aborted);
}

function httpAddNewLaunch(req, res){
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: 'Missing required launch property',
        })
    }
    launch.launchDate = new Date(launch.launchDate); 
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    }
    addNewLaunch(Launch);
    return res.status(201).json(launch);
}

module.exports ={
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}