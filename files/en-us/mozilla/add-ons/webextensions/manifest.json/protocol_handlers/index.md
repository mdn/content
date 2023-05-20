---
title: protocol_handlers
slug: Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.protocol_handlers
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"protocol_handlers": [
  {
    "protocol": "ircs",
    "name": "IRC Mozilla Extension",
    "uriTemplate": "https://irccloud.mozilla.com/#!/%s"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use this key to register one or more web-based protocol handlers.

A protocol handler is an application that knows how to handle particular types of links: for example, a mail client is a protocol handler for "mailto:" links. When the user clicks a "mailto:" link, the browser opens the application selected as the handler for the "mailto:" protocol (or offers them a choice of handlers, depending on their settings).

> **Note:** By default, extensions do not run in private browsing windows. As protocol handlers are part of the extension, they don't work in private browsing windows by default. Whether an extension can access private browsing windows and its protocol handlers become active is under user control. For details, see [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Your extension can check whether it can access private browsing windows using {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}}.

With this key, you can register a website as a handler for a particular protocol. The syntax and semantics of this key is very much like the [`Navigator.registerProtocolHandler()`](/en-US/docs/Web/API/Navigator/registerProtocolHandler) function, except that with `registerProtocolHandler()` a website can only register itself as a handler.

Each protocol handler has three properties, all mandatory:

- `protocol`

  - : A string defining the protocol. This must be either:

    - one of the following: "bitcoin", "dat", "dweb", "ftp", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "matrix", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - a string consisting of a custom name prefixed with "web+" or "ext+". For example: "web+foo" or "ext+foo". The custom name must consist only of lower-case ASCII characters. It's recommended that extensions use the "ext+" form.

- `name`
  - : A string representing the name of the protocol handler. This will be displayed to the user when they are being asked if they want this handler to open the link.
- `uriTemplate`
  - : A string representing the URL of the handler. This string must include "%s" as a placeholder: this will be replaced with the escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone number, email address, or so forth. This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "https://example.com/#!/%s"
  }
]
```

If the protocol is not in the allowed list then it has to start with 'ext+'

```json
"protocol_handlers": [
  {
    "protocol": "ext+foo",
    "name": "Foo Extension",
    "uriTemplate": "https://example.com/#!/%s"
  }
]
```

Handlers can also be [extension pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages).

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "/example.xhtml#!/%s"
  }
]
```

## Browser compatibility

{{Compat}}
