const isMeeting = true
const meeting = new Promise((resolve, reject) => {
    // Do your stuff
    if (!isMeeting) {
        const meetingDetails = {
            name: 'Maketing',
            location: 'Skype',
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

async function myMeeting() {
    try {
        const meetingDetails = await meeting
        const message = await addtoCalendar(meetingDetails)
        console.log(message)
    } catch(err) {
        console.log(err.message)
    }
}

myMeeting()