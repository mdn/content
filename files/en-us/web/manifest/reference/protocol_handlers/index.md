---
title: protocol_handlers
slug: Web/Manifest/Reference/protocol_handlers
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.protocol_handlers
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

The `protocol_handlers` member specifies an array of objects that are protocols which this web app can register and handle. Protocol handlers register the application in an OS's application preferences; the registration associates a specific application with the given protocol scheme. For example, when using the protocol handler `mailto://` on a web page, registered email applications open.

After registering a web app as a protocol handler, when a user clicks on a hyperlink with a specific scheme such as `mailto://` or `web+music://` from a browser or native app, the registered PWA would open and receive the URL.

### Values

Protocol handlers objects may contain the following values:

- `protocol` {{experimental_inline}}

  - : A required string containing the protocol to be handled; e.g.: `mailto`, `ms-word`, `web+jngl`.

- `url` {{experimental_inline}}
  - : Required HTTPS URL within the application [`scope`](/en-US/docs/Web/Manifest/Reference/scope) that will handle the
    protocol.
    The `%s` token will be replaced by the URL starting with the protocol handler's scheme. If `url` is a relative
    URL, the base URL will be the URL of the manifest.

## Examples

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
