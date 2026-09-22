---
title: "Navigator: install() method"
short-title: install()
slug: Web/API/Navigator/install
page-type: web-api-instance-method
browser-compat: api.Navigator.install
---

{{APIRef("HTML DOM")}}

The **`navigator.install()`** method instructs the browser to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps), provided it is eligible to be installed. This can be an app from which the method is called, or an app located in a different location on the same origin or another origin.

## Syntax

```js-nolint
install()
install(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object. If this is omitted, the browser will attempt to install the current document as a PWA. This object can contain the following properties:
    - `manifest`
      - : A string equal to a URL pointing to the [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) of the PWA to be installed. If `options` is included but `manifest` is omitted, a `TypeError` is thrown.
    - `manifestId` {{optional_inline}}
      - : A string equal to a URL representing the ID of the PWA to be installed. This can be omitted if the manifest at `manifest` contains a valid [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field.

### Return value

A promise that fulfills with an empty object if installation is successful.

### Exceptions

The promise may reject with the following:

- `AbortError` {{domxref("DOMException")}}
  - : Installation was aborted by the user or the user agent.
- `DataError` {{domxref("DOMException")}}
  - : The installation failed because the provided data was inadequate — for example, the manifest was not well-formed, or a `manifestId` was not provided in the manifest or the method call.
- {{jsxref("TypeError")}}
  - : Occurs if:

    - The `options` object is specified, but the `manifest` property is omitted.
    - The `manifest` or `manifestId` values are invalid or empty.

The following exceptions can be thrown synchronously:

- `InvalidStateError` {{domxref("DOMException")}}
  - : The `install()` method was invoked in an embedded `<iframe>` or during prerendering.
- `NotAllowedError` {{domxref("DOMException")}}
  - : The `install()` method was invoked without transient activation.
- `SecurityError` {{domxref("DOMException")}}
  - : The `install()` method was disallowed by a Permissions Policy, or by sandbox restrictions.

## Description

The `install()` function provides a programmatic way for developers to create a {{htmlelement("button")}} or other control that will install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) on the user's device.

This uses the same installation confirmation dialog as the browser's built-in install functionality, but it has some advantages. It allows the developer to create an install experience that is more consistent across supporting browsers, has greater flexibility as to where it can be implemented, and is easier to discover.

> [!NOTE]
> There is an equivalent HTML element, {{htmlelement("install")}}, which provides a declarative mechanism to create such an install button.

### Usage contexts

There are three distinct usage contexts in which `install()` is useful:

1. **Same origin install: Install the current site**. If you just want to allow the user to install the current site they are looking at as a PWA, you can invoke the `install()` method on a user interaction event with no `options` object, and the browser will find the app's manifest via its [`<link rel="manifest">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/manifest) element.

   ```js
   installBtn.addEventListener("click", () => {
     navigator.install();
   });
   ```

2. **Same origin install: Install suite of apps from landing page**. If you have a site that contains multiple PWAs in separate sub-directories, you can provide multiple install buttons on the site's home page that invoke `install()` with different `manifest` options pointing to the manifests of the different apps to install.

   ```js
   installBtn1.addEventListener("click", () => {
     navigator.install({
       manifest: "https://example.com/app1/manifest.json",
     });
   });

   installBtn2.addEventListener("click", () => {
     navigator.install({
       manifest: "https://example.com/app2/manifest.json",
     });
   });

   installBtn3.addEventListener("click", () => {
     navigator.install({
       manifest: "https://example.com/app3/manifest.json",
     });
   });
   ```

3. **Cross origin install: Third party app store.** A third-party app catalog can provide one-click installation of any apps it wishes to, again by pointing to the app manifest:

   ```js
   installBtn1.addEventListener("click", () => {
     navigator.install({
       manifest: "https://example1.com/app/manifest.json",
     });
   });

   installBtn2.addEventListener("click", () => {
     navigator.install({
       manifest: "https://example2.com/app/manifest.json",
     });
   });
   ```

You can specify absolute or relative URLs for `manifest` and `manifestId` values. If a relative URL is specified, it is resolved against the current document's base URL.

When the `install()` call includes a `manifest`, the permission flow is different — in addition to asking the user whether they want to install each specific app, they are also asked to confirm whether they give the current site permission to install apps. The permission feature behind this is `web-app-installation`, and it can be programmatically monitored using the [Permissions](/en-US/docs/Web/API/Permissions_API).

### Including a `manifestId`

The snippets in the previous section don't include `manifestId` properties in the `install()` option objects. They assume that the referenced manifests specify an [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field, in which case `manifestId`s are not required.

If your manifest doesn't include an `id` field, the browser will use a computed `id` value to identify the app, which you must specify in the `install()` method's `manifestId` option. This supplies an explicit expected ID; if this does not match the ID of the app, installation will fail with a `DataError`.

For example:

```js
installBtn.addEventListener("click", () => {
  navigator.install({
    manifest: "https://example.com/app1/manifest.json",
    manifestId: "https://example1.com/app/index.html",
  });
});
```

The `manifestId` can be found in your browser developer tools. For example, open the Chrome/Edge developer tools _Application_ panel, select the _Manifest_ option, and scan the page for the _Computed App ID_ field.

### Criteria for installing a PWA via `install()`

For an app to be installed via the `install()` method, the following criteria must be met:

- The app must meet the basic PWA [installability](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) criteria, namely, it must have a valid manifest and must be served over HTTPS, or from a `localhost` address.
- The app must have a manifest ID available, either in the manifest file `id` field, or provided in the `install()` call's `manifestId` option.

## Security considerations

The `Navigator.install()` method is restricted to [secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts) (HTTPS), and requires that the user has recently interacted with the page ([transient user activation](/en-US/docs/Web/Security/Defenses/User_activation) is required).

Access to the API is also controlled via the {{httpheader("Permissions-Policy/web-app-installation", "web-app-installation")}} {{httpheader("Permissions-Policy")}} directive.

In addition, when calling `Navigator.install()` with an options object, the user is asked for permission to install apps. The current user permission status can be queried via the [Permissions API](/en-US/docs/Web/API/Permissions_API) (the feature name is `web-app-installation`).

## Examples

See our [PWA install demos](https://mdn.github.io/pwa-examples/install-demos/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}}
- The {{httpheader("Permissions-Policy/web-app-installation", "web-app-installation")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
