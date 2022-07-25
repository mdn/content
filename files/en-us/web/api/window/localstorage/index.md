---
title: Window.localStorage
slug: Web/API/Window/localStorage
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Read-only
  - Reference
  - Storage
  - Web Storage
  - Window
  - WindowLocalStorage
  - localStorage
browser-compat: api.Window.localStorage
---
{{APIRef("Web Storage API")}}

The **`localStorage`** read-only property of the {{domxref("window")}} interface allows you to access a {{DOMxRef("Storage")}} object for the {{DOMxRef("Document")}}'s {{glossary("origin")}}; the stored data is saved across browser sessions.

`localStorage` is similar to {{DOMxRef("Window.sessionStorage", "sessionStorage")}}, except that while `localStorage` data has no expiration time, `sessionStorage` data gets cleared when the page session ends — that is, when the page is closed. (`localStorage` data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)

## Value

A {{DOMxRef("Storage")}} object which can be used to access the current origin's local storage space.

### Exceptions

- `SecurityError`
  - : The request violates a policy decision, or the origin is not [a valid scheme/host/port tuple](/en-US/docs/Web/Security/Same-origin_policy#definition_of_an_origin) (this can happen if the origin uses the `file:` or `data:` schemes, for example). For example, the user may have their browser configured to deny permission to persist data for the specified origin.

## Description

The keys and the values stored with `localStorage` are _always_ in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

`localStorage` data **is specific to the protocol of the document**. In particular, for a site loaded over HTTP (e.g., `http://example.com`), `localStorage` returns a different object than `localStorage` for the corresponding site loaded over HTTPS (e.g., `https://example.com`).

For documents loaded from `file:` URLs (that is, files opened in the browser directly from the user's local filesystem, rather than being served from a web server) the requirements for `localStorage` behavior are undefined and may vary among different browsers.

In all current browsers, `localStorage` seems to return a different object for each `file:` URL. In other words, each `file:` URL seems to have its own unique local-storage area. But there are no guarantees about that behavior, so you shouldn't rely on it because, as mentioned above, the requirements for `file:` URLs remains undefined. So it's possible that browsers may change their `file:` URL handling for `localStorage` at any time. In fact some browsers _have_ changed their handling for it over time.

## Examples

The following snippet accesses the current domain's local {{DOMxRef("Storage")}} object and adds a data item to it using {{DOMxRef("Storage.setItem()")}}.

```js
localStorage.setItem('myCat', 'Tom');
```

The syntax for reading the `localStorage` item is as follows:

```js
const cat = localStorage.getItem('myCat');
```

The syntax for removing the `localStorage` item is as follows:

```js
localStorage.removeItem('myCat');
```

The syntax for removing all the `localStorage` items is as follows:

```js
localStorage.clear();
```

> **Note:** Please refer to the [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) article for a full example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{DOMxRef("Window.sessionStorage")}}
