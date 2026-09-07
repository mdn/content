---
title: "Element: part property"
short-title: part
slug: Web/API/Element/part
page-type: web-api-instance-property
browser-compat: api.Element.part
---

{{ ApiRef("DOM") }}

The read-only **`part`** property of the {{domxref("Element")}} interface contains a {{domxref("DOMTokenList")}} object representing the part identifier(s) of the element. It reflects the element's [`part`](/en-US/docs/Web/HTML/Reference/Global_attributes/part) content attribute. These can be used to style parts of a shadow DOM, via the {{cssxref("::part")}} pseudo-element.

## Value

A {{domxref("DOMTokenList")}} object. If the `part` attribute is not set or empty, it returns an empty `DOMTokenList`, i.e., a `DOMTokenList` with the `length` property equal to `0`.

Although the `part` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `part` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

The following excerpt is from our [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/)
example. Here the `part` attribute is used to find the shadow parts, and the
`part` property is then used to change the part identifiers of each tab so
the correct styling is applied to the active tab when tabs are clicked.

```js
const tabs = [];
const children = this.shadowRoot.children;

for (const elem of children) {
  if (elem.getAttribute("part")) {
    tabs.push(elem);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.part = "tab";
    });
    e.target.part = "tab active";
  });

  console.log(tab.part);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::part")}}
- [part](/en-US/docs/Web/HTML/Reference/Global_attributes/part)
