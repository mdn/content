---
title: What is a progressive web app?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
---

A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app.

_Platform-specific apps_ are developed for a specific operating system and/or class of device, like an iOS or Android app, generally using an {{Glossary("SDK")}} provided by the platform vendor. They are usually more powerful and more seamlessly integrated into a device than websites, but typically have to be implemented independently for every platform, meaning you have to maintain multiple codebases. Also, they can often only be distributed through an app store.

Conversely, websites can run on multiple platforms from a single codebase, and, of course, can be distributed using the web. However, websites have historically been much more limited in what they can accomplish, and have only been accessible through the browser, rather than as first-class apps.

The promise of a PWA is to offer the best of both worlds: an app maintained as a single codebase that has the power and seamless integration of a platform-specific app app.

## Features of a progressive web app

Technically, a PWA is a website, but it's distinguished by the following features:

- [**Installation**](/en-US/docs/Web/Progressive_web_apps/Guides/Installation): a PWA can be installed on the device, like a platform-specific app. This means:

- The PWA can be installed from platform's app store or installed directly from the web.
- The PWA can be installed like a platform-specific app, and can customize the install process.
- Once installed, the PWA gets an app icon on the device, alongside platform-specific apps.
- Once installed, the PWA can be launched as a standalone app, rather than a website in a browser.

- [**Offline and background operation**](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): a typical website is only active while the page is loaded in the browser. A PWA can:
  - work while the device does not have network connectivity
  - update content in the background
  - respond to push messages from the server
  - display notifications using the OS notificiations system

## Platform-specific apps

We use the term _platform-specific app_ to refer to apps that are developed for a specific operating system and/or class of device, like an iOS or Android app. Especially on mobile devices, the third-party app ecosystem is an essential part of a platform's offering, enabling developers to add compelling new features to a platform.

Users expect to be able to discover apps in a platform's app store and install them: once installed, they are easy to launch, and can be expected to function as well as possible without a network connection. They are also expected to maintain state from one session to the next, and even update their state in the background. The SDKs offered by platform vendors enable apps to access powerful platform features like device hardware and the file system. All told, apps seem to users like persistent features of the device.

## Websites

By contrast websites, at least traditionally, are _visited_ rather than installed: access to them is mediated through another app (the browser) and the user has to find the website every time they want to use it. Websites, at least traditionally, expect to have network connectivity in order to function properly, and usually don't maintain a lot of rich state from one session to the next. Finally, web APIs are traditionally less powerful than platform-specific APIs, especially with respect to device features.

But websites also have some advantages over platform-specific apps. You can develop a website and publish it without having to sign up to an app store. Users can find your website through web search engines. Your website can run on multiple operating systems and device types from a single codebase.

---

MS docs:

## PWA benefits

- native-like experience:

  - app icon
  - laucnh on sign in
  - lanch on content click
  - add to app store

- advanced capabilities:

  - offline
  - push
  - background updates
  - HW features

- web advantages

  - search engones
  - share with a link
  - responsive
  - web APIs
  - HTTPS

- low dev cost: 1 codebase

## Cross-device compat

- scales on differentr systems

## Bridging the gap between web and native

- things you can do with Web APIs

## MS Store

---

progressive enhancement/responsiveness
