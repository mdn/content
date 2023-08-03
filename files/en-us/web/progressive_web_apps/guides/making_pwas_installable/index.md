---
title: Making PWAs installable
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
page-type: guide
---

{{PWASidebar}}

One of the defining aspects of a PWA is that it can be installed on the device, and then appears to users as a platform-specific app, a permanent feature of their device which they can launch directly from the operating system like any other app.

We can summarize this as follows:

- The PWA can be installed from the platform's app store or installed directly from the web.
- The PWA can be installed like a platform-specific app, and can customize the install process.
- Once installed, the PWA gets an app icon on the device, alongside platform-specific apps.
- Once installed, the PWA can be launched as a standalone app, rather than a website in a browser.

We'll discuss each of these features in this guide. First, though, we'll discuss the requirements that a web app must meet for it to be installable.

## Installability

For a web app to be installable, it needs to meet some technical requirements. We can consider these the minimum requirements for a web app to be a PWA.

### The web app manifest

A web app manifest is a JSON file that tells the browser how the PWA should appear and behave on the device. For a web app to be a PWA it must be installable, and for it to be installable it must include a manifest.

The manifest is included using a {{HTMLElement("link")}} element in the app's HTML:

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="manifest" href="manifest.json" />
    <!-- ... -->
  </head>
  <body></body>
</html>
```

If the PWA has more than one page, every page must reference the manifest in this way.

The manifest contains a single JSON object containing a collection of members, each of which defines some aspect of the PWA's appearance or behavior. Here's a rather minimal manifest, containing just two members: `"name"` and `"icons"`.

```json
{
  "name": "My PWA",
  "icons": [
    {
      "src": "icons/512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

#### Required manifest members

Chromium-based browsers, including Google Chrome, Samsung Internet, and Microsoft Edge, require that the manifest includes the following members:

- [`name`](/en-US/docs/Web/Manifest/name)
- [`icons`](/en-US/docs/Web/Manifest/icons)
- [`start_url`](/en-US/docs/Web/Manifest/start_url)
- [`display`](/en-US/docs/Web/Manifest/display) and/or [`display_override`](/en-US/docs/Web/Manifest/display_override)

For a full description of every member, see the [web app manifest reference documentation](/en-US/docs/Web/Manifest).

### Secure context

For a web app to be installable, it must be served in a [secure context](/en-US/docs/Web/Progressive_web_apps). This usually means that it must be served over HTTPS. Local resources, such as localhost, `127.0.0.1` and `file://` are also considered secure.

### Service worker

For a web app to be installable, it must include a [service worker](/en-US/docs/Web/API/Service_Worker_API) with a [`fetch` event handler](/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) that provides a basic offline experience.

## Installation from an app store

Users expect to find apps in the app store for their platform, like the Google Play Store or the Apple Store.

If your app meets the installability prerequisites, you can package it and distribute it through app stores. The process is specific to each app store:

- [How to publish a PWA to the Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [How to publish a PWA to the Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [How to publish a PWA to the Meta Quest Store](https://developer.oculus.com/documentation/web/pwa-submit-app/)

The [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) is a tool to simplify the process of packaging and publishing a PWA for various app stores. It supports the Google Play Store, Microsoft Store, Meta Quest Store, and iOS App Store.

If you have added your app to the app store, users can install it from there, just like a platform-specific app.

## Installation from the web

When the user visits a web page that the browser has determined is installable, then the user will be offered the chance to install it. This means you can distribute your PWA as a website, making it discoverable through web search, and also distribute it in app stores, so users can find it there.

This is a great example of the way PWAs can offer you the best of both worlds. It's also a good example of how progressive enhancement works with PWAs: if a user encounters your PWA on the web, using a browser that can't install it, they can use it just like a normal website.

The UI for installing a PWA from the web varies from one browser to another, and from one platform to another. For example, a browser might include an "Install" icon in the URL bar when the user navigates to the page:

![Chrome URL bar, showing PWA install icon](pwa-install.png)

When the user selects the icon, the browser displays a prompt asking if they want to install the PWA, and if they accept, the PWA is installed.

The prompt displays the name and icon for the PWA, taken from the [`name`](/en-US/docs/Web/Manifest/name) and [`icons`](/en-US/docs/Web/Manifest/icons) manifest members.

### Browser support

Support for installing PWAs from the web varies by browser and by platform.

On desktop:

- Firefox and Safari do not support installing PWAs on any desktop operating systems.
- Chrome and Edge support installing PWAs on Linux, Windows, macOS, and Chromebooks.

On mobile:

- Firefox, Chrome, Edge, Opera, and Samsung Internet Browser all support installing PWAs on Android.
- Only Safari is allowed to install PWAs on iOS.

### Triggering the install prompt

A PWA can provide its own in-page UI for the user to open the install prompt, instead of relying on the UI provided by the browser by default. This enables a PWA to provide some context and a reason for the user to install the PWA, and can help make the install user flow easier to discover.

This technique relies on the [`beforeinstallprompt`](/en-US/docs/Web/API/Window/beforeinstallprompt_event) event, which is fired on the global [`Window`](/en-US/docs/Web/API/Window) object as soon as the browser has determined that the PWA is installable. This event has a [`prompt()`](/en-US/docs/Web/API/BeforeInstallPromptEvent/prompt) method that shows the install prompt. So a PWA can:

- add its own "Install" button
- listen for the `beforeinstallprompt` event
- cancel the event's default behavior by calling [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault)
- in the event handler for its own "Install" button, call [`prompt()`](/en-US/docs/Web/API/BeforeInstallPromptEvent/prompt).

### Customizing the installation prompt

By default, the install prompt contains the name and icon for the PWA. If you provide values for the [`description`](/en-US/docs/Web/Manifest/description) and [`screenshots`](/en-US/docs/Web/Manifest/screenshots) manifest members, then, on Android only, these values will be shown in the install prompt, giving the user extra context and motivation to install the PWA.

The screenshot below shows what the install prompt for the [PWAmp demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) looks like on Google Chrome, running on Android:

![Install prompt for PWAmp on Android](pwamp-install-prompt-android.png)

## Launching the app

Once the PWA is installed, its icon is shown on the device alongside any other apps that the user has installed, and clicking the icon launches the app.

You can use the [`display`](/en-US/docs/Web/Manifest/display) manifest member to control the _display mode_: that is, how the PWA appears when it is launched. In particular:

- `"standalone"` indicates that the PWA should look and feel like a platform-specific application, with no browser UI elements
- `"browser"` indicates that the PWA should be opened as a new browser tab or window, just like a normal website.

If the browser does not support a given display mode, `display` will fall back to a supported display mode according to a predefined sequence. The [`display_override`](/en-US/docs/Web/Manifest/display_override) enables you to redefine the fallback sequence.
