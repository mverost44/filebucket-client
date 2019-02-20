const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()
  const imageData = new FormData(event.target)
  api.createUpload(imageData)
    .then(ui.createUploadSuccess)
    .catch(ui.failure)
}

const onGetUploads = (uploadData) => {
  event.preventDefault()
  console.log(uploadData)
  api.getUploads(uploadData)
    .then(ui.getUploadsSuccess)
    .catch(ui.failure)
}

const onDeleteUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.upload.id
  api.destroy(id)
    .then(ui.onDeleteUploadSuccess)
    .catch(ui.onDeleteUploadFailure)
}

const onUpdateUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.upload.id

  api.update(id, data)
    .then(ui.onUpdateUploadSuccess)
    .catch(ui.onUpdateUploadFailure)
}

module.exports = {
  onCreateUpload,
  onDeleteUpload,
  onUpdateUpload,
  onGetUploads
}
