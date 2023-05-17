---
title: JavaScript web functionality
slug: Web/Progressive_web_apps/Tutorials/Intro/JavaScript
---

In the first step, we wrote [CSS](style.css) and [HTML](step1.html) to create a [static application template](/en-US/Docs/Web/Progressive_web_apps/tutorials//html). In this section, we will create the JavaScript required to convert the static HTML into a basic web application.

The [HTML for our menstrual cycle tracker](/en-US/Docs/Web/Progressive_web_apps/tutorials//html), explained in the previous section, is:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Period tracker</h1>
    <form id="new-period">
      <fieldset>
        <legend>Enter your period start and end date</legend>
        <p>
          <label for="start-date">Start date</label>
          <input type="date" id="start-date" required />
        </p>
        <p>
          <label for="end-date">End date</label>
          <input type="date" id="end-date" required />
        </p>
      </fieldset>
      <p>
        <button type="submit">Add Period</button>
      </p>
    </form>
    <div id="past-periods"></div>
    <script src="app.js" defer></script>
  </body>
</html>
```

Copy this HTML and save it in a file called `index.html`.

Note the last line in the body links to the `app.js` script. This is the script we are creating in this section. The section that is commented out, the "past periods", is the content we will be creating in this section.

## Javascript task

The page contains a {{HTMLelement("form")}} with two date pickers where the user can select the start and end dates of each menstrual cycle. The date pickers are {{HTMLElement("input")}} of type {{HTMLElement("input/date", "date")}} with the [`id`](/en-US/docs/Web/HTML/Attributes/id) of `start-date` and `start-date` respectively.

When a user visits the page, we have to check if they have existing data.

The first time the user selects two dates and submits the form, we need to:

1) Create a "`<h2>Past periods</h2>`" header
2) Create an {{HTMLelement("ul")}}
3) Populate the `<ul>` with a single {{HTMLelement("li")}} containing information about that cycle
4) Save the data to local storage

For each subsequent form submission, we need to:

1) Add the new cycle to the current list
2) Sort the list in date order
3) Repopulate the `<ul>` with the new list, one `<li>` per cycle
4) Append the data to our saved local storage

Existing users will have existing data in local storage.

When a user comes back to our webpage with the same browser on the same device, we need to:

1) Retrieve the data from local storage
2) Create a "`<h2>Past periods</h2>`" header
3) Create an {{HTMLelement("ul")}}
4) Populate the `<ul>` with an {{HTMLelement("li")}} for every menstrual cycle saved in local storage.

This is a beginner-level demonstration application teaching the basics of converting a web application to a PWA. This application does not contain necessary features like form validation, error checking, deleting or correcting previous entries, etc. We invite you to fork this repo and expand on the features that are covered.

### Form submission

The form has no method or action; instead, when the user tries to submit the form, we prevent the form from submitting, store the new menstrual cycle, render this cycle along with previous ones, and then reset the form.

```js
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  // Prevent the form from submitting to the server
  // since everything is client-side.
  event.preventDefault();

  // Get the start and end dates from the form.
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // Check if the dates are invalid 
  if(checkDatesInvalid(startDate, endDate)) {
    // If the dates are invalid, exit.
    return;
  }

  // Store the new period in our client-side storage.
  storeNewPeriod(startDate, endDate);

  // Refresh the UI.
  renderPastPeriods();

  // Reset the form.
  newPeriodFormEl.reset();
});
```

After preventing the form being submitted, we:

1. [Validate user input](#validate-user-input); exiting if invalid
2. Store the new cycle by [retrieving, parsing, appending, sorting, stringifying, and re-storing](#retrieve-append-sort-and-re-store-data) data in localStorage.
3. [Render form data](#render-data-to-screen) and the data of past menstrual cycles, along with a header.
4. Reset the form using the HTMLFormElement [`reset()`](/en-US/docs/Web/API/HTMLFormElement/reset) method

#### Validate user input

We check if the dates are invalid. We do minimal error checking. We make sure neither date is null, which the `required` attribute should prevent from happening. We also check that the start date is not greater than the end date. If there is an error, we clear the form.

```javascript
function checkDatesInvalid(startDate, endDate) {
// Check that end date is after start date and neither is null.
  if(!startDate || !endDate || startDate > endDate) {
      // For now, we clear the dates if either 
      // or both are invalid
      newPeriodFormEl.reset();
      // To make the validation more robust we could: 
      // 1. add error messaging based on error type
      // 2. Alert assistive technology users about the error
      // 3. move focus to the error location
      // instead, this function returns true
      return true;
  }
}
```

In a more robust version of this app, we would, at minimum, include error messaging informing the user there is an error. A good application would inform the user what the error is, put focus on the offending form control, and use [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to alert assistive technology users to the error.

#### Retrieve, append, sort, and re-store data

We store each start and end date pair using the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API) by using [window.localStorage](/en-US/docs/Web/API/Window/localStorage).

[LocalStorage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) has several limitations, but suffices for our apps needs. For more robust applications, consider other [client side storage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) options including [IndexDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) and, discussed later, service workers.

Limitations include:

- Limited data storage
  - : Storage is limited to 5MB of data per origin. Our app will store less than 1KB of data.
- Stores stings only
  - : Local storage stores data as string key and string value pairs. Our start and end dates will be stored and parsed as a string. For more complex data, use a more robust storage mechanism such as IDB.
- Can cause poor performance
- : Getting and setting local storage is done synchronously and on the main thread. When the main thread is occupied, the entire app will appear frozen. With the limited nature of this app, this blip of bad user experience is negligible.
- Only available to the main thread
  - : In addition to the performance issues of occupying the main thread, service workers do not have access to the main thread, meaning the service worker can't directly set or get the period data.

Because we're using localStorage, which comprises of a single string, we retrieve the JSON string of data from local storage, parse the JSON data (if any), push the new pair of dates to the array, sort the dates, then save the new string, parsed as JSON, back to localStorage.

Because we need to retrieve data from localStorage when we check if there is data, when we render data on subseqent visits, and when the user adds a cycle, we create a few functions.

```javascript
// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // Get data from storage.
  const periods = getAllStoredPeriods();

  // Add the new period objet to the end of the array of period objects.
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
  // Get the string of period data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no periods were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
