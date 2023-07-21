const {getAllLaunches, addNewLaunch, existLaunchWithId, abbortLuanchById} = require('../model/launches.model');

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
} 

function httpAddNewLaunch(req, res){
    const launch = req.body;
    

    if (!launch.mission || !launch.rocket || !launch.launchDate || launch.target){
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: 'invalid launch date',
        })
    }

    addNewLaunch(launch)
    return res.status(201).json(launch);
};

function httpAbortLaunch(req, res){
    const launchID = Number(req.params.id);

    if (!existLaunchWithId(launchID)){
        res.status(400).json({
            error: 'launch not found',
        });
    }

    res.status(200).json(abbortLuanchById(launchID));
}

module.exports = 
{
httpGetAllLaunches,
httpAddNewLaunch,
httpAbortLaunch
}