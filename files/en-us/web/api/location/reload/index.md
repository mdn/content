---
title: location.reload()
slug: Web/API/Location/reload
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Location
  - Method
  - Reference
browser-compat: api.Location.reload
---
{{ APIRef("HTML DOM") }}

The **`location.reload()`** method reloads the current URL, like the Refresh button.

The reload may be blocked and a `SECURITY_ERROR` {{domxref("DOMException")}}
thrown. This happens if the {{Glossary("origin")}} of the script calling
`location.reload()` differs from the origin of the page that owns the
{{domxref("Location")}} object. See [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) for more
information.

## Syntax

```js
reload()
```

### Parameters

None.

> **Note:** Firefox supports a non-standard [`forceGet` boolean parameter](https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#551) for `location.reload()`, to tell Firefox to bypass its cache and force-reload the current document. However, in all other browsers, any parameter you specify in a `location.reload()` call will be ignored and have no effect of any kind.

You may, though, come across instances of `location.reload(true)` in existing code that was written with the assumption the force-reload effect occurs in all browsers. A GitHub "`location.reload(true)`" search returns [several hundred thousand results](https://github.com/search?q=%22location.reload%28true%29%22&type=code). So there's a lot of existing code which has it.

The history of it is: some version of Netscape Navigator added support for it, which apparently eventually got picked up in Firefox. And at one point the W3C Web APIs Working Group [took up an issue](https://www.w3.org/2005/06/tracker/webapi/issues/69) to consider adding it to the specification for `location.reload()`. However, it was never actually added.

So a boolean parameter is not part of the current specification for `location.reload()` — and in fact has _never_ been part of any specification for `location.reload()` ever published.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and
  {{domxref("Location.replace()")}}.
