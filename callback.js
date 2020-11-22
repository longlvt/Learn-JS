console.log('Start')

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('We have the data')
        callback({ userEmail: email})
    }, 2000)
}

function getVideos(email, callback) {
    setTimeout(() => {
        console.log('We have the videos')
        callback(['videos1', 'videos2', 'videos3'])
    }, 2000)
}

loginUser('abc@gmail.com', 123456, user => {
    console.log(user)
    getVideos(user.userEmail, videos => {
        console.log(videos)
    })
})

console.log('Finished')