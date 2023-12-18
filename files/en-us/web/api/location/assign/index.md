---
title: "Location: assign() method"
short-title: assign()
slug: Web/API/Location/assign
page-type: web-api-instance-method
browser-compat: api.Location.assign
---

{{ APIRef("HTML DOM") }}

The **`Location.assign()`** method causes the window to load
and display the document at the URL specified. After the navigation occurs, the user can
navigate back to the page that called `Location.assign()` by pressing the
"back" button.

If the assignment can't happen because of a security violation, a
{{domxref("DOMException")}} of the `SECURITY_ERROR` type is thrown. This
happens if the origin of the script calling the method is different from the origin of
the page originally described by the {{domxref("Location")}} object, mostly when the
script is hosted on a different domain.

If the provided URL is not valid, a {{domxref("DOMException")}} of the
`SYNTAX_ERROR` type is thrown.

## Syntax

```js-nolint
assign(url)
```

### Parameters

- `url`
  - : A string containing the URL of the page to navigate to; for example, an absolute URL such as `https://developer.mozilla.org/en-US/docs/Web/API/Location/reload`, or a relative URL — such as `"/Web` (just a path, for navigating to another document at the same origin) or `#specifications` (just a fragment string, for navigating to some part of the same page), and so on.

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
