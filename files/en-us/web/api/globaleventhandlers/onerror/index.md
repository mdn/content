---
title: GlobalEventHandlers.onerror
slug: Web/API/GlobalEventHandlers/onerror
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onerror
---
{{ApiRef("HTML DOM")}}

The **`onerror`** property of the {{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes {{event("error")}} events.

Error events are fired at various targets for different kinds of errors:

- When a **JavaScript runtime error** (including syntax errors and exceptions thrown within handlers) occurs, an [`error`](/en-US/docs/Web/API/Element/error_event) event using interface {{domxref("ErrorEvent")}} is fired at {{domxref("window")}} and `window.onerror()` is invoked (as well as handlers attached by {{domxref("EventTarget.addEventListener")}} (not only capturing)).
- When a resource (such as an {{HTMLElement("img")}} or {{HTMLElement("script")}}) **fails to load**, an [`error`](/en-US/docs/Web/API/Element/error_event) event using interface {{domxref("Event")}} is fired at the element that initiated the load, and the `onerror()` handler on the element is invoked. These error events do not bubble up to window, but can be handled with a {{domxref("EventTarget.addEventListener")}} configured with `useCapture` set to `true`.

Installing a global `error` event handler is useful for automated collection of error reports.

## Syntax

For historical reasons, different arguments are passed to `window.onerror` and `element.onerror` handlers (as well as on error-type {{domxref("EventTarget.addEventListener")}} handlers).

### window\.onerror

```js
window.onerror = function(message, source, lineno, colno, error) { /* ... */ };
```

Function parameters:

- `message`: error message (string). Available as `event` (sic!) in HTML `onerror=""` handler.
- `source`: URL of the script where the error was raised (string)
- `lineno`: Line number where error was raised (number)
- `colno`: Column number for the line where the error occurred (number)
- `error`: [Error Object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) (object). May be `null` if no corresponding Error Object is available.

When the function returns `true`, this prevents the firing of the default event handler.

### window\.addEventListener('error')

```js
window.addEventListener('error', function(event) { /* ... */ })
```

`event` of type {{domxref("ErrorEvent")}} contains all the information about the event and the error.

### element.onerror

```js
element.onerror = function(event) { /* ... */ }
```

`element.onerror` accepts a function with a single argument of type {{domxref("Event")}}.

A good example for this is when you are using an image tag, and need to specify a backup image in case the one you need is not available on the server for any reason.

```html
<img src="imagefound.gif" onerror="this.onerror=null;this.src='imagenotfound.gif';" />
```

The reason we have the `this.onerror=null` in the function is that the browser will be stuck in an endless loop if the onerror image itself generates an error.

## Notes

When an error occurs in a script, loaded from a [different origin](/en-US/docs/Web/Security/Same-origin_policy), the details of the error are not reported to prevent leaking information (see {{bug("363897")}}). Instead the error reported is **`"Script error."`** This behavior can be overridden in some browsers using the `{{htmlattrxref("crossorigin","script")}}` attribute on {{HTMLElement("script")}} and having the server send the appropriate [CORS](/en-US/docs/Web/HTTP/CORS) HTTP response headers.  A workaround is to isolate "Script error." and handle it knowing that the error detail is only viewable in the browser console and not accessible via JavaScript.

```js
window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = 'script error';
  if (string.indexOf(substring) > -1){
    alert('Script Error: See Browser Console for Detail');
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    alert(message);
  }

  return false;
};
```

When using the inline HTML markup (`<body onerror="alert('an error occurred')">`), the HTML specification requires arguments passed to `onerror` to be named `event`, `source`, `lineno`, `colno`, `error`. In browsers that have not implemented this requirement, they can still be obtained via `arguments[0]` through `arguments[2]`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Capture and report JavaScript errors with window.onerror (blog.sentry.io, 2016)](https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror)
- [How to catch JavaScript Errors with window.onerror (even on Chrome and Firefox) (danlimerick.wordpress.com, 2014)](https://danlimerick.wordpress.com/2014/01/18/how-to-catch-javascript-errors-with-window-onerror-even-on-chrome-and-firefox/)
