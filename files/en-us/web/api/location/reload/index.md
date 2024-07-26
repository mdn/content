---
title: "Location: reload() method"
short-title: reload()
slug: Web/API/Location/reload
page-type: web-api-instance-method
browser-compat: api.Location.reload
---

{{ APIRef("HTML DOM") }}

The **`reload()`** method of the {{DOMXref("Location")}} interface reloads the current URL, like the Refresh button.

## Syntax

```js-nolint
reload()
```

### Parameters

- `forceGet` {{non-standard_inline}}
  - : Pass `true` to force a reload bypassing the cache. Defaults to `false`. Only supported in Firefox.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the {{Glossary("origin")}} of the script calling the method is not the {{Glossary("Same-origin policy", "same origin")}} of the page originally described by the {{domxref("Location")}} object, mostly when the script is hosted on a different domain.

## Examples

```js
// reload the current page
window.location.reload();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and
  {{domxref("Location.replace()")}}.
