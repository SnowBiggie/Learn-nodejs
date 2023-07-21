const { getAllplanets, existLaunchWithId, abbortLuanchById } = require('../model/planets.module')

function httpGetAllPlanets(req, res){
    return res.status(200).json(getAllplanets());
};

function httpAbbortLaunch(req, res){
    const launchId = Number(req.params.id);

    if (!existLaunchWithId(launchId)){
        res.status(404).json({
            error: 'Launch not found',
        });
    }
    

    const abort = abbortLuanchById(launchId);
    res.status(200).json(abort);
}

module.exports = {
    httpGetAllPlanets,
    httpAddNewLaunch,
    httpAbbortLaunch
};
