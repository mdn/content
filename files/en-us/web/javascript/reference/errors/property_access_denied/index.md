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

```js
Error: Permission denied to access property "x"
```

## Error type

{{jsxref("Error")}}.

## What went wrong?

There was attempt to access an object for which you have no permission. This is likely
an {{HTMLElement("iframe")}} element loaded from a different domain for which you
violated the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

## Examples

### No permission to access document

```html
<!DOCTYPE html>
<html>
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
