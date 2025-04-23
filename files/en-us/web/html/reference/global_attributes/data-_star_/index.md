---
title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
page-type: html-attribute
browser-compat: html.global_attributes.data_attributes
---

{{HTMLSidebar("Global_attributes")}}

The **`data-*`** [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes) form a class of attributes called **custom data attributes**, that allow proprietary information to be exchanged between the [HTML](/en-US/docs/Web/HTML) and its [DOM](/en-US/docs/Web/API/Document_Object_Model) representation by scripts.

{{InteractiveExample("HTML Demo: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Secret agents</h1>

<ul>
  <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
  <li data-id="97865">
    Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in
    "Goldeneye".
  </li>
  <li data-id="45732">
    James Bond, 007: The main man; shaken but not stirred.
  </li>
</ul>
```

```css interactive-example
h1 {
  margin: 0;
}

ul {
  margin: 10px 0 0;
}

li {
  position: relative;
  width: 200px;
  padding-bottom: 10px;
}

li:after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover:after {
  opacity: 1;
}
```

All such custom data are available via the {{domxref("HTMLElement")}} interface of the element the attribute is set on. The {{domxref("HTMLElement.dataset")}} property gives access to them.
The `*` may be replaced by any name following [the production rule of XML names](https://www.w3.org/TR/REC-xml/#NT-Name) which includes the following recommendations:

- The name should not start with `xml` (case-insensitive), as it's reserved for future XML specifications.
- The name should not contain any colon characters (`:`), as XML assigns meaning to such names.
- The name should not contain any capital letters, as XML is all lowercase.

These are recommendations. If these naming recommendations are not followed, no errors will occur. The attributes will still be matched using CSS [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors), with the attribute being case insensitive and any attribute value being case-sensitive. Attributes not conforming to these three recommendations will also still be recognized by the JavaScript {{domxref("HTMLElement.dataset")}} property and user-agents will include the attribute in the {{domxref("DOMStringMap")}} containing all the custom data attributes for an {{domxref("HTMLElement")}}.

If you plan to use {{domxref("HTMLElement.dataset")}}, the portion of the attribute name following the `data-` can only include characters allowed in JavaScript property names (and hyphens, which will be removed). The `dataset` version of the attribute name removes the "data-" prefix and converts the rest of the name from {{Glossary("kebab_case", "kebab-case")}} to camelCase. For example, `element.getAttribute("data-test")` is equivalent to `element.dataset.test` and `data-test-abc` will be accessible as `HTMLElement.dataset.testAbc` (or by `HTMLElement.dataset["testAbc"]`). Avoid non-alphabetic characters following a hyphen, such as `data-test-1` or `data--test`, as they will not be recognized by {{domxref("HTMLElement.dataset")}}.

### Usage

By adding `data-*` attributes, even ordinary HTML elements can become rather complex and powerful program-objects. For example, a space-ship "[sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ in a game could just be an {{HTMLElement("img")}} element with a [`class`](/en-US/docs/Web/HTML/Reference/Global_attributes/class) attribute and several `data-*` attributes:

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

For a more in-depth tutorial about using HTML data attributes, see [Using data attributes](/en-US/docs/Web/HTML/How_to/Use_data_attributes).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).
- The {{domxref("HTMLElement.dataset")}} property that allows to access and modify these values.
- [Using data attributes](/en-US/docs/Web/HTML/How_to/Use_data_attributes)
