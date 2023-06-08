---
title: Progressive web apps (PWAs)
slug: Web/Progressive_web_apps
---

{{PWASidebar}}

A **progressive web app** (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

Like a website, a PWA can run on multiple platforms and devices from a single codebase. Like a platform-specific app, it can be installed on the device, can operate while offline and in the background, and can integrate with the device and with other installed apps.

## Guides

These guides give conceptual explanations of different aspects of PWAs. They're intended to help you understand what kinds of things are possible with PWAs, and to provide enough pointers to help you understand how to achieve them.

- [What is a progressive web app?](/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : An introduction to PWAs, comparing them with traditional websites and with platform-specific apps, and outlining their main features.
- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : One of the defining aspects of a PWA is that it can be installed on the device, and then appears to users as a platform-specific app, a permanent feature of their device which they can launch directly from the operating system like any other app. In this guide we'll explore what "installable" means, what a PWA needs to provide for it to be installable, and how you can customize the install experience.
- [Offline and background operation](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : In this guide, we'll introduce a set of technologies that enable a PWA to provide a good user experience even when the device has intermittent network connectivity and to perform operations in the background, even when the main app is not running.
- [Best practices for PWAs](/en-US/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWAs should adapt to different browsers and devices, be accessible, have good performance, and integrate well with the operating system. This guide provides a list of best practices to help you make sure your PWA is as good as it can be.

## How to

These guides give concrete detailed instructions for how to implement specific PWA features.

- [Create a standalone app](/en-US/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : Describes how to specify that a PWA should be launched in its own dedicated window when it is launched, rather than a browser tab.
- [Customize your app's colors](/en-US/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : Describes how to set background and theme colors for a PWA.
- [Display badges](/en-US/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : Describes how to display a badge on the PWA's icon: for example to let the user know that they have received new messages.
- [Expose common app actions as shortcuts](/en-US/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : Describes how to expose common actions for a PWA that can be launched from the operating system's app shortcut menu.
- [Share data between apps](/en-US/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : Describes how PWAs can share data with each other by using the operating system's app sharing mechanism.
- [Trigger installation from your PWA](/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : Describes how developers can provide their own UI to invite users to install their PWA.
- [Associate files with your PWA](/en-US/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : Describes how you can create an association between file types and your PWA, so that when the user clicks on the file, your PWA is launched to handle it.

## Reference

Reference documentation for the web technologies you will use to build a PWA.

### Web app manifest

- [Web app manifest members](/en-US/docs/Web/Manifest)
  - : Developers can use web app manifest members to describe a PWA, customize its appearance, and more deeply integrate it into the operating system.

### Service Worker APIs

#### Communication with the app

The following APIs can be used by a service worker to communicate with its associated client PWA:

- [`Client.postMessage()`](/en-US/docs/Web/API/Client/postMessage)
  - : Allows a service worker to send a message to its client PWA.
- [Broadcast Channel API](/en-US/docs/Web/API/Broadcast_Channel_API)
  - : Allows a service worker and its client PWA to establish a basic two-way communication channel.

#### Offline operation

The following APIs can be used by a service worker to make your app work offline:

- [`Cache`](/en-US/docs/Web/API/Cache)
  - : A persistent storage mechanism for HTTP responses used to store assets that can be reused when the app is offline.
- [`Clients`](/en-US/docs/Web/API/Clients)
  - : An interface used to provide access to the documents that are controlled by the service worker.
- [`FetchEvent`](/en-US/docs/Web/API/FetchEvent)
  - : An event, dispatched in the service worker with every HTTP request made by the client PWA. The event can be used to either send the request to the server as normal and save the response for future use, or intercept the request and immediately respond with a response cached previously.

#### Background operation

The following APIs can be used by a service worker to perform tasks in the background, even when your app is not running:

- [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API)
  - : A way to defer tasks to run in a service worker once there is a stable network connection.
- [Web Periodic Background Synchronization API](/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : A way to register tasks to be run in a service worker at periodic intervals with network connectivity.
- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API)
  - : A method for a service worker to manage downloads that may take a significant amount of time, such as video or audio files.

### Other web APIs

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

## See also

- [Progressive web apps](https://web.dev/progressive-web-apps/) on web.dev
- [Learn PWA](https://web.dev/learn/pwa/) on web.dev
- [Progressive web apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/) on learn.microsoft.com (January 24, 2023)
