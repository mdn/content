---
title: "HTMLElement: focusGroupStart property"
short-title: focusGroupStart
slug: Web/API/HTMLElement/focusGroupStart
page-type: web-api-instance-property
browser-compat: api.HTMLElement.focusGroupStart
---

{{ApiRef("HTML DOM")}}

The **`focusGroupStart`** property of the {{domxref("HTMLElement")}} interface marks the first item to receive focus on entering a [`focusgroup`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup), when set on a focusable child of the group. It reflects the [`focusgroupstart`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroupstart) attribute.

## Value

A boolean value.

## Examples

### Feature detection

This example grabs a reference to an element with the `focusgroupstart` attribute set on it. It then detects whether the element has a `focusGroupStart` property. If not, the attribute is not supported, so it adds a `no-focusgroupstart` class to the {{htmlelement("body")}} element that could be used for example to adjust the document's styling and display a "not supported" banner.

```js
const focusgroupStartElem = document.querySelector("[focusgroupstart]");
if (!focusgroupStartElem.focusGroupStart) {
  document.body.className = "no-focusgroupstart";
}
```

You'd be more likely to feature detect for the associated [`focusgroup`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup) attribute, but it is worth knowing that you can feature detect for `focusgroupstart` if required.

### Programmatically setting `focusgroupstart`

In the following example, we grab references to all the focusable items inside a `focusgroup` element. This assumes that all the items are buttons.

```js
const focusgroupItems = document.querySelectorAll("[focusgroup] button");
```

Next, we select the last button inside the `focusgroup`, and set its `focusGroupStart` value to `true` so that when the focusgroup is tabbed to, the last button will be initially focused.

```js
focusgroupItems[focusgroupItems.length - 1].focusGroupStart = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`focusgroupstart`](/docs/Web/HTML/Reference/Global_attributes/focusgroupstart) attribute
- {{domxref("HTMLElement.focusGroup")}}
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
