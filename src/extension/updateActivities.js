'use strict';

const filterPanel = document.querySelector('.search .panel');

const filterPanelHeading = document.createElement('div');
filterPanelHeading.classList.add('panel-heading');
filterPanel.insertAdjacentElement('afterbegin', filterPanelHeading);

const filterPanelTitle = document.createElement('div');
filterPanelTitle.classList.add('panel-title');
filterPanelTitle.innerText = 'Filter activities';
filterPanelHeading.appendChild(filterPanelTitle);

const editPanel = document.createElement('div');
editPanel.classList.add('panel', 'panel-default');
filterPanel.insertAdjacentElement('afterend', editPanel);

const editPanelHeading = document.createElement('div');
editPanelHeading.classList.add('panel-heading');
editPanel.appendChild(editPanelHeading);

const editPanelTitle = document.createElement('div');
editPanelTitle.classList.add('panel-title');
editPanelTitle.innerText = 'Update activities';
editPanelHeading.appendChild(editPanelTitle);

const editPanelBody = document.createElement('div');
editPanelBody.classList.add('panel-body', 'row');
editPanel.appendChild(editPanelBody);

const editPanelInfoRow = document.createElement('div');
editPanelInfoRow.classList.add('form-group', 'col-sm-12');
editPanelBody.appendChild(editPanelInfoRow);

const editPanelInfo = document.createElement('div');
editPanelInfo.classList.add('alert', 'alert-info');
editPanelInfo.innerText = 'Not all filtered activities have the fields available in the update panel. The ' +
  'plugin will just update the fields that are available for each individual activity.';
editPanelInfoRow.appendChild(editPanelInfo);

const workoutTypeRideOptions = document.getElementById('tag_type_ride');
const editPanelFormGroupRideType = document.createElement('div');
editPanelFormGroupRideType.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroupRideType);

const editPanelRideTypeLabel = document.createElement('label');
editPanelRideTypeLabel.innerText = 'Ride type';
editPanelFormGroupRideType.appendChild(editPanelRideTypeLabel);

const editPanelRideTypeField = document.createElement('select');
editPanelRideTypeField.id = 'strava-bulk-edit-ride-type';
editPanelRideTypeField.classList.add('form-control');
editPanelRideTypeField.innerHTML = workoutTypeRideOptions.innerHTML.replace(/<option value="">All Ride Types<\/option>/m, '<option value="10">Ride</option>');
editPanelFormGroupRideType.appendChild(editPanelRideTypeField);

const editPanelRideTypeDontChange = document.createElement('option');
editPanelRideTypeDontChange.innerText = 'Don\'t change the ride type';
editPanelRideTypeDontChange.value = '';
editPanelRideTypeDontChange.selected = true;
editPanelRideTypeField.insertAdjacentElement('afterbegin', editPanelRideTypeDontChange);

const BikeOptions = document.getElementById('gear_bike');
const editPanelFormGroupBike = document.createElement('div');
editPanelFormGroupBike.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroupBike);

const editPanelBikeLabel = document.createElement('label');
editPanelBikeLabel.innerText = 'Bike';
editPanelFormGroupBike.appendChild(editPanelBikeLabel);

const editPanelBikeField = document.createElement('select');
editPanelBikeField.id = 'strava-bulk-edit-ride-type';
editPanelBikeField.classList.add('form-control');
editPanelBikeField.innerHTML =  BikeOptions.innerHTML.replace(/All Bikes/m, "Don't change the bike");
editPanelFormGroupBike.appendChild(editPanelBikeField);

// The Run type field is commented out, because updating this field does not
// work and the issue seams to be at Strava.

