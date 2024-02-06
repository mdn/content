---
title: "Location: replace() method"
short-title: replace()
slug: Web/API/Location/replace
page-type: web-api-instance-method
browser-compat: api.Location.replace
---

{{ APIRef("HTML DOM") }}

The **`replace()`** method of the {{DOMXref("Location")}}
interface replaces the current resource with the one at the provided URL. The difference
from the {{domxref("Location.assign","assign()")}} method is that after using
`replace()` the current page will not be saved in session {{domxref("History")}},
meaning the user won't be able to use the _back_ button to navigate to it.

## Syntax

```js-nolint
replace(url)
```

### Parameters

- `url`
  - : A string containing the URL of the page to navigate to.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the provided `url` parameter is not a valid URL.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Navigate to the Location.reload article by replacing this page
window.location.replace(
  "https://developer.mozilla.org/en-US/docs/Web/API/Location.reload",
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and
  {{domxref("Location.reload()")}}.
