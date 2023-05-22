---
title: JavaScript web functionality
slug: Web/Progressive_web_apps/Tutorials/Intro/JavaScript
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/Intro/html", "Web/Progressive_web_apps/Tutorials/Intro/Manifest", "Web/Progressive_web_apps/Tutorials/Intro")}}

{{PWASidebar}}

In the previous section, we wrote the [CSS](style.css) and [HTML](step1.html) creating a static version of our web app. In this section, we will write the JavaScript required to convert static HTML into a fully functionalweb application.

The [HTML for our menstrual cycle tracker](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/HTML) is:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />applicat
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
    <section id="past-periods"></section>
    <script src="app.js" defer></script>
  </body>
</html>
```

If you haven't already created the file, copy this HTML and save it in a file called `index.html`.

Note the last line in the body links to the `app.js` script. This is the script we are creating in this section. In this lesson, we will be writing client-side JavaScript to capture form submissions, locally store submitted data, and populate the past periods section.

At the end of this lesson, you will have a fully functional app. In future lessons, we will progressively enhance the app to create an fully installable PWA that works even when the user is offline.

## Javascript task

The page contains a {{HTMLelement("form")}} with date pickers for selecting the start and end dates of each menstrual cycle. The date pickers are {{HTMLElement("input")}} of type {{HTMLElement("input/date", "date")}} with the [`id`](/en-US/docs/Web/HTML/Attributes/id) of `start-date` and `start-date` respectively.

When a user visits the page, we check if they have existing data stored in local storage. The first time a user visits the page, there won't be any data. When a new user selects two dates and submits the form, we need to:

1) Create a "`<h2>Past periods</h2>`" header
2) Create an {{HTMLelement("ul")}}
3) Populate the `<ul>` with a single {{HTMLelement("li")}} containing information about that cycle
4) Save the data to local storage

For each subsequent form submission, we need to:

1) Add the new cycle to the current list
2) Sort the list in date order
3) Repopulate the `<ul>` with the new list, one `<li>` per cycle
4) Append the data to our saved local storage

Existing users will have existing data in local storage. When a user comes back to our webpage with the same browser on the same device, we need to:

1) Retrieve the data from local storage
2) Create a "`<h2>Past periods</h2>`" header
3) Create an {{HTMLelement("ul")}}
4) Populate the `<ul>` with an {{HTMLelement("li")}} for every menstrual cycle saved in local storage.

This is a beginner-level demonstration application. The goal is to teach the basics of converting a web application to a PWA. This application does not contain necessary features like form validation, error checking, edit or delete functionality, etc. You are welcome to expand on the features that are covered and tailor the lesson and applications to your learning goals and application needs.

### Form submission

The form has no method or action. Instead, we add an event listener with [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) to the form. When the user tries to submit the form, we prevent the form from submitting, store the new menstrual cycle, render this cycle along with previous ones, and then reset the form.

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

After preventing the form submission with [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault), we:

1. [Validate user input](#validate-user-input); exiting if invalid,
2. store the new cycle by [retrieving, parsing, appending, sorting, stringifying, and re-storing](#retrieve-append-sort-and-re-store-data) data in localStorage,
3. [render the form data](#render-data-to-screen) along with the data of past menstrual cycles and a section header, and
4. reset the form using the HTMLFormElement [`reset()`](/en-US/docs/Web/API/HTMLFormElement/reset) method

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

### Local storage

We are using the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API), specifically [window.localStorage](/en-US/docs/Web/API/Window/localStorage), to store start and end date pairs in a stringified JSON object.

[LocalStorage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) has several limitations, but suffices for our apps needs. For a more robust application, other [client side storage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) options like [IndexDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) and, discussed later, service workers, have better performance.

Limitations of `localStorage` include:

- Limited data storage: `localStorage` is limited to 5MB of data per origin. Our storage needs are much less than that.
- Stores stings only: `localStorage` stores data as string key and string value pairs. Our start and end dates will be stored as a JSON object parsed as a string. For more complex data, a more robust storage mechanism like IDB would be required.
- Can cause poor performance: Getting and setting from and to local storage is done synchronously on the main thread. When the main thread is occupied, apps are not responsive and appear frozen. With the limited nature of this app, this blip of bad user experience is negligible.
- Only available to the main thread: In addition to the performance issues of occupying the main thread, service workers do not have access to the main thread, meaning the service worker can't directly set or get the local storage data.

#### Retrieve, append, sort, and re-store data

Because we're using localStorage, which comprises of a single string, we retrieve the JSON string of data from local storage, parse the JSON data (if any), push the new pair of dates to the existing array, sort the dates, parse the JSON object back into a string, and save that string back to `localStorage`.

This process requires the creation of a few functions:

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

#### Render data

The last step of our application is to render the list of past periods to the screen along with a heading.

In our HTML, we added a `<section id="past-periods">` placeholder to contain the heading and list of past periods.

Add the container element to the list of contents at the top of your script.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

We retrieve the parsed string of past periods, or an empty array. If empty, we exit. If past periods exist, we clear the current contents from the past period container. We create a header and an unordered list. We loop thru the past periods, adding list items containing formatted from and to dates.

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

### Render past periods on load

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

You can try the fully functioning [period tracker web app](https://mdn.github.io/pwa-examples/intro/javascript) and view the [period tracker web app source code](https://github.com/mdn/pwa-examples/tree/master/intro/javascript) on GitHub. Yes, it works, but it's not a yet PWA.

### Up next

At it's core, a PWA is a web application that is progressively enhanced to work offline. Now that we have a fully functional web application, we add the features required to convert into a PWA, including the [manifest file](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/manifest), [secure connection](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/Secure), and [service worker](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/Service_worker), we have to make this application work.

Up first, we create the [PWA's manifest file](/en-US/Docs/Web/Progressive_web_apps/Tutorials/Intro/manifest), including the PWA's identity, appearance, and iconography.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/Intro/html", "Web/Progressive_web_apps/Tutorials/Intro/Manifest", "Web/Progressive_web_apps/Tutorials/Intro")}}
