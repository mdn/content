---
title: Progressive Web Apps reference
short-title: Reference
slug: Web/Progressive_web_apps/Reference
page-type: landing-page
---

This reference describes the [web app manifest](/en-US/docs/Web/Manifest) members, [Service Worker APIs](/en-US/docs/Web/API/Service_Worker_API), and other web APIs that [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) can use to offer a great user experience.

## Web app manifest members

### Required for installation

The following manifest members are required for browsers to consider a web app installable:

- [`name`](/en-US/docs/Web/Manifest/name)
  - : The name of the web application as it is usually displayed to the user.
- [`icons`](/en-US/docs/Web/Manifest/icons)
  - : Image files that can serve as application icons for different contexts.
- [`start_url`](/en-US/docs/Web/Manifest/start_url)
  - : The preferred URL that should be loaded when the user launches the web application.
- [`display`](/en-US/docs/Web/Manifest/display) or [`display_override`](/en-US/docs/Web/Manifest/display_override)
  - : The developers' preferred display modes for the browser UI.

All other members listed below are optional but can help greatly improve the user experience of a PWA.

### Identification

The following manifest members are useful to more extensively describe your PWA:

- [`short_name`](/en-US/docs/Web/Manifest/short_name)
  - : The name of the web application displayed to the user if there is not enough space to display the `name` member.
- [`description`](/en-US/docs/Web/Manifest/description)
  - : An explanation of what the application does.
- [`categories`](/en-US/docs/Web/Manifest/categories)
  - : Names of categories the application belongs to, which can be used by PWA app stores.

### Appearance

The following manifest members are used to further customize the appearance of your app:

- [`background_color`](/en-US/docs/Web/Manifest/background_color)
  - : The placeholder background color for the application page to display before its stylesheet is loaded.
- [`theme_color`](/en-US/docs/Web/Manifest/theme_color)
  - : The default theme color for the application, which sometimes affects how the operating system displays the app.
- [`screenshots`](/en-US/docs/Web/Manifest/screenshots)
  - : The URLs and descriptors for the screenshots used to showcase the application in PWA stores.
- [`orientation`](/en-US/docs/Web/Manifest/orientation)
  - : The default orientation for the app's top-level {{Glossary("Browsing context", "browsing contexts")}}.

### OS integration

The following manifest members can be used to more deeply integrate your PWA in the operating system it's installed on:

- [`file_handlers`](/en-US/docs/Web/Manifest/file_handlers)
  - : File types this web app is associated with.
- [`protocol_handlers`](/en-US/docs/Web/Manifest/protocol_handlers)
  - : URL protocols this web app handles and the URLs for each protocol.
- [`share_target`](/en-US/docs/Web/Manifest/share_target)
  - : Registers the app as a share target, defining the actions and parameters for the OS's share dialog.
- [`shortcuts`](/en-US/docs/Web/Manifest/shortcuts)
  - : Links to key tasks or pages within the web app the OS can display when a user engages with the web app's icon.
- [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler)
  - : The context in which the app should be loaded when launched or relaunched.

### Other

- [`scope`](/en-US/docs/Web/Manifest/scope)
  - : The navigation scope of this web application, which defines the content viewed with the manifest applied versus out-of-scope normal web page content.
- [`related_applications`](/en-US/docs/Web/Manifest/related_applications)
  - : Alternative device-native applications that provide similar or equivalent functionality to this app. Used in conjunction with the `prefer_related_applications` member if the alternative applications should be preferred over the PWA.
- [`prefer_related_applications`](/en-US/docs/Web/Manifest/prefer_related_applications)
  - : Whether the applications listed in the `related_applications` member should be preferred over this app.

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
