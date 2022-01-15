---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
tags:
  - API
  - Interface
  - PageTransitionEvent
  - Reference
browser-compat: api.PageTransitionEvent
---
{{APIRef("HTML DOM")}}

The **`PageTransitionEvent`** event object is available inside handler functions for the [`pageshow`](/en-US/docs/Web/API/Window/pageshow_event) and [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) events, fired when a document is being loaded or unloaded.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("PageTransitionEvent.persisted")}} {{readonlyInline}}
  - : Indicates if the document is loading from a cache.

## Example

### HTML

```html
<!DOCTYPE html>
<html>
<body>
</body>
</html>
```

### JavaScript

```js
window.addEventListener('pageshow', myFunction);

function myFunction(event) {
  if (event.persisted) {
    alert("The page was cached by the browser");
  } else {
    alert("The page was NOT cached by the browser");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`pageshow` event](/en-US/docs/Web/API/Window/pageshow_event)
- [`pagehide` event](/en-US/docs/Web/API/Window/pagehide_event)
