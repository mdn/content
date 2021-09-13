---
title: 'Location: assign()'
slug: Web/API/Location/assign
tags:
  - API
  - HTML-DOM
  - Location
  - Method
  - Reference
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

```js
location.assign(url);
```

### Parameters

- `url`
  - : Is a {{domxref("DOMString")}} containing the URL of the page to navigate to.

## Example

```js
// Navigate to the Location.reload article
window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Location")}} interface it belongs to.
- Similar methods: {{domxref("Location.replace()")}} and
  {{domxref("Location.reload()")}}.
