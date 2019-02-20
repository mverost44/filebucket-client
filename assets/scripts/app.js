'use strict'
'use strict'
const uploadEvents = require('./uploads/events')
const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#get-uploads-button').on('click', uploadEvents.onGetUploads)
  $('#upload-form').on('submit', uploadEvents.onCreateUpload)
  $('#delete-upload').on('submit', uploadEvents.onDeleteUpload)
  $('#update-upload').on('submit', uploadEvents.onUpdateUpload)
  $('body').on('click', '#delete', uploadEvents.onHandlebarDelete)
})
