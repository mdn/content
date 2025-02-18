---
title: Trigger installation from your PWA
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
page-type: how-to
---

{{PWASidebar}}

> [!WARNING]
> The technique described here depends on the {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event, which is non-standard and currently only implemented in Chromium-based browsers.

By default, if the user visits your website, and the browser determines that the site is [installable as a PWA](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), then the browser will display some built-in UI — an icon in the URL bar, for example — to install the site. If the user clicks the icon, then the browser shows an install prompt containing, at a minimum, the app's [name](/en-US/docs/Web/Manifest/Reference/name) and [icon](/en-US/docs/Web/Manifest/Reference/icons). If the user agrees to install the app, then it will be installed.

However, you can implement your own in-app UI to ask the user if they want to install the app, which will trigger the install prompt. The benefits of this are:

- You can provide more context about the app, explaining to the user why they might want to install it as a PWA.
- An in-app install UI is likely to be easier for users to discover and understand than the browser's default UI.

## Adding an in-app install UI

First, add some UI to the app indicating that the user can install it. For example:

```html
<button id="install" hidden>Install</button>
```

We're setting the button's [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute, because if the user visits the app with a browser that can't install it, we don't want the install UI to be visible. Next, we'll see how to make the button visible only on browsers that support installing PWAs locally.

## Listening for beforeinstallprompt

As soon as the browser has determined that it can install the app, it fires the {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event in the global {{domxref("Window")}} scope.

In our main app code, we will listen for this event:

```js
// main.js

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

The event handler here does three things:

- Call {{domxref("Event.preventDefault()","preventDefault()")}} on the event. This prevents the browser from displaying its own install UI.
- Take a reference to the event object that's passed into the handler. This is an instance of {{domxref("BeforeInstallPromptEvent")}}, and is what will enable us to prompt the user to install the app.
- Reveal our in-app install UI by removing the `hidden` attribute on the button.

## Triggering the install prompt

Next, we need to add a click handler to our in-app install button:

```js
// main.js

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

The `installPrompt` variable was initialized with the `BeforeInstallPromptEvent` object in our `beforeinstallprompt` event handler. If `installPrompt` hasn't been initialized, for any reason, we do nothing.

Otherwise we call its {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} method. This shows the install prompt, and returns a {{jsxref("Promise")}} which resolves with an object indicating whether the app was installed or not. In particular, its `outcome` property is `"accepted"` if the user chose to install the app, or `"dismissed"` if they dismissed the prompt.

Either way, we must reset our state after calling `prompt()`, because we can only call it once for each `BeforeInstallPromptEvent` instance. So we reset our `installPrompt` variable and hide the install button again.

## Responding to app install

Depending on the browser and platform, the browser may still offer its own UI to install the app. This means that the app may still be installed without going through our in-app install UI. If this happens, we want to disable the in-app install UI, or we will show it in an app that's already been installed.

To do this we can listen to the {{domxref("Window.appinstalled_event", "appinstalled")}} event, which fires in the global {{domxref("Window")}} scope when the app has been installed:

```js
// main.js

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

## Responding to platform-specific apps being installed

One case not covered by the above examples is where you have a platform-specific version of the app as well as a web app, and you want to personalize the web app experience depending on whether the platform-specific app is already installed. You might not want to invite users to install the PWA if they already have the platform-specific app installed, and/or you might want to invite them to head over to the platform-specific app to view content.

This can be handled with the {{domxref("Navigator.getInstalledRelatedApps()")}} method, which allows you to detect installed related platform-specific apps (or PWAs) and respond appropriately.

For example:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Update UI as appropriate
}
```

This method could also be combined with `beforeinstallprompt` to suppress the browser's install UI based on the availability of a platform-specific app:

```js
window.addEventListener("beforeinstallprompt", async (event) => {
  const relatedApps = await navigator.getInstalledRelatedApps();

  // Search for a specific installed platform-specific app
  const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

  if (psApp) {
    event.preventDefault();
    // Update UI as appropriate
  }
});
```

## See also

- [Making PWAs installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) on web.dev (2021)
