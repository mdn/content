---
title: "HTMLTextAreaElement: select() method"
short-title: select()
slug: Web/API/HTMLTextAreaElement/select
page-type: web-api-instance-method
browser-compat: api.HTMLTextAreaElement.select
---

{{APIRef("HTML DOM")}}

The **`select()`** method of the {{domxref("HTMLTextAreaElement")}} interface selects the entire contents of the {{htmlelement("textarea")}} element. In addition, the {{domxref("HTMLTextAreaElement.select_event", "select")}} event is fired. The `select()` method does not take any parameters and does not return a value.

## Syntax

```js-nolint
select()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const textarea = document.getElementById("text-box");
textarea.select();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement/select_event", "select")}} event
- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
- CSS {{cssxref("::selection")}} pseudo-element
