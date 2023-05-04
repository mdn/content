---
title: What is a progressive web app?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
---

{{PWASidebar}}

A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

## Platform-specific apps

_Platform-specific apps_ are developed for a specific operating system and/or class of device, like an iOS or Android device, generally using an {{Glossary("SDK")}} provided by the platform vendor. They are usually distributed using the vendor's app store, where the user can find and install them, and they subsequently seem to the user like a permanent extra feature of their device, expanding its capabilities in some way.

The benefits of platform-specific apps include:

- **Easy for users to access**: They get their own icon on the device, making it easy for users to find and open them.
- **Offline and background operation**: They are able to operate when the user is not interacting with them and when the device is offline. This, for example, enables a chat app to receive messages when it is not open, and display a notification to the user. It also enables a news app to update in the background so it can show fresh content even if the device is offline.
- **Dedicated UI**: They get to implement their own distinctive, immersive UI.
- **OS integration**: They can be integrated into the host OS: for example, a messaging app can register as a share target, enabling users to select an image in the photo app and send it using the messaging app. They can also access device features such as the camera, GPS or accelerometer.
- **App store integration**: They are distributed using the app store, giving users a single place to find them and a consistent way to decide whether they want to install them.

## Traditional websites

Traditionally, websites are less like "something the user has" and more like "somewhere the user visits". Typically, a website: does not have a presence on the user's device when the user is not accessing it, can only be accessed by the user opening the browser and navigating to the site, and is highly dependent on network connectivity.

However, websites have some benefits over platform-specific apps, including:

- **Single codebase**: Because the web is inherently cross-platform, a website can run on different operating systems and device classes from a single codebase.
- **Distribution via the web**: The web is a great distribution platform. Websites are indexed by search engines, and can be shared and accessed just using URLs. A website can be distributed with no need to sign up to any vendor's app store.

## Progressive web apps

Progressive web apps combine the best features of traditional websites and platform-specific apps.

PWAs have the benefits of websites, including:

- PWAs are developed using standard web platform technologies, so they can run on multiple operating systems and device classes from a single codebase.
- PWAs can be accessed directly from the web.

PWAs also have many of the benefits of platform-specific apps, including:

- [**PWAs can be installed on the device**](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). This means:

  - The PWA can be installed from platform's app store or installed directly from the web.
  - The PWA can be installed like a platform-specific app, and can customize the install process.
  - Once installed, the PWA gets an app icon on the device, alongside platform-specific apps.
  - Once installed, the PWA can be launched as a standalone app, rather than a website in a browser.

- [**PWAs can operate in the background and offline**](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): a typical website is only active while the page is loaded in the browser. A PWA can:

  - Work while the device does not have network connectivity.
  - Update content in the background.
  - Respond to push messages from the server.
  - Display notifications using the OS notificiations system.

- PWAs can [use the whole screen](Web/Progressive_web_apps/How_to/Create_a_standalone_app), rather than running in the browser UI.
- PWAs can be integrated into the device, registering as share targets and sources, and accessing device features.
- PWAs can be distributed in app stores, as well as openly via the web.

### Technical features of PWAs

The fundamental technical features of a PWA are:

- It has a [web app manifest](Web/Manifest) file, which at a minimum provides information that the browser needs in order to install the PWA, such as the app name and icon.
- It has a [service worker](Web/API/Service_Worker_API), which at a minimum provides a basic offline experience.

#### Web app manifest

A PWA must have a web app manifest, and the [manifest must include enough information for the browser to install the PWA](/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

The manifest can define many other aspects of the PWA's appearance, such as [theme](Web/Manifest/theme_color) and [background](Web/Manifest/background_color) colors, and its behavior, including its ability [to act as a share target](Web/Manifest/share_target) for data from other apps or [to handle particular file types](Web/Manifest/file_handlers).

#### Service worker

A PWA must have a service worker, and the service worker must implement at least a minimal offline experience.

Service workers encourage an architecture in which the app's pages - that is, the traditional part of a website - implement the user interface, and the service worker implements a backend which can support [offline and background operation](Web/Progressive_web_apps/Guides/Offline_and_background_operation), making the PWA behave more like an app than a website. This is because service workers can be started by the runtime when they are needed (for example, to handle a push notification).

### Progressive enhancement

While {{Glossary("Progressive Enhancement", "progressive enhancement")}} is a desirable attribute for most websites, it is especially important for PWAs, which expect to run on a wide range of devices and often use advanced Web APIs which may not be supported by all browsers.

One basic component of this is that if the user visits your PWA on the web, and the browser/device can install it, then the user will be prompted to install it. If the browser/device can't install your PWA, then the user will be able to interact with it like a normal website.

PWAs should perform feature detection for advanced APIs, and provide an acceptable fallback experience. For example, the [Background Sync API](Web/API/Background_Synchronization_API) enables a PWA to ask a service worker to make a network request as soon as the device has connectivity. A classic use case for this is messaging. Suppose the user composes a message, but when the user tries to send the message, the device is offline. The Background Sync API enables the device to send the message in the background once the device is connected. On a device which does not support Background Sync, the app should let the user know that the message could not be sent, giving them the chance to try again later.
