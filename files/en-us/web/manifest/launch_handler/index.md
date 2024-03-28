---
title: launch_handler
slug: Web/Manifest/launch_handler
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.launch_handler
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
  </tbody>
</table>

The `launch_handler` member defines values that control the launch of a web application. Currently it can only contain a single value, `client_mode`, which specifies the context in which the app should be loaded when launched. For example, in an existing web app client containing an instance of the app, or in a new web app client. This leaves scope for more `launch_handler` values to be defined in the future.

## launch_handler item values

`launch_handler` objects may contain the following values:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Member</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>client_mode</code></td>
      <td><p>A string, or comma-separated array of strings, which specifies the context in which the app should be loaded when launched. If an array of strings is provided, the first valid value is used. Possible values are:</p>
      <dl>
        <dt><code>auto</code></dt>
        <dd>The user agent decides what context makes sense for the platform to load the app in. For example, <code>navigate-existing</code> might make more sense on mobile, where single app instances are commonplace, whereas <code>navigate-new</code> might make more sense in a desktop context. This is the default value used if all the provided values are invalid.</dd>
        <dt><code>focus-existing</code></dt>
        <dd>If the app is already loaded in a web app client, it is brought into focus but not navigated to the launch target URL. The target URL is made available via {{domxref("Window.launchQueue")}} to allow custom launch navigation handling to be implemented. If the app is not already loaded in a web app client, <code>navigate-new</code> behavior is used instead.</dd>
        <dt><code>navigate-existing</code></dt>
        <dd>If the app is already loaded in a web app client, it is brought into focus and navigated to the specified launch target URL. The target URL is made available via {{domxref("Window.launchQueue")}} to allow additional custom launch navigation handling to be implemented. If the app is not already loaded in a web app client, <code>navigate-new</code> behavior is used instead.</dd>
        <dt><code>navigate-new</code></dt>
        <dd>The app is loaded inside a new web app client. The target URL is made available via {{domxref("Window.launchQueue")}} to allow additional custom launch navigation handling to be implemented.</dd>
      </dl>
      </td>
    </tr>
  </tbody>
</table>

## Examples

```json
"launch_handler": {
    "client_mode": "focus-existing"
}

"launch_handler": {
    "client_mode": ["focus-existing", "auto"]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) demo app
