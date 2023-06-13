---
title: "Navigator: getInstalledRelatedApps() method"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.getInstalledRelatedApps
---

{{ ApiRef() }}{{SeeCompatTable}}

The **`getInstalledRelatedApps()`** method returns a promise that resolves with an array of objects representing any related native apps or [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) that the user has installed. This could be used for content personalization such as removing "install our app" banners from the web app if the native app is already installed.

> **Note:** This method must be invoked in a top-level [secure context](/en-US/docs/Web/Security/Secure_Contexts), that is, not embedded in an {{htmlelement("iframe")}}.

## Description

`getInstalledRelatedApps()` can be used to check for the installation of Universal Windows Platform (UWP) apps, Android apps and PWAs that are related to the web app calling this method.

To associate the invoking web app to the native app or PWA, two things must be done:

1. The invoking web app must be specified in the [`related_applications`](/en-US/docs/Web/Manifest/related_applications) member of its [manifest file](/en-US/docs/Web/Manifest).
2. The native app or PWA must have its relationship with the invoking app defined.

This is done in a different way depending on the type of app:

- An Android app does this via the [Digital Asset Links system](https://developers.google.com/digital-asset-links/v1/getting-started).
- A Windows UWP app does this via [URI Handlers](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/web-to-app-linking).
- A PWA does this via:
  - A self-defining entry inside its own `related_applications` manifest member in the case of a PWA checking if it is installed on the underlying platform.
  - An `assetlinks.json` file in its [`/.well-known/`](https://tools.ietf.org/html/rfc5785) directory in the case of an app outside the scope of the PWA checking whether it is installed.

See [Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/get-installed-related-apps/) for more details on how to handle each one of these cases.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that fulfills with an array of objects representing any installed related apps. Each object can contain the following properties:

- `id` {{optional_inline}}
  - : A string representing the ID used to represent the application on the specified platform. The exact form of the string will vary by platform.
- `platform`
  - : A string representing the [platform](https://github.com/w3c/manifest/wiki/Platforms) (ecosystem or operating system) the related app is associated with. This can be:
    - `"chrome_web_store"`: A [Google Chrome Web Store](https://chrome.google.com/webstore) app.
    - `"play"`: A [Google Play Store](https://play.google.com/) app.
    - `"chromeos_play"`: A [Chrome OS Play](https://support.google.com/googleplay/answer/7021273) app.
    - `"itunes"`: An [Apple App Store](https://www.apple.com/app-store/) app.
    - `"webapp"`: A [Progressive Web App](/en-US/docs/Web/Progressive_web_apps).
    - `"windows"`: A [Windows Store](https://www.microsoft.com/store/apps) app.
    - `"f-droid"`: An [F-Droid](https://f-droid.org/) app.
    - `"amazon"`: An [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011) app.
- `url` {{optional_inline}}
  - : A string representing the URL associated with the app. This is usually where you can read information about it and install it.
- `version` {{optional_inline}}
  - : A string representing the related app's version.

The related app information must have been previously specified in the [`related_applications`](/en-US/docs/Web/Manifest/related_applications) member of the invoking web app's [manifest file](/en-US/docs/Web/Manifest).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The method was not invoked in a top-level browsing context.

## Examples

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Dump all the returned related apps into a table in the console
console.table(relatedApps);

// Search for a specific installed native app
const nativeApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (nativeApp && doesVersionSendPushMessages(nativeApp.version)) {
  // There’s an installed native app that handles sending push messages.
  // No need to handle this via the web app.
  return;
}
```

> **Note:** In this example, `doesVersionSendPushMessages()` is a theoretical developer-defined function; it is not provided by the browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/get-installed-related-apps/)
