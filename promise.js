const isMeeting = false
const meeting = new Promise((resolve, reject) => {
    // Do your stuff
    if (!isMeeting) {
        const meetingDetails = {
            name: 'Maketing',
            location: 'Skyp',
            time: '1.00 PM'
        }
        resolve(meetingDetails)
    } else {
        reject(new Error('Meeting already scheduled'))
    }
})

// const addtoCalendar = meetingDetails => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`
//         resolve(calendar)
//     })
// }
// OTHER WAY IF USING resolve() directly
const addtoCalendar = meetingDetails => {
    const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`
    return Promise.resolve(calendar)
}

meeting
    .then(addtoCalendar) // this will get the resolved data of 'meeting', and pass to 'addtoCalendar'
    .then(res => { // the 'res' will be whatever being resolved from 'addtoCalendar'
        // the data of result will be passing here
        console.log('Meeting scheduled:', res)
    })
    .catch(err => {
        // the data of reject will be passing here
        console.log(err.message)
})



console.log('OTHER SAMPLE START')

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We have the data')
            resolve({ userEmail: email})
        }, 2000)
    })
}

function getVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We have the videos')
            resolve(['videos1', 'videos2', 'videos3'])
        }, 2000)
    })
}

loginUser('abc@gmail.com', 123456)
    .then(user => getVideos(user.userEmail))

console.log('OTHER SAMPLE Finished')