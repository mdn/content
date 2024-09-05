---
title: "Document: queryCommandState() method"
short-title: queryCommandState()
slug: Web/API/Document/queryCommandState
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Document.queryCommandState
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`queryCommandState()`** method will tell you if the current selection has a certain {{domxref("Document.execCommand()")}} command applied.

## Syntax

```js-nolint
queryCommandState(command)
```

### Parameters

- `command`
  - : A command from {{domxref("Document.execCommand()")}}

### Return value

`queryCommandState()` can return a boolean value or `null` if the state is unknown.

## Example

### HTML

```html
<div contenteditable="true">Select a part of this text!</div>
<button onclick="makeBold();">Test the state of the 'bold' command</button>

<hr />

<div id="output"></div>
```

```css hidden
hr,
button {
  margin: 1rem 0;
}
```

### JavaScript

```js
function makeBold() {
  const state = document.queryCommandState("bold");
  let message;
  switch (state) {
    case true:
      message = "The bold formatting will be removed from the selected text.";
      break;
    case false:
      message = "The selected text will be displayed in bold.";
      break;
    default:
      message = "The state of the 'bold' command is indeterminable.";
      break;
  }
  document.querySelector("#output").textContent = `Output: ${message}`;
  document.execCommand("bold");
}
```

### Result

{{EmbedLiveSample('Example', '100', '180')}}

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- Browser bugs related to `queryCommandState()`: [Scribe's "Browser Inconsistencies" documentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate)
