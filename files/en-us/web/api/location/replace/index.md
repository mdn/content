---
title: location.replace()
slug: Web/API/Location/replace
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Location
  - Method
  - Reference
browser-compat: api.Location.replace
---
{{ APIRef("HTML DOM") }}

The **`replace()`** method of the {{DOMXref("Location")}}
interface replaces the current resource with the one at the provided URL. The difference
from the {{domxref("Location.assign","assign()")}} method is that after using
`replace()` the current page will not be saved in session
{{domxref("History")}}, meaning the user won't be able to use the _back_ button
to navigate to it.

If the assignment can't happen because of a security violation, a
{{domxref("DOMException")}} of the `SECURITY_ERROR` type is thrown. This
happens if the origin of the script calling the method is different from the origin of
the page originally described by the {{domxref("Location")}} object, mostly when the
script is hosted on a different domain.

If the provided URL is not valid, a {{domxref("DOMException")}} of the
`SYNTAX_ERROR` type is thrown.

## Syntax

```js
replace(url)
```

### Parameters

- `url`
  - : A string containing the URL of the page to navigate to.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Navigate to the Location.reload article by replacing this page
window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.assign()")}} and
  {{domxref("Location.reload()")}}.
