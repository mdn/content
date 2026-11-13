---
title: "SVGElement: focusGroupStart property"
short-title: focusGroupStart
slug: Web/API/SVGElement/focusGroupStart
page-type: web-api-instance-property
browser-compat: api.SVGElement.focusGroupStart
---

{{ApiRef("HTML DOM")}}

The **`focusGroupStart`** property of the {{domxref("SVGElement")}} interface marks the first item to receive focus on entering a [`focusgroup`](/en-US/docs/Web/SVG/Reference/Attribute/focusgroup), when set on a focusable child of the group. It reflects the [`focusgroupstart`](/en-US/docs/Web/SVG/Reference/Attribute/focusgroupstart) attribute.

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

You'd be more likely to feature detect for the associated [`focusgroup`](/en-US/docs/Web/SVG/Reference/Attribute/focusgroup) attribute, but it is worth knowing that you can feature detect for `focusgroupstart` if required.

### Programmatically setting `focusgroupstart`

In the following example, we grab references to all the focusable items inside a `focusgroup` element. This assumes that all the items are anchors.

```js
const focusgroupItems = document.querySelectorAll("[focusgroup] a");
```

Next, we select the last anchor inside the `focusgroup`, and set its `focusGroupStart` value to `true` so that when the focusgroup is tabbed to, the last anchor will be initially focused.

```js
focusgroupItems[focusgroupItems.length - 1].focusGroupStart = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`focusgroupstart`](/docs/Web/HTML/Reference/Global_attributes/focusgroupstart) attribute
- {{domxref("SVGElement.focusGroup")}}
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
