---
title: Progressive Web Apps reference
slug: Web/Progressive_web_apps/Reference
page-type: landing-page
---

This reference describes the [web app manifests](/en-US/docs/Web/Manifest) members, [Service Worker APIs](/en-US/docs/Web/API/Service_Worker_API), and other web APIs that [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) can use to offer a great user experience.

## Web app manifest members

### Identification

The following manifest members are used to name and describe your PWA:

- [`name`](/en-US/docs/Web/Manifest/name)
  - : The name of the web application as it is usually displayed to the user.
- [`short_name`](/en-US/docs/Web/Manifest/short_name)
  - : The name of the web application displayed to the user if there is not enough space to display the `name` member.
- [`description`](/en-US/docs/Web/Manifest/description)
  - : An explanation of what the application does.
- [`id`](/en-US/docs/Web/Manifest/id)
  - : A unique identifier for the web application.
- [`categories`](/en-US/docs/Web/Manifest/categories)
  - : Names of categories that the application belongs to.

### Appearance

The following manifest members are used to control the appearance of your app:

- [`icons`](/en-US/docs/Web/Manifest/icons)
  - : Image files that can serve as application icons for different contexts.
- [`background_color`](/en-US/docs/Web/Manifest/background_color)
  - : The placeholder background color for the application page to display before its stylesheet is loaded.
- [`theme_color`](/en-US/docs/Web/Manifest/theme_color)
  - : The default theme color for the application, which sometimes affects how the operating system displays the app.
- [`display`](/en-US/docs/Web/Manifest/display)
  - : The developers' preferred display mode for the website.
- [`display_override`](/en-US/docs/Web/Manifest/display_override)
  - : A sequence of display modes that the browser will consider before using the `display` member.
- [`start_url`](/en-US/docs/Web/Manifest/start_url)
  - : The preferred URL that should be loaded when the user launches the web application.
- [`screenshots`](/en-US/docs/Web/Manifest/screenshots)
  - : Screenshots intended to showcase the application in PWA stores.
- [`orientation`](/en-US/docs/Web/Manifest/orientation)
  - : The default orientation for the app's top-level {{Glossary("Browsing context", "browsing contexts")}}.

### OS integration

The following manifest members can be used to more deeply integrate your PWA in the operating system it's installed on:

- [`file_handlers`](/en-US/docs/Web/Manifest/file_handlers)
  - : File types that this web app is associated with.
- [`protocol_handlers`](/en-US/docs/Web/Manifest/protocol_handlers)
  - : Protocols which this web app handles.
- [`share_target`](/en-US/docs/Web/Manifest/share_target)
  - : Used to register the app as a share target in the system's share dialog.
- [`shortcuts`](/en-US/docs/Web/Manifest/shortcuts)
  - : Links to key tasks or pages within the web app that can be displayed by the operating system when a user engages with the web app's icon.
- [`launch_handler`](/en-US/docs/Web/Manifest/launch_handler)
  - : The context in which the app should be loaded when launched.

### Other

- [`scope`](/en-US/docs/Web/Manifest/scope)
  - : The navigation scope of this web application, which restricts what web pages can be viewed while the manifest is applied.
- [`related_applications`](/en-US/docs/Web/Manifest/related_applications)
  - : Alternative applications that provide similar or equivalent functionality to this app. Developers can specify that these alternative applications are preferred by using the `prefer_related_applications` member.
- [`prefer_related_applications`](/en-US/docs/Web/Manifest/prefer_related_applications)
  - : Whether the applications listed in the `related_applications` member should be preferred over this app.
- [`serviceworker`](/en-US/docs/Web/Manifest/serviceworker)
  - : The service worker to use to run a web-based payment app on a merchant website.

## Service Worker APIs

### Communication with the app

The following APIs can be used to communicate between the service worker and the client app:

- [`Client.postMessage()`](/en-US/docs/Web/API/Client/postMessage)
  - : Allows a service worker to send a message to its client app.
- [Broadcast Channel API](/en-US/docs/Web/API/Broadcast_Channel_API)
  - : Allows a service worker and its client app to establish a basic two-way communication channel.

### Offline operation

The following APIs can be used by a service worker to make your app work offline:

- [`Cache`](/en-US/docs/Web/API/Cache)
  - : A persistent storage mechanism for HTTP responses used to store assets that can be reused when the app is offline.
- [`Clients`](/en-US/docs/Web/API/Clients)
  - : An interface used to provide access to the documents that are controlled by the service worker.
- [`FetchEvent`](/en-US/docs/Web/API/FetchEvent)
  - : An event, dispatched in the service worker with every HTTP request made by a client, that can be used to cache a response or respond with another resource.

### Background operation

The following APIs can be used by a service worker to perform tasks in the background, even when your app is not running:

- [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API)
  - : A way to defer tasks so that they can be run in a service worker once the user has a stable network connection.
- [Web Periodic Background Synchronization API](/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : A way to register tasks to be run in a service worker at periodic intervals with network connectivity.
- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
  - : A method for a service worker to manage downloads that may take a significant amount of time such as video or audio files.

## Other web APIs

- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
  - : A client-side storage API for significant amounts of structured data, including files.
- [Badging API](/en-US/docs/Web/API/Badging_API)
  - : A method of setting a badge on the application icon, to act as a low distraction notification.
- [Notifications API](/en-US/docs/Web/API/Notifications_API)
  - : A way to send notifications that are displayed at the operating system level.
- [Web Share API](/en-US/docs/Web/API/Web_Share_API)
  - : A mechanism for sharing text, links, files, and other content to other apps selected by the user on their device.
- [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API)
  - : An API for PWAs installed on desktop operating systems to hide the default window title bar and display their own content over the full surface area of the app window instead.