// const workoutTypeRunOptions = document.getElementById('workout_type_run');
// const editPanelFormGroupRunType = document.createElement('div');
// editPanelFormGroupRunType.classList.add('form-group', 'col-sm-6');
// editPanelBody.appendChild(editPanelFormGroupRunType);
//
// const editPanelRunTypeLabel = document.createElement('label');
// editPanelRunTypeLabel.innerText = 'Run type';
// editPanelFormGroupRunType.appendChild(editPanelRunTypeLabel);
//
// const editPanelRunTypeField = document.createElement('select');
// editPanelRunTypeField.id = 'strava-bulk-edit-ride-type';
// editPanelRunTypeField.classList.add('form-control');
// editPanelRunTypeField.innerHTML =  workoutTypeRunOptions.innerHTML.replace(/<option value="">All Run Types/m, "<option value=\"0\">Run");
// editPanelFormGroupRunType.appendChild(editPanelRunTypeField);
//
// const editPanelRunTypeDontChange = document.createElement('option');
// editPanelRunTypeDontChange.innerText = 'Don\'t change the ride type';
// editPanelRunTypeDontChange.value = '';
// editPanelRunTypeDontChange.selected = true;
// editPanelRunTypeField.insertAdjacentElement('afterbegin', editPanelRunTypeDontChange);

const ShoesOptions = document.getElementById('gear_shoe');
const editPanelFormGroupShoes = document.createElement('div');
editPanelFormGroupShoes.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroupShoes);

const editPanelShoesLabel = document.createElement('label');
editPanelShoesLabel.innerText = 'Shoes';
editPanelFormGroupShoes.appendChild(editPanelShoesLabel);

const editPanelShoesField = document.createElement('select');
editPanelShoesField.id = 'strava-bulk-edit-ride-type';
editPanelShoesField.classList.add('form-control');
editPanelShoesField.innerHTML =  ShoesOptions.innerHTML.replace(/All Shoes/m, "Don't change the shoes");
editPanelFormGroupShoes.appendChild(editPanelShoesField);

const editPanelFormGroup = document.createElement('div');
editPanelFormGroup.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroup);

const editPanelMedia = document.createElement('div');
editPanelMedia.classList.add('media', 'media-bottom');
editPanelFormGroup.appendChild(editPanelMedia);

const editPanelMediaContent = document.createElement('div');
editPanelMediaContent.classList.add('media-content');
editPanelMedia.appendChild(editPanelMediaContent);

const editPanelMediaBody = document.createElement('div');
editPanelMediaBody.classList.add('media-body');
editPanelMediaContent.appendChild(editPanelMediaBody);

const editPanelVisibilityLabel = document.createElement('label');
editPanelVisibilityLabel.innerText = 'Privacy controls';
editPanelMediaBody.appendChild(editPanelVisibilityLabel);

const editPanelVisibilityField = document.createElement('select');
editPanelVisibilityField.id = 'strava-bulk-edit-visibility';
editPanelVisibilityField.classList.add('form-control');
editPanelMediaBody.appendChild(editPanelVisibilityField);

const editPanelVisibilityOptionDontChange = document.createElement('option');
editPanelVisibilityOptionDontChange.value = '';
editPanelVisibilityOptionDontChange.innerText = 'Don\'t change the privacy';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionDontChange);

const editPanelVisibilityOptionEveryone = document.createElement('option');
editPanelVisibilityOptionEveryone.value = 'everyone';
editPanelVisibilityOptionEveryone.innerText = 'Everyone';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionEveryone);

const editPanelVisibilityOptionFollowers = document.createElement('option');
editPanelVisibilityOptionFollowers.value = 'followers_only';
editPanelVisibilityOptionFollowers.innerText = 'Followers';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionFollowers);

const editPanelVisibilityOptionOnlyMe = document.createElement('option');
editPanelVisibilityOptionOnlyMe.value = 'only_me';
editPanelVisibilityOptionOnlyMe.innerText = 'Only me';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionOnlyMe);

const editPanelMediaActions = document.createElement('div');
editPanelMediaActions.classList.add('media-actions');
editPanelMediaContent.appendChild(editPanelMediaActions);

const editPanelSubmit = document.createElement('button');
editPanelSubmit.id = 'strava-bulk-edit-submit';
editPanelSubmit.type = 'button';
editPanelSubmit.classList.add('btn', 'btn-default');
editPanelSubmit.innerText = 'Update activities';
editPanelMediaActions.appendChild(editPanelSubmit);