```

#### Render data to screen

Add the container element to the list of contants at the top of your script.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

To render our content, we retrieve the parsed string of past periods, or an empty array. If empty, we exit. If past periods exist, we clear the current contents from the past period container. We create an header and an unordered list. We loop thru the past periods, adding list items containing formated from and to dates.

```javascript
function renderPastPeriods() {

  // get the parsed string of periods, or an empty array.
  const periods = getAllStoredPeriods();

  // exit if there are no periods
  if( Object.keys(periods).length === 0 ) {
    return;
  }

  // Clear the list of past periods, since we're going to re-render it.
  pastPeriodContainer.innerHTML = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Past periods";

  const pastPeriodList = document.createElement("ul");

  // Loop over all periods and render them.
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  // Convert the date string to a Date object.
  const date = new Date(dateString);

  // Format the date into a locale-specific string.
  // include your locale for better user experience
  return date.toLocaleDateString('en-UK', {timeZone: 'UTC'});
}
```

### Repeat visitor?

When the deferred JavaScript runs on page load, we render past periods, if any.

```javascript
// Start the app by rendering the past periods.
renderPastPeriods();
```

### Complete JavaScript

Your `app.js` file should look similar to this JavaScript:

```javascript
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;
  if(checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if(!startDate || !endDate || startDate > endDate) {
      newPeriodFormEl.reset();
      return true;
  }
}

function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  periods.push({ startDate, endDate });
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  const data = window.localStorage.getItem(STORAGE_KEY);
  const periods = data ? JSON.parse(data) : [];
  console.dir(periods);
  console.log(periods);
  return periods;
}

function renderPastPeriods() {
  const pastPeriodHeader = document.createElement("h2");
  const pastPeriodList = document.createElement("ul");
  const periods = getAllStoredPeriods();
  if(Object.keys(periods).length === 0) {
    return;
  }
  pastPeriodContainer.innerHTML = "";
  pastPeriodHeader.textContent = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {timeZone: 'UTC'});
}

renderPastPeriods();
```

### Up next

A PWA is a progressive web application. At it's core, it is a web application that is progressively enhanced to work offline. Before adding the features required to convert into a PWA, including the [manifest file](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/manifest), [secure connection](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/secure), and [service worker](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/service_worker), we have to make this application work.

Up next we will create the [basic JavaScript functionality](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/html) by writing `app.js` to include the basic JavaScript functionality, so we have a functioning application that can be progressively enhanced into a PWA.
