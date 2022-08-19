---
title: Navigator.msLaunchUri()
slug: Web/API/Navigator/msLaunchUri
page-type: web-api-instance-method
tags:
  - API
  - API:Microsoft Extensions
  - MSLaunchUri
  - Method
  - Non-standard
  - Reference
---
{{APIRef("Microsoft Extensions")}}{{Non-standard_header}}

The **`msLaunchUri()`** method is a Microsoft extension to the {{DOMxRef("Navigator")}} interface, which starts a service or app, such as an email client, that handles a given protocol. The Uniform Resource Identifier (URI) contains the protocol for the default service or app, such as `mailto://test@contoso.com`.

This proprietary method is specific to Internet Explorer, and Microsoft Edge versions 18 and lower.

## Syntax

```js
msLaunchUri(uri)
msLaunchUri(uri, successCallback)
msLaunchUri(uri, successCallback, noHandlerCallback)
```

### Parameters

- `uri`
  - : A string specifying the URL containing including the protocol of the document or resource to be displayed.
- `successCallback` {{optional_inline}}
  - : A function matching the signature of {{DOMxRef("MSLaunchUriCallback")}} to be executed if the protocol handler is present.
- `noHandlerCallback` {{optional_inline}}
  - : A function matching {{DOMxRef("MSLaunchUriCallback")}} to be executed if the protocol handler is _not_ present.

### Return value

None ({{jsxref("undefined")}}).

## Usage notes

If a default protocol handler is available on the system that matches the URI, the `successCallback` is invoked, otherwise, the `noHandlerCallback` is called.

To help protect a user's privacy, Windows displays a prompt for the user to allow the service or app to be launched. The user can choose to not see the prompt after the first instance for a particular protocol and automatically open the app or service without a user intervention. The `msLaunchUri()` method does not support HTTP, Secure Hypertext Transfer Protocol (HTTPS), File Transfer Protocol (FTP), file, res, JavaScript, or Microsoft Visual Basic Scripting Edition (VBScript) protocols.

If the user's system does not have a program registered to handle a specific protocol, and a `noHandlerCallback` is provided, Windows Internet Explorer will invoke the `noHandlerCallback`. This enables developers to provide a custom fallback experience for the user. If a handler doesn't exist, and the developer doesn't provide a `noHandlerCallback`, then Internet Explorer displays a dialog that asks the user if they want to allow the action. If the user allows it, the user is then prompted to look in the Windows Store for an app to handle the protocol. If multiple programs are registered on the system for the given protocol and no default has been chosen, Windows prompts the user to choose one.

## See also

- {{DOMxRef("MSLaunchUriCallback")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
