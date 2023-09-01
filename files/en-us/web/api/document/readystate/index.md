---
title: "Document: readyState property"
short-title: readyState
slug: Web/API/Document/readyState
page-type: web-api-instance-property
browser-compat: api.Document.readyState
---

{{APIRef("DOM")}}

The **`Document.readyState`** property describes the loading state of the {{domxref("document")}}.
When the value of this property changes, a {{domxref("Document/readystatechange_event", "readystatechange")}} event fires on the {{domxref("document")}} object.

## Value

The `readyState` of a document can be one of following:

- `loading`
  - : The {{domxref("document")}} is still loading.
- `interactive`
  - : The document has finished loading and the document has been parsed but sub-resources
    such as scripts, images, stylesheets and frames are still loading. The state indicates that
    the {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event is about to fire.
- `complete`
  - : The document and all sub-resources have finished loading. The state indicates that
    the {{domxref("Window/load_event", "load")}} event is about to fire.

## Examples

### Different states of readiness

```js
switch (document.readyState) {
  case "loading":
    // The document is loading.
    break;
  case "interactive": {
    // The document has finished loading and we can access DOM elements.
    // Sub-resources such as scripts, images, stylesheets and frames are still loading.
    const span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  }
  case "complete":
    // The page is fully loaded.
    console.log(
      `The first CSS rule is: ${document.styleSheets[0].cssRules[0].cssText}`,
    );
    break;
}
```

### readystatechange as an alternative to DOMContentLoaded event

```js
// Alternative to DOMContentLoaded event
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

### readystatechange as an alternative to load event

```js
// Alternative to load event
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    initApplication();
  }
};
```

### readystatechange as event listener to insert or modify the DOM before DOMContentLoaded

```js
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  } else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events:
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Window/load_event", "load")}}
