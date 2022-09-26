const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Communiy', 45, 'community center']
];
function chooseStation (stations) {
    const goodStations = []

    for (const station of stations){
        const capacity = station[1]
        
        if (capacity >=20){

            const type = station[2]

            if(type === 'school' || type === 'community center'){
                goodStations.push(station[0])
            }
        }
    }
    return goodStations
}


console.log(chooseStation(stations));