const loadingModal = document.createElement('div');
loadingModal.id = 'strava-bulk-edit-loading-modal';
loadingModal.classList.add('modal', 'fade');
document.body.appendChild(loadingModal);
document.body.classList.add('modal-open');

const loadingModalBackdrop = document.createElement('div');
loadingModalBackdrop.id = 'strava-bulk-edit-modal-backdrop';
loadingModalBackdrop.classList.add('modal-backdrop', 'fade');
document.body.appendChild(loadingModalBackdrop);

const loadingModalDialog = document.createElement('div');
loadingModalDialog.classList.add('modal-dialog', 'modal-sm');
loadingModal.appendChild(loadingModalDialog);

const loadingModalContent = document.createElement('div');
loadingModalContent.classList.add('modal-content');
loadingModalDialog.appendChild(loadingModalContent);

const loadingModalBody = document.createElement('div');
loadingModalBody.classList.add('modal-body');
loadingModalContent.appendChild(loadingModalBody);

const loadingModalImage = document.createElement('p');
loadingModalImage.classList.add('text-center');
loadingModalBody.appendChild(loadingModalImage);

const loadingModalText = document.createElement('p');
loadingModalText.classList.add('text-center');
loadingModalText.innerText = 'Updating your activities...';
loadingModalBody.appendChild(loadingModalText);

editPanelSubmit.onclick = function(element) {
  const fields = {};

  if (editPanelRideTypeField.value !== '') {
    fields.rideType = editPanelRideTypeField.value;
  }

  if (editPanelBikeField.value !== '') {
    fields.bike = editPanelBikeField.value;
  }

  // if (editPanelRunTypeField.value !== '') {
  //   fields.runType = editPanelRunTypeField.value;
  // }

  if (editPanelShoesField.value !== '') {
    fields.shoes = editPanelShoesField.value;
  }

  if (editPanelVisibilityField.value !== '') {
    fields.visibility = editPanelVisibilityField.value;
  }

  toggleLoadingOverlay();
  setTimeout(updateActivities, 2000, fields);
}

function updateActivities(fields) {
  const quickEdit = document.querySelectorAll('.training-activity-row .quick-edit');
  for (let editButton of quickEdit) {
    editButton.click();
  }

  if (fields.rideType) {
    const rideType = document.querySelectorAll('.training-activity-row select[name="workout_type_ride"]');
    for (let rideTypeField of rideType) {
      rideTypeField.value = fields.rideType;
    }
  }

  if (fields.bike) {
    const bike = document.querySelectorAll('.training-activity-row select[name="bike_id"]');
    for (let bikeField of bike) {
      bikeField.value = fields.bike;
    }
  }

  if (fields.runType) {
    const runType = document.querySelectorAll('.training-activity-row select[name="workout_type_run"]');
    for (let runTypeField of runType) {
      runTypeField.value = fields.runType;
    }
  }

  if (fields.shoes) {
    const shoes = document.querySelectorAll('.training-activity-row select[name="athlete_gear_id"]');
    for (let shoesField of shoes) {
      shoesField.value = fields.shoes;
    }
  }

  if (fields.visibility) {
    const visibility = document.querySelectorAll('.training-activity-row select[name="visibility"]');
    for (let visibilityField of visibility) {
      visibilityField.value = fields.visibility;
    }
  }

  const submit = document.querySelectorAll('.training-activity-row button[type="submit"]');
  for (let submitButton of submit) {
    submitButton.click();
  }

  const nextButton = document.querySelector('button.next_page');
  const previousButton = document.querySelector('button.previous_page');

  if (nextButton != null) {
    nextButton.click();
    setTimeout(updateActivities, 3000, fields);
  } else if (previousButton != null) {
    navigateBack();
  } else {
    toggleLoadingOverlay();
  }
}

function navigateBack() {
  const previousButton = document.querySelector('button.previous_page');

  if (previousButton != null) {
    previousButton.click();
    setTimeout(navigateBack, 3000);
  } else {
    toggleLoadingOverlay();
  }
}

function toggleLoadingOverlay() {
  loadingModal.classList.toggle('in');
  loadingModalBackdrop.classList.toggle('in');
}
