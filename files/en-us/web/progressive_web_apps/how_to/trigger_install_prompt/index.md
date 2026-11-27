---
title: Trigger installation from your app UI
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
page-type: how-to
sidebar: pwasidebar
---

By default, [installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) web apps can be installed as PWAs using the [browser-provided chrome UI](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_browser_chrome).

In addition, you can implement your own in-app install UI, which will trigger the same install prompt as the browser chrome UI. The benefits of this are:

- You can provide more context about the app, explaining to the user why they might want to install it as a PWA.
- An in-app install UI is more discoverable and intuitive than the default browser chrome UI.

This guide explains how to create your own in-app PWA install button using three different mechanisms:

- {{htmlelement("install")}} element
  - : The easiest method, requiring no JavaScript for basic installation. Renders a browser-provided install button.
- {{domxref("Navigator.install()")}} method
  - : Can be used if you want to opt for a more customized install UI.
- {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event
  - : An older mechanism that is less intuitive than `install()` or `<install>`, and should only be used as a fallback for non-supporting browsers.

## Using the `<install>` element

This section shows the code required to install a PWA using the {{htmlelement("install")}} element. For complete demos, see:

- [Install the current app with `<install>`](https://mdn.github.io/pwa-examples/install-demos/install-element-app/) ([source code](https://github.com/mdn/pwa-examples/tree/main/install-demos/install-element-app))
- [Install multiple apps from a catalog page with `<install>`](https://mdn.github.io/pwa-examples/install-demos/install-element-catalog/) ([source code](https://github.com/mdn/pwa-examples/tree/main/install-demos/install-element-catalog))

Installing an app requires a manifest ID, which represents the app's identity. The examples in this section assume that the app manifests specify an [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field. This is best practice: see [Always include an `id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id#always_include_an_id).

### Install the current app

If you just want to allow the user to install the current site they are looking at as a PWA, you can provide an `<install>` element with no attributes, and the browser will find the information it needs from app's manifest via its [`<link rel="manifest">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/manifest) element.

```html
<install></install>
```

### Install multiple apps

You can specify the manifest URL of the app to install inside the `<install>` element `manifest` attribute. This can be a same-origin or cross-origin URL. You can include multiple `<install>` elements in the same document to create an app catalog page:

```html
<p>
  Install app1:
  <install manifest="https://example.com/app1/manifest.json"></install>
</p>
<p>
  Install app2:
  <install manifest="https://example2.com/app2/manifest.json"></install>
</p>
<p>
  Install app3:
  <install manifest="https://example3.com/app3/manifest.json"></install>
</p>
```

### Listening for the installation result

The `<install>` element's DOM interface, {{domxref("HTMLInstallElement")}}, has an `installresult` event that fires when the install attempt is complete. This can be used to report the install result (using the event object's {{domxref("InstallResultEvent.result", "result")}} property) and do any other required cleanup.

```js
installElem.addEventListener("installresult", (e) => {
  console.log(`Install result: ${e.result}`);
  // success, aborted, or invalid_data
});
```

## Using the `install()` method

This section shows the code required to install a PWA using the {{domxref("Navigator.install", "install()")}} method. For complete demos, see:

- [Install the current app with `install()`](https://mdn.github.io/pwa-examples/install-demos/install-method-app/) ([source code](https://github.com/mdn/pwa-examples/tree/main/install-demos/install-method-app))
- [Install multiple apps from a catalog page with `install()`](https://mdn.github.io/pwa-examples/install-demos/install-method-catalog/) ([source code](https://github.com/mdn/pwa-examples/tree/main/install-demos/install-method-catalog))

Installing an app requires a manifest ID, which represents the app's identity. The examples in this section assume that the app manifests specify an [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field. This is best practice: see [Always include an `id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id#always_include_an_id).

### Provide an install button

First, add some UI to the app indicating that the user can install it. The advantage of using the `install()` method is that you customize the UI however you want.

For example:

```html
<button id="install">Install app</button>
```

### Install the current app

If you just want to allow the user to install the current site they are looking at as a PWA, you can call the `install()` method when the install button is clicked with no arguments, and the browser will find the information it needs from app's manifest via its [`<link rel="manifest">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/manifest) element. The `install()` method returns a promise that can be used to respond to installation success or failure.

```js
const installBtn = document.querySelector("#install");

installBtn.addEventListener("click", () => {
  navigator
    .install()
    .then(() => {
      console.log("Installation successful");
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
    });
});
```

### Install multiple apps

You can specify the manifest URL of the app to install inside the `install()` method's `manifest` argument. This can be a same-origin or cross-origin URL. You can include multiple install buttons in the same document that invoke `install()` on click with different `manifest` arguments to create an app catalog page:

```html
<p>
  <button id="install1">Install app1</button>
</p>
<p>
  <button id="install2">Install app1</button>
</p>
<p>
  <button id="install3">Install app1</button>
</p>
```

```js
const installBtn1 = document.querySelector("install1");
const installBtn2 = document.querySelector("install2");
const installBtn3 = document.querySelector("install3");

installBtn1.addEventListener("click", () => {
  navigator.install({
    manifest: "https://example.com/app1/manifest.json",
  });
});

installBtn2.addEventListener("click", () => {
  navigator.install({
    manifest: "https://example2.com/app2/manifest.json",
  });
});

installBtn3.addEventListener("click", () => {
  navigator.install({
    manifest: "https://example3.com/app3/manifest.json",
  });
});
```

## Using the `beforeinstallprompt` event

This section shows how to install a PWA using the {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event and the {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} method.

### Provide an install button

First, add some UI to the app indicating that the user can install it. For example:

```html
<button id="install" hidden>Install</button>
```

We're setting the button's [`hidden`](/en-US/docs/Web/HTML/Reference/Global_attributes/hidden) attribute, because if the user visits the app with a browser that can't install it, we don't want the install UI to be visible. Next, we'll see how to make the button visible only on browsers that support installing PWAs locally.

### Listening for beforeinstallprompt

As soon as the browser has determined that it can install the app, it fires the `beforeinstallprompt` event in the global {{domxref("Window")}} scope.

In our main app code, we will listen for this event:

```js
let installPrompt = null;
const installBtn = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installBtn.removeAttribute("hidden");
});
```

The event handler here does three things:

- Call {{domxref("Event.preventDefault()","preventDefault()")}} on the event. This prevents the browser from displaying its own install UI.
- Take a reference to the event object that's passed into the handler. This is an instance of {{domxref("BeforeInstallPromptEvent")}}, and is what will enable us to prompt the user to install the app.
- Reveal our in-app install UI by removing the `hidden` attribute on the button.

Note that the event will not fire if:

- The PWA is already installed.
- The app does not pass the [PWA installation criteria](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability).
- The PWA is not installable on the current device (for example, because of a lack of permissions).

### Triggering the install prompt

Next, we need to add a click handler to our in-app install button:

```js
installBtn.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installBtn.setAttribute("hidden", "");
}
```

The `installPrompt` variable was initialized with the `BeforeInstallPromptEvent` object in our `beforeinstallprompt` event handler. If `installPrompt` hasn't been initialized, for any reason, we do nothing.

Otherwise we call its {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}} method. This shows the install prompt, and returns a {{jsxref("Promise")}} that resolves with an object indicating whether the app was installed or not. In particular, its `outcome` property is `"accepted"` if the user chose to install the app, or `"dismissed"` if they dismissed the prompt.

Either way, we must reset our state after calling `prompt()`, because we can only call it once for each `BeforeInstallPromptEvent` instance. So we reset our `installPrompt` variable and hide the install button again.

## Responding if the app is already installed

Depending on the browser and platform, the browser may still offer its own UI to install the app. This means that the app may still be installed without going through our in-app install UI. If this happens, we want to disable the in-app install UI, or we will show it in an app that's already been installed.

To do this we can listen to the {{domxref("Window.appinstalled_event", "appinstalled")}} event, which fires in the global {{domxref("Window")}} scope when the app has been installed:

```js
window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installBtn.setAttribute("hidden", "");
}
```

## Responding to platform-specific apps being installed

If you have a platform-specific version of the app as well as a web app, you may wish to personalize the web app experience depending on whether the platform-specific app is already installed. You might not want to invite users to install the PWA if they already have the platform-specific app installed, and/or you might want to invite them to head over to the platform-specific app to view content.

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

This method could also be used to suppress the browser's install UI based on the availability of a platform-specific app. For example, it could be combined with `beforeinstallprompt`:

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
- {{htmlelement("install")}} element
- {{domxref("Navigator.install()")}} method
- {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} event
