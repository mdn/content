---
title: protocol_handlers
slug: Web/Manifest/protocol_handlers
tags:
  - protocol_handlers
  - Manifest
  - Web
  - Experimental
browser-compat: html.manifest.protocol_handlers
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `protocol_handlers` member specifies an array of objects that are protocols which this web app can register and handle. Protocol handlers register the application in an OS's application preferences; the registration associates a specific application with the given protocol scheme. For example, when using the protocol handler `mailto://` on a web page, registered email applications open.

After registering a web app as a protocol handler, when a user clicks on a hyperlink with a specific scheme such as `mailto://` or `web+music://` from a browser or native app, the registered PWA would open and receive the URL.

## Example

In this example, a web app manifest declares that the app should be registered to handle the protocols `web+jngl` and `web+jnglstore`.

```json
"protocol_handlers": [
  {
    "protocol": "web+jngl",
    "url": "/lookup?type=%s"
  },
  {
    "protocol": "web+jnglstore",
    "url": "/shop?for=%s"
  }
]
```

A developer can add a field in the manifest.json to declare which protocols the web app can handle. As seen in the example above, the key is named `protocol_handlers` and it contains an array of protocol handler declaration objects.

Registering applications to handle URL schemes is operating-system dependent. This association is usually done during application install but it can also be done afterwards from an app that has already been installed.

## Values

Protocol handlers objects may contain the following values:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Member</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>protocol</code></td>
      <td>
        A required string containing the protocol to be handled; e.g.:
        <code>mailto</code>, <code>ms-word</code>, <code>web+jngl</code>.
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>
        Required HTTPS URL within the application
        <a href="/en-US/docs/Web/Manifest/scope">scope</a> that will handle the
        protocol. The <code>%s</code> token will be replaced by the URL starting
        with the protocol handler's scheme. If <code>url</code> is a relative
        URL, the base URL will be the URL of the manifest.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
