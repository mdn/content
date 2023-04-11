// Retrieve the DOM elements we need to work with.
const newPeriodFormEl = document.getElementById("new-period");
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodListEl = document.getElementById("past-periods");

// Some app constants.
const STORAGE_KEY = "period-tracker";

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  // Prevent the form from submitting to the server
  // since everything is client-side.
  event.preventDefault();

  // Get the start and end dates from the form.
  // TODO: we should do some validation here: end date should be after
  // start date. And dates should not be null.
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // Store the new period in our client-side storage.
  storeNewPeriod(startDate, endDate);

  // Reset the form.
  newPeriodFormEl.reset();

  // Refresh the UI.
  renderPastPeriods();
});

function storeNewPeriod(startDate, endDate) {
  // Periods are stored in Web Storage, by using window.localStorage.
  // This storage mechanism is simple to use but has limitations that are
  // worth keeping in mind:
  // - It's limited to 5MB of data per origin. Not a problem for this app
  //   which will only store a few hundred periods at most, and each period
  //   only contains a start and end date.
  // - It's synchronous and runs on the main thread, which means that the UI
  //   of the app can freeze while the the data is being stored or read.
  //   Again, because the data this app will store is limited, this won't
  //   be a problem.
  // - It's only available to the main thread, which means our service worker
  //   won't be able to access it. For now, our app is simple and doesn't
  //   need the service worker to read the data. But this could change in the
  //   future.
  // - It only supports strings. Right now, we can store the start and end
  //   dates as strings, but if we wanted to store more complex data in the
  //   future, we'd have to migrate to a different storage mechanism such as
  //   IDB.

  // Get all periods from the storage.
  const periods = getAllStoredPeriods();

  // Add the new period to the array.
  periods.push({ startDate, endDate });

  // Sort the array so that periods are ordered by start date, from newest
  // to oldest.
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // Store the updated array back in the storage.
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  // Get all periods from the storage.
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no periods were stored, data will be null. Default to an empty array.
  const periods = data ? JSON.parse(data) : [];

  return periods;
}

function formatDate(dateString) {
  // Convert the date string to a Date object.
  const date = new Date(dateString);

  // Format the date into a locale-specific string.
  return date.toLocaleDateString();
}

function renderPastPeriods() {
  const periods = getAllStoredPeriods();

  // Clear the list of past periods, since we're going to re-render it.
  pastPeriodListEl.innerHTML = "";

  // Loop over all periods and render them.
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate
    )} to ${formatDate(period.endDate)}`;
    pastPeriodListEl.appendChild(periodEl);
  });
}

// Start the app by rendering the past periods.
renderPastPeriods();
