---
title: Document.onvisibilitychange
slug: Web/API/Document/onvisibilitychange
tags:
  - API
  - Document
  - Event Handler
  - Page Visibility
  - Property
  - Reference
  - onvisibilitychange
browser-compat: api.Document.onvisibilitychange
---
{{ApiRef('DOM')}}

The **`Document.onvisibilitychange`** property represents the
event handler that is called when a {{event("visibilitychange")}} event reaches this
object.

## Syntax

```js
obj.onvisibilitychange = function;
```

- `function` is the name of a user-defined function, without the () suffix
  or any parameters, or an anonymous function declaration.

## Example

```js
document.onvisibilitychange = function() {
  console.log("Visibility of page has changed!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
