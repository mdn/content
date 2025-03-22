---
title: "Location: assign() method"
short-title: assign()
slug: Web/API/Location/assign
page-type: web-api-instance-method
browser-compat: api.Location.assign
---

{{ APIRef("HTML DOM") }}

The **`assign()`** method of the {{DOMXref("Location")}}
interface causes the window to load
and display the document at the URL specified. After the navigation occurs, the user can
navigate back to the page that called `Location.assign()` by pressing the "back" button.

## Syntax

```js-nolint
assign(url)
```

### Parameters

- `url`
  - : A string or any other object with a {{Glossary("stringifier")}}, such as a {{domxref("URL")}} object, containing the URL of the page to navigate to; for example, an absolute URL such as `https://developer.mozilla.org/en-US/docs/Web/API/Location/reload`, or a relative URL — such as `/Web` (just a path, for navigating to another document at the same origin) or `#specifications` (just a fragment string, for navigating to some part of the same page), and so on.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the {{Glossary("origin")}} of the script calling the method is not the {{Glossary("Same-origin policy", "same origin")}} of the page originally described by the {{domxref("Location")}} object, mostly when the script is hosted on a different domain. Browsers also throttle navigations and may throw this error, generate a warning, or ignore the call if it's called too frequently.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the provided `url` parameter is not a valid URL.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Navigate to the Location.reload article
window.location.assign(
  "https://developer.mozilla.org/en-US/docs/Web/API/Location/reload",
);

// Then navigate to its Specifications section
window.location.assign("#specifications");

// Eventually navigate to https://developer.mozilla.org/en-US/docs/Web
window.location.assign("/Web");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.replace()")}} and
  {{domxref("Location.reload()")}}.
