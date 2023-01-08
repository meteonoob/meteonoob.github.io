

const dayImg = ['0', '1', '2', '3','45', '48', '51_56_61_66_80', '53_63_81', '55_57_65_67_82', '71_85', '73', '75_86', '77','95_96_99']
const nightImg = ['0n', '1n', '2n', '3n','45n', '48n', '51n_56n_61n_66n_80n', '53n_63n_81n', '55n_57n_65n_67n_82n', '71n_85n', '73n', '77n', '75n_86n', '95n_96n_99n']

export function infoFunc(data){

    console.log(data)

    const year = new Date().getFullYear();
    let month = String(new Date().getMonth() + 1);
    let day = String(new Date().getDate());
    let hours = String(new Date().getHours());

    if (month.length == 1){
        month = `0${month}`
    } 
     if (day.length == 1){
        day = `0${day}`
    }

    if (hours.length == 1){
        hours = `0${hours}`
    }

    const sunset = new Date( data.daily.sunset[0]).getHours();
   
    const timeNow = (year + '-' + month + '-' + day + 'T' + hours + ':' + '00');

    const index = data.hourly.time.indexOf(timeNow);

    const entriesArray = Object.entries(data.hourly);
    const hoursInfo = [];

    for(let i = index; i < index + 24; i++){
        const hour = {};
        entriesArray.forEach(arr => {
            hour[arr[0]] = arr[1][i];
        });
        hour.img = (Number(hours) < Number(sunset)) ? dayImg.find(el => el.includes(hour.weathercode)) :  nightImg.find(el => el.includes(hour.weathercode));
        hoursInfo.push(hour);
    }

const dailyArrays = (Object.entries(data.daily));
const weekInfo = [];

for(let i = 0; i < 7; i++){
    const day = {};
   dailyArrays.forEach(arr => {
        day[arr[0]] = arr[1][i];
    });

    day.img = dayImg.find(el => el.includes(day.weathercode));
    weekInfo.push(day);
}

const info = {
    hoursInfo: hoursInfo,
    weekInfo: weekInfo
}
    return info
}

