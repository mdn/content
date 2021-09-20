---
title: GlobalEventHandlers.oninput
slug: Web/API/GlobalEventHandlers/oninput
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.oninput
---
{{ApiRef("HTML DOM")}}

The **`oninput`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("input")}} events on the {{HTMLElement("input")}},
{{HTMLElement("select")}}, and {{HTMLElement("textarea")}} elements. It also handles
these events on elements where {{domxref("HTMLElement.contentEditable",
  "contenteditable")}} or {{domxref("Document.designMode", "designMode")}} are turned on.

> **Note:** Unlike `oninput`, the
> {{domxref("GlobalEventHandlers.onchange", "onchange")}} event handler is not
> necessarily called for each alteration to an element's `value`.

## Syntax

```js
target.oninput = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("InputEvent")}} object as its sole
argument.

## Example

This example logs the number of characters in an {{HtmlElement("input")}} element,
every time you modify its contents.

### HTML

```html
<input type="text" placeholder="Type something here to see its length." size="50">
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.getElementById('log');

input.oninput = handleInput;

function handleInput(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The following links discuss compatibility issues and fixes that may be helpful when
working with older browsers:

- [Fixing
  oninput in IE Using html5Widgets](http://www.useragentman.com/blog/2011/05/12/fixing-oninput-in-ie9-using-html5widgets/) includes polyfill for IE6-8
- Mathias Bynens suggests [binding to both input and keydown](http://mathiasbynens.be/notes/oninput)
- [oninput event |
  dottoro](http://help.dottoro.com/ljhxklln.php) has notes about bugginess in IE9
- [Bug 312094 - Add
  support for \<select oninput>](https://bugzilla.mozilla.org/show_bug.cgi?id=312094)

## See also

- {{event("input")}} event
