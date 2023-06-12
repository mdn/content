---
title: "Navigator: getInstalledRelatedApps() method"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
page-type: web-api-instance-method
browser-compat: api.Navigator.getInstalledRelatedApps
---

{{ ApiRef() }}

The **`getInstalledRelatedApps()`** method returns a promise that resolves with an array of objects representing any related native apps or [Progressive Web Applications](/en-US/docs/Web/Progressive_web_apps) that the user has installed. For example, it can be used to check installation of UWP apps on Chrome and Edge for Windows, and Android apps and PWAs on Chrome for Android. This could be used for content personalization such as removing "install our app" banners from the web app if the native app is already installed.

> **Note:** This method must be invoked in a top-level browsing context (for example, not embedded in an {{htmlelement("iframe")}}), which must also be a [secure context](/en-US/docs/Web/Security/Secure_Contexts).

`getInstalledRelatedApps()` can only be used to check the installation of apps related to the invoking web app. To relate the invoking web app to the native app or PWA, two things must be done:

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
  - : A string representing the ID used to represent the application on the specified platform.
- `platform`
  - : A string representing the platform (ecosystem or operating system) the related app is associated with, for example `"webapp"` or `"windows"`.
- `url` {{optional_inline}}
  - : A string representing the URL that the related app can be found at.
- `version` {{optional_inline}}
  - : A string representing the related app's version.

The related app information must have been previously specified in the [`related_applications`](/en-US/docs/Web/Manifest/related_applications) member of the invoking web app's [manifest file](/en-US/docs/Web/Manifest).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The method was not invoked in a top-level browsing context.

## Examples

```js
const relatedApps = await navigator.getInstalledRelatedApps();
relatedApps.forEach((app) => {
  console.log(app.id, app.platform, app.url);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/get-installed-related-apps/)
