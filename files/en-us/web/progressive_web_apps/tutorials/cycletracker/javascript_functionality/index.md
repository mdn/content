---
title: "CycleTracker: JavaScript functionality"
short-title: JavaScript functionality
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
page-type: tutorial-chapter
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

In the previous section, we wrote the HTML and CSS for CycleTracker, creating a static version of our web app. In this section, we will write the JavaScript required to convert static HTML into a fully functional web application.

If you haven't already done so, copy the [HTML](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality/index.html) and [CSS](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality/style.css) and save them to files called `index.html` and `style.css`.

The last line in the HTML file calls the `app.js` JavaScript file. This is the script we are creating in this section. In this lesson, we will be writing client-side JavaScript code to capture form submissions, locally store submitted data, and populate the past-periods section.

At the end of this lesson, you will have a fully functional app. In future lessons, we will progressively enhance the app to create a fully installable PWA that works even when the user is offline.

## JavaScript task

When a user visits the page, we check if they have existing data stored in local storage. The first time a user visits the page, there won't be any data. When a new user selects two dates and submits the form, we need to:

1. Create a "`<h2>Past periods</h2>`" header
2. Create an {{HTMLelement("ul")}}
3. Populate the `<ul>` with a single {{HTMLelement("li")}} containing information about that cycle
4. Save the data to local storage

For each subsequent form submission, we need to:

1. Add the new menstrual cycle to the current list
2. Sort the list in date order
3. Repopulate the `<ul>` with the new list, one `<li>` per cycle
4. Append the data to our saved local storage

Existing users will have existing data in local storage. When a user comes back to our webpage with the same browser on the same device, we need to:

1. Retrieve the data from local storage
2. Create a "`<h2>Past periods</h2>`" header
3. Create an {{HTMLelement("ul")}}
4. Populate the `<ul>` with an {{HTMLelement("li")}} for every menstrual cycle saved in local storage.

This is a beginner-level demonstration application. The goal is to teach the basics of converting a web application to a PWA. This application does not contain necessary features like form validation, error checking, edit or delete functionality, etc. You are welcome to expand on the features that are covered and tailor the lesson and applications to your learning goals and application needs.

## Form submission

The page contains a {{HTMLelement("form")}} with date pickers for selecting the start and end dates of each menstrual cycle. The date pickers are {{HTMLElement("input")}} of type {{HTMLElement("input/date", "date")}} with the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of `start-date` and `end-date` respectively.

The form has no method or action. Instead, we add an event listener with [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) to the form. When the user tries to submit the form, we prevent the form from submitting, store the new menstrual cycle, render this period along with previous ones, and then reset the form.

```js
// create constants for the form and the form controls
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
  if (checkDatesInvalid(startDate, endDate)) {
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

1. [Validate user input](#validate_user_input); exiting if invalid,
2. store the new period by [retrieving, parsing, appending, sorting, stringifying, and re-storing](#retrieve_append_sort_and_re-store_data) data in localStorage,
3. [render the form data](#render_data_to_screen) along with the data of past menstrual cycles and a section header, and
4. reset the form using the HTMLFormElement [`reset()`](/en-US/docs/Web/API/HTMLFormElement/reset) method

### Validate user input

We check if the dates are invalid. We do minimal error checking. We make sure neither date is null, which the `required` attribute should prevent from happening. We also check that the start date is not greater than the end date. If there is an error, we clear the form.

```js
function checkDatesInvalid(startDate, endDate) {
  // Check that end date is after start date and neither is null.
  if (!startDate || !endDate || startDate > endDate) {
    // To make the validation robust we could:
    // 1. add error messaging based on error type
    // 2. Alert assistive technology users about the error
    // 3. move focus to the error location
    // instead, for now, we clear the dates if either
    // or both are invalid
    newPeriodFormEl.reset();
    // as dates are invalid, we return true
    return true;
  }
  // else
  return false;
}
```

In a more robust version of this app, we would, at minimum, include error messaging informing the user there is an error. A good application would inform the user what the error is, put focus on the offending form control, and use [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to alert assistive technology users to the error.

## Local storage

We are using the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API), specifically [window.localStorage](/en-US/docs/Web/API/Window/localStorage), to store start and end date pairs in a stringified JSON object.

[LocalStorage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) has several limitations, but suffices for our apps needs. We're using localStorage to make this simple and client-side only. This means the data will only be stored on one browser on a single device. Clearing the browser data will also lose all locally stored periods. What may seem like a limitation for many applications may be an asset in the case of this application, as menstrual cycle data is personal, and the user of such an app may very rightly be concerned about privacy.

For a more robust application, other [client side storage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) options like [IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) and, discussed later, service workers, have better performance.

Limitations of `localStorage` include:

- Limited data storage: `localStorage` is limited to 5MB of data per origin. Our storage needs are much less than that.
- Stores strings only: `localStorage` stores data as string key and string value pairs. Our start and end dates will be stored as a JSON object parsed as a string. For more complex data, a more robust storage mechanism like IDB would be required.
- Can cause poor performance: Getting and setting from and to local storage is done synchronously on the main thread. When the main thread is occupied, apps are not responsive and appear frozen. With the limited nature of this app, this blip of bad user experience is negligible.
- Only available to the main thread: In addition to the performance issues of occupying the main thread, service workers do not have access to the main thread, meaning the service worker can't directly set or get the local storage data.

### Retrieve, append, sort, and re-store data

Because we're using localStorage, which comprises of a single string, we retrieve the JSON string of data from local storage, parse the JSON data (if any), push the new pair of dates to the existing array, sort the dates, parse the JSON object back into a string, and save that string back to `localStorage`.

This process requires the creation of a few functions:

```js
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

## Render data to screen

The last step of our application is to render the list of past periods to the screen along with a heading.

In our HTML, we added a `<section id="past-periods">` placeholder to contain the heading and list of past periods.

Add the container element to the list of contents at the top of your script.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

We retrieve the parsed string of past periods, or an empty array. If empty, we exit. If past periods exist, we clear the current contents from the past period container. We create a header and an unordered list. We loop through the past periods, adding list items containing formatted from and to dates.

```js
function renderPastPeriods() {
  // get the parsed string of periods, or an empty array.
  const periods = getAllStoredPeriods();

  // exit if there are no periods
  if (periods.length === 0) {
    return;
  }

  // Clear the list of past periods, since we're going to re-render it.
  pastPeriodContainer.textContent = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Past periods";

  const pastPeriodList = document.createElement("ul");

  // Loop over all periods and render them.
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
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
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
```

### Render past periods on load

When the deferred JavaScript runs on page load, we render past periods, if any.

```js
// Start the app by rendering the past periods.
renderPastPeriods();
```

## Complete JavaScript

Your `app.js` file should look similar to this JavaScript:

```js
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
  if (checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) {
    newPeriodFormEl.reset();
    return true;
  }
  return false;
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
  if (periods.length === 0) {
    return;
  }
  pastPeriodContainer.textContent = "";
  pastPeriodHeader.textContent = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

renderPastPeriods();
```

You can try the fully functioning [CycleTracker period tracking web app](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality) and view the [web app source code](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality) on GitHub. Yes, it works, but it's not a yet PWA.

## Up next

At its core, a PWA is a web application that can be installed is progressively enhanced to work offline. Now that we have a fully functional web application, we add the features required to convert it to a PWA, including the [manifest file](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [secure connection](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), and [service worker](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Up first, we create the [CycleTracker's manifest file](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), including the identity, appearance, and iconography for our CycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
