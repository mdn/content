---
title: data-*
slug: Web/HTML/Global_attributes/data-*
tags:
  - Global attributes
  - HTML
  - Reference
browser-compat: html.global_attributes.data_attributes
---

{{HTMLSidebar("Global_attributes")}}

The **`data-*`** [global attributes](/en-US/docs/Web/HTML/Global_attributes) form a class of attributes called **custom data attributes**, that allow proprietary information to be exchanged between the [HTML](/en-US/docs/Web/HTML) and its [DOM](/en-US/docs/Web/API/Document_Object_Model) representation by scripts.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

All such custom data are available via the {{domxref("HTMLElement")}} interface of the element the attribute is set on. The {{domxref("HTMLElement.dataset")}} property gives access to them.
The `*` may be replaced by any name following [the production rule of XML names](https://www.w3.org/TR/REC-xml/#NT-Name) with the following restrictions:

- The name must not start with `xml` (case-insensitive).
- The name must not contain any colon characters (`:`).
- The name must not contain any capital letters.

Note that the {{domxref("HTMLElement.dataset")}} property is a {{domxref("DOMStringMap")}}, and the name of the custom data attribute _data-test-value_ will be accessible via `HTMLElement.dataset.testValue` (or by `HTMLElement.dataset["testValue"]`) as any dash (`U+002D`) is replaced by the capitalization of the next letter, converting the name to camelcase.

### Usage

By adding `data-*` attributes, even ordinary HTML elements can become rather complex and powerful program-objects. For example, a space-ship "[sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in a game could be a simple {{HTMLElement("img")}} element with a [`class`](/en-US/docs/Web/HTML/Global_attributes/class) attribute and several `data-*` attributes:

```html
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324" data-weapons="laserI laserII" data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()">
```

For a more in-depth tutorial about using HTML data attributes, see [Using data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- The {{domxref("HTMLElement.dataset")}} property that allows to access and modify these values.
- [Using data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
