---
title: data-*
slug: Web/HTML/Global_attributes/data-*
page-type: html-attribute
browser-compat: html.global_attributes.data_attributes
---

{{HTMLSidebar("Global_attributes")}}

The **`data-*`** [global attributes](/en-US/docs/Web/HTML/Global_attributes) form a class of attributes called **custom data attributes**, that allow proprietary information to be exchanged between the [HTML](/en-US/docs/Web/HTML) and its [DOM](/en-US/docs/Web/API/Document_Object_Model) representation by scripts.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

All such custom data are available via the {{domxref("HTMLElement")}} interface of the element the attribute is set on. The {{domxref("HTMLElement.dataset")}} property gives access to them.
The `*` may be replaced by any name following [the production rule of XML names](https://www.w3.org/TR/REC-xml/#NT-Name) which includes the following recommendations:

- The name should not start with `xml` (case-insensitive), as it's reserved for future XML specifications.
- The name should not contain any colon characters (`:`), as XML assigns meaning to such names.
- The name should not contain any capital letters, as XML is all lowercase.

In JavaScript, the {{domxref("HTMLElement.dataset")}} property is a {{domxref("DOMStringMap")}} containing all the custom data attributes for an {{domxref("HTMLElement")}}. For example, `element.getAttribute("data-test")` is equivalent to `element.dataset.test`. The `dataset` version of the attribute name removes the "data-" prefix and converts the rest of the name from snake-case to camelCase. For example, `data-test-abc` will be accessible as `element.dataset.testAbc` (or by `element.dataset["testAbc"]`). Non-alphabetic characters following a hyphen are not valid, for example `data-test-1` or `data--test`. If you plan to use {{domxref("HTMLElement.dataset")}}, the name can only include characters allowed in JavaScript property names (and hyphens, which will be removed).

### Usage

By adding `data-*` attributes, even ordinary HTML elements can become rather complex and powerful program-objects. For example, a space-ship "[sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in a game could be a simple {{HTMLElement("img")}} element with a [`class`](/en-US/docs/Web/HTML/Global_attributes/class) attribute and several `data-*` attributes:

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()" />
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
