---
title: Element.part
slug: Web/API/Element/part
tags:
  - API
  - Element
  - Property
  - Reference
  - part
browser-compat: api.Element.part
---
{{ ApiRef("DOM") }}

The **`part`** property of the {{domxref("Element")}} interface
represents the part identifier(s) of the element (i.e. set using the `part`
attribute), returned as a {{domxref("DOMTokenList")}}. These can be used to style parts
of a shadow DOM, via the {{cssxref("::part")}} pseudo-element.

## Syntax

```js
let elementPartList = element.part
```

## Examples

The following excerpt is from our [shadow-part](https://mdn.github.io/web-components-examples/shadow-part/)
example. Here the `part` attribute is used to find the shadow parts, and the
`part` property is then used to change the part identifiers of each tab so
the correct styling is applied to the active tab when tabs are clicked.

```js
let tabs = [];
let children = this.shadowRoot.children;

for(let elem of children) {
  if(elem.getAttribute('part')) {
    tabs.push(elem);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.part = 'tab';
    })
    e.target.part = 'tab active';
  })

  console.log(tab.part);
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::part")}}
- {{htmlattrxref("part")}}
