---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
tags:
  - Error
  - Errors
  - JavaScript
  - Security
---
{{jsSidebar("Errors")}}

The JavaScript exception "Permission denied to access property" occurs when there was
an attempt to access an object for which you have no permission.

## Message

```
DOMException: Blocked a frame with origin "x" from accessing a cross-origin frame. (Chromium-based)
DOMException: Permission denied to access property "x" on cross-origin object (Firefox)
SecurityError: Blocked a frame with origin "x" from accessing a cross-origin frame. Protocols, domains, and ports must match. (Safari)
```

## Error type

{{domxref("DOMException")}}.

## What went wrong?

There was attempt to access an object for which you have no permission. This is likely
an {{HTMLElement("iframe")}} element loaded from a different domain for which you
violated the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

## Examples

### No permission to access document

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function() {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      }
    </script>
  </head>
  <body></body>
</html>
```

## See also

- {{HTMLElement("iframe")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
