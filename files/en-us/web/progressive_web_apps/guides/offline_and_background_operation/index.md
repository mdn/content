---
title: Offline and background operation
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
---

Usually, websites are very dependent on both reliable network connectivity and on the user having their pages open in a browser. Without network connectivity, most websites are just unusable, and if the user does not have the site open in a browser tab, most websites are unable to do anything.

However, consider the following scenarios:

- A music app enables the user to stream music while online, but can download tracks in the background and then continue to play while the user is offline.
- The user composes a long email, presses "Send", and then loses network connectivity. The device sends the email in the background, as soon as the network is available again.
- The user's chat app receives a message from one of their contacts, and although the app is not open, it displays a badge on the app icon to let the user know they have a new message.

These are the kinds of features that users expect from platform-specific apps. If PWAs are to compete with platform-specific apps, they need to support scenarios like this. In this guide, we'll introduce a set of technologies which enable a PWA to:

- provide a good user experience even when the device has intermittent network connectivity
- update its state when the app is not running
- notify the user about important events that have happened while the app was not running.

The techologies introduced in this guide are:

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/en-US/docs/Web/API/Push_API)
- [Notifications API](/en-US/docs/Web/API/Notifications_API)

## Offline operation

Offline operation means that the PWA can give as good an experience as possible when the device does not have network connectivity. The foundation of this, and of the other technologies in this guide, is the service worker.

A [worker](/en-US/docs/Web/API/Web_Workers_API) is a part of a web app that runs in a separate thread to the main JavaScript code. The main code creates the worker, passing in a URL to the worker's script. The worker and the main code can't directly access each other's state, but can communicate by sending each other messages. Workers can be used to run computationally expensive tasks in the background: because they run in a separate thread, the main JavaScript code in the app, that implements the app's UI, can stay responsive to the user.

A [service worker](/en-US/docs/Web/API/Service_Worker_API) is a specific type of worker. It is said to _control_ some subset of the pages under the app origin (by default, all pages under the app origin).

When the service worker is installed, it can fetch the resources from the server for the pages it controls (including pages, styles, scripts, and images, for example) and add them to a local cache. Then whenever the app requests a resource (for example, because the user opened the app or clicked an internal link), the request can be intercepted by the service worker. The service worker can then respond to the request with a caching strategy, such as:

1. If the resource exists in the cache, get the resource from the cache and return the resource to the app.
2. If the resource does not exist in the cache, try to fetch the resource from the network.
   1. If the resource could be fetched, add the resource to the cache for next time, and return the resource to the app.
   2. If the resource could not be fetched, return some default fallback resource.

This means that in many situations, the web app will function well even if network connectivity is intermittent. From the point of view of the main app code, this is completely transparent: it just makes network requests and gets responses. Also, because the service worker is in a separate thread, the main app code can stay responsive to user input while resources are fetched and cached.

> **Note:** The strategy described here is just one way a service worker could implement caching. The optimal caching strategy is dependent on the particular web app and how it is used.

The following web platform features are especially relevant to using service workers in this way:

- the {{domxref("Cache")}} interface is used to add resources to the cache. `Cache` instances are accessible through the {{domxref("caches")}} property in the service worker global scope.
- when the web app makes a network request, an event called {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} is fired in the service worker's global scope. By listening for this event, the service worker can intercept the request.
- the event handler for the `fetch` event is passed a {{domxref("FetchEvent")}} object, which:
  - provides access to the request as a {{domxref("Request")}} instance
  - provides a {{domxref("FetchEvent.respondWith", "respondWith()")}} method to send a response to the request.

For much more detail about setting up service workers and using them to add offline functionality, see our [guide to using service workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Background operation

While offine operation is probably the most common use for service workers, they also enable a PWA to operate even while the main app is closed. This is possible because the service worker is allowed to run while the main app is not running.

This doesn't mean service workers run all the time: browsers may close service workers when they think it is appropriate. For example, if a service worker has been inactive for a while it will be closed. However, the browser will restart the service worker when an event has happened that it needs to take care of. This enables a PWA to implement background operations in the following way:

- in the main app, register a request for the service worker to perform some operation
- at the appropriate time, the service worker will be restarted if necessary, and an event will fire in the service worker's scope
- the service worker will perform the operation

In the next sections we'll discuss a few different features that use this pattern to enable a PWA to work while the main app isn't open.

## Background sync

Suppose a user composes an email and presses "Send". In a traditional website, they must keep the tab open until the app has sent the email: if they close the tab, or the device loses connectivity, then the message will not be sent. Background sync, defined in the [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API), is the solution to this problem for PWAs.

Background sync enables the app to ask its service worker to perform a task on its behalf. As soon as the device has network connectivity, the browser will restart the service worker, if necessary, and fire an event named [`sync`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/sync_event) in the service worker's scope. The service worker can then attempt to execute the task. If the task can't be completed, then the browser may retry a limited number of times by firing the event again.

### Registering a sync event

To ask the service worker to perform a task, the main app can access {{domxref("ServiceWorkerContainer/ready", "navigator.serviceWorker.ready")}}, which resolves with a {{domxref("ServiceWorkerRegistration")}} object. The app then calls {{domxref("SyncManager/register", "sync.register()")}} on the `ServiceWorkerRegistration` object, like this:

```js
// main.js
async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Note that the app passes a name for the task: `"send-message"` in this case.

### Handling a sync event

As soon as the device has network connectivity, the `sync` event fires in the service worker scope. The service worker checks the name of the task and runs the appropriate function, `sendMessage()` in this case:

```js
// service-worker.js
self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Note that we pass the result of the `sendMessage()` function into the event's {{domxref("ExtendableEvent/waitUntil", "waitUntil()")}} method. The `waitUntil()` method takes a {{jsxref("Promise")}} as a parameter and asks the browser not to stop the service worker until the promise has settled. This is also how the browser knows whether the operation succeeded or not: if the promise rejects, then the browser may retry by firing the `sync` event again.

The `waitUntil()` method is not a guarantee that the browser will not stop the service worker: if the operation takes too long, the service worker will be stopped anyway.

## Background fetch

Background sync is useful for relatively short background operations, but as we just saw: if a service worker doesn't finish handling a sync event in a relatively short time, the browser will stop the service worker. This is an intentional measure to conserve battery life and protect the user's privacy by minimizing the time for which the user's IP address is exposed to the server while the app is in the background.

This makes background sync unsuitable for longer operations - downloading a movie, for example. For this scenario, you need the [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API). With background fetch, network requests can be performed while both the main app UI and the service worker are closed.

With background fetch:

- the request is initiated from the main app UI
- whether or not the main app is open, the browser displays a persistent UI element that notifies the user about the ongoing request, and enables them to cancel it or check its progress
- when the request has completed with success or failure, or the user has asked to check the request's progress, then the browser starts the service worker (if necessary) and fires the appropriate event in the service worker's scope.

### Making a background fetch request

A background fetch request is initiated in the main app code, by calling {{domxref("BackgroundFetchManager/fetch", "backgroundFetch.fetch()")}} on the `ServiceWorkerRegistration` object, like this:

```js
// main.js
async function requestBackgroundFetch(movieData) {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "download-movie",
    ["/my-movie-part-1.webm", "/my-movie-part-2.webm"],
    {
      icons: movieIcons,
      title: "Downloading my movie",
      downloadTotal: 60 * 1024 * 1024,
    }
  );
  //...
}
```

We're passing three arguments into `backgroundFetch.fetch()`:

1. an identifier for this fetch request
2. an array of {{domxref("Request")}} objects or URLs. A single background fetch request can include multiple network requests.
3. an object containing data for the UI that the browser uses to show the existence and progress of the request.

The `backgroundFetch.fetch()` call returns a {{jsxref("Promise")}} that resolves to a {{domxref("BackgroundFetchRegistration")}} object. This enables the main app to update its own UI as the request progresses. However, if the main app is closed, the fetch will continue in the background.

The browser will display a persistent UI element reminding the user that the request is ongoing, giving them the chance to find out more about the request and cancel it if they wish. The UI will include an icon and title taken from the `icons` and `title` arguments, and uses `downloadTotal` as an estimate of the total download size, to show the request's progress.

### Handling request outcomes

When something happens that the app might need to take care of, the browser starts the app's service worker, if necessary, and fires an event in the service worker's scope. The following events can be fired:

- `backgroundfetchsuccess`: all requests were successful
- `backgroundfetchfail`: at least one request failed
- `backgroundfetchabort`: the fetch was canceled by the user or by the main app
- `backgroundfetchclick`: the user clicked on the UI the browser is showing for the fetch

#### Retrieving response data

In the handlers for the `backgroundfetchsuccess`, `backgroundfetchfail`, and `backgroundfetchabort` events, the service worker can retrieve the request and response data.

To get the response, the event handler accesses the event's {{domxref("BackgroundFetchEvent/registration", "registration")}} property. This is a {{domxref("BackgroundFetchRegistration")}} object, which has {{domxref("BackgroundFetchRegistration/matchAll", "matchAll()")}} and {{domxref("BackgroundFetchRegistration/match", "match()")}} methods that return {{domxref("BackgroundFetchRecord")}} objects matching the given URL (or, in the case of `matchAll()` all records if no URL is given).

Each `BackgroundFetchRecord` has a {{domxref("BackgroundFetchRecord/responseReady", "responseReady")}} property that is a `Promise` which resolves with the {{domxref("Response")}}, once the response is available.

So to access response data, the handler could do something like:

```js
addEventListener("backgroundfetchsuccess", (event) => {
  const registration = event.registration;

  event.waitUntil(async () => {
    const registration = event.registration;
    const records = await registration.matchAll();
    const responsePromises = records.map(
      async (record) => await record.responseReady
    );

    const responses = Promise.all(responsePromises);
    // do something with the responses
  });
});
```

Since the response data won't be available after the handler exits, the handler should store the data (for example, in the {{domxref("Cache")}}) if the app still wants it.

#### Updating the browser's UI

The event object passed into `backgroundfetchsuccess` and `backgroundfetchfail` also has an {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}} method, which can be used to update the UI that the browser shows to keep the user informed about the fetch operation. With `updateUI()`, the handler can update the UI element's title and icon:

```js
addEventListener("backgroundfetchsuccess", (event) => {
  // retrieve and store response data
  // ...

  event.updateUI({ title: "Finished your download!" });
});

addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Could not complete download" });
});
```

#### Responding to user interaction

The `backgroundfetchclick` event is fired when the user has clicked on the UI element that the browser shows while the fetch is ongoing.

The expected response here is to open a window giving the user more information about the fetch operation, which can be done from the service worker using {{domxref("Clients/openWindow", "clients.openWindow()")}}. For example:

```js
addEventListener("backgroundfetchclick", (event) => {
  const registration = event.registration;

  if (registration.result === "success") {
    clients.openWindow("/play-movie");
  } else {
    clients.openWindow("/movie-download-progress");
  }
});
```

## Periodic background sync

## Push

## Notifications

## Permissions

---

SErvice workers

-background sync
-Background Fetch API
-Web Periodic Background Synchronization API
-push notifications api
-notificationds
