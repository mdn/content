---
title: GlobalEventHandlers.onsecuritypolicyviolation
slug: Web/API/GlobalEventHandlers/onsecuritypolicyviolation
tags:
  - API
  - CSP
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onsecuritypolicyviolation
---
{{ApiRef("HTML DOM")}}

The **`onsecuritypolicyviolation`** property of the {{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for processing [securitypolicyviolation](/en-US/docs/Web/API/Element/securitypolicyviolation_event) events.

The `securitypolicyviolation` event fires when there is a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) violation.

> **Note:** In practice you must use the implementation of this property in a top level object (i.e. {{domxref("Window")}} or {{domxref("Document")}}).
> While the property exists in HTML elements, you can't assign a handler to the property until the elements have been loaded, by which time this event will already have fired.

## Syntax

```js
onsecuritypolicyviolation = functionRef
```

### Value

- `functionRef`
  - : A function name, or a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("SecurityPolicyViolationEvent")}} object as its sole argument.

Only one `onsecuritypolicyviolation` handler can be assigned to an object at a time.

For greater flexibility, you can pass a [securitypolicyviolation](/en-US/docs/Web/API/Element/securitypolicyviolation_event) event to the {{domxref("EventTarget.addEventListener()")}} method instead.

## Example

This code shows a very simpler top-level handler set on `Window` that logs a value in the event to a text area (the same approach will work with a `Document`).
Note that in this case the `Content-Security-Policy` value, which is set using a meta tag, allows the `'unsafe-inline'` script to run, but the image cannot be loaded.

```html
<!DOCTYPE html>
  <html lang="en">
   <head>
     <title>Examples CSP error on page load</title>
     <meta charset="UTF-8">
     <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline';">
     </head>
   <script>
     //Assign function to onsecuritypolicyviolation global handler
     window.onsecuritypolicyviolation = function(e) {
       const log_area = document.getElementById("log");
       log_area.textContent+=e.blockedURI+"\n";
     };
   </script>
   <body>
    <h1>Image loading should fail</h1>
    <label for="log">Blocked URI</label>
    <textarea id="log" rows="2" cols="50"></textarea>
    <img src="HTTPRevved_fix_typo.png">
   </body>
  </html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Element: `securitypolicyviolation` event](/en-US/docs/Web/API/Element/securitypolicyviolation_event)
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/CSP)
