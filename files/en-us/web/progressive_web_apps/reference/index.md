---
title: Progressive Web Apps reference
short-title: Reference
slug: Web/Progressive_web_apps/Reference
page-type: landing-page
---

{{PWASidebar}}

This reference describes the technologies, features, and APIs that [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) can use to offer a great user experience.

## Web app manifest

- [Web app manifest members](/en-US/docs/Web/Manifest)
  - : Developers can use web app manifest members to describe a PWA, customize its appearance, and more deeply integrate it into the operating system.

## Service Worker APIs

### Communication with the app

The following APIs can be used by a service worker to communicate with its associated client PWA:

- [`Client.postMessage()`](/en-US/docs/Web/API/Client/postMessage)
  - : Allows a service worker to send a message to its client PWA.
- [Broadcast Channel API](/en-US/docs/Web/API/Broadcast_Channel_API)
  - : Allows a service worker and its client PWA to establish a basic two-way communication channel.

### Offline operation

The following APIs can be used by a service worker to make your app work offline:

- [`Cache`](/en-US/docs/Web/API/Cache)
  - : A persistent storage mechanism for HTTP responses used to store assets that can be reused when the app is offline.
- [`Clients`](/en-US/docs/Web/API/Clients)
  - : An interface used to provide access to the documents that are controlled by the service worker.
- [`FetchEvent`](/en-US/docs/Web/API/FetchEvent)
  - : An event, dispatched in the service worker with every HTTP request made by the client PWA. The event can be used to either send the request to the server as normal and save the response for future use, or intercept the request and immediately respond with a response cached previously.

### Background operation

The following APIs can be used by a service worker to perform tasks in the background, even when your app is not running:

- [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API)
  - : A way to defer tasks to run in a service worker once there is a stable network connection.
- [Web Periodic Background Synchronization API](/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : A way to register tasks to be run in a service worker at periodic intervals with network connectivity.
- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
  - : A method for a service worker to manage downloads that may take a significant amount of time, such as video or audio files.

## Other web APIs

- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
  - : A client-side storage API for significant amounts of structured data, including files.
- [Badging API](/en-US/docs/Web/API/Badging_API)
  - : A method of setting a badge on the application icon, providing a low-distraction notification.
- [Notifications API](/en-US/docs/Web/API/Notifications_API)
  - : A way to send notifications that are displayed at the operating system level.
- [Web Share API](/en-US/docs/Web/API/Web_Share_API)
  - : A mechanism for sharing text, links, files, and other content to other apps selected by the user on their device.
- [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API)
  - : An API for PWAs installed on desktop operating systems that enables hiding the default window title bar, enabling displaying the app over the full surface area of the app window.
