const isMeeting = false
const meeting = new Promise((resolve, reject) => {
    // Do your stuff
    if (!isMeeting) {
        const meetingDetails = {
            name: 'Maketing',
            location: 'Skype',
            time: '1.00 PM'
        }
        setTimeout(() => {
            console.log('We have the data for meeting')
            resolve(meetingDetails)
        }, 2000)
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
        // waiting for 'meeting' to be resolved, then assign resolved data to 'meetingDetails'
        const meetingDetails = await meeting

        // waiting for 'addtoCalendar' to be resolved, then assign resolved data to 'message'
        const message = await addtoCalendar(meetingDetails)
        console.log(message)
        console.log('FINALLY OUT') // This will be logging out if all of the above are done.
    } catch(err) {
        console.log(err.message)
    }
}

myMeeting()