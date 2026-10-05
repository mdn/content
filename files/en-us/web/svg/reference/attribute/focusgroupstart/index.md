---
title: focusgroupstart
slug: Web/SVG/Reference/Attribute/focusgroupstart
page-type: svg-attribute
browser-compat: svg.global_attributes.focusgroupstart
sidebar: svgref
---

The **`focusgroupstart`** attribute marks the first item to receive focus on entering a {{SVGAttr("focusgroup")}}, when set on a focusable descendant of the group.

See the [`focusgroupstart`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroupstart) HTML attribute reference page for detailed information.

You can use this attribute with any SVG element.

## Examples

### Basic usage

This example shows how to use `focusgroup` to create a basic toolbar widget, and `focusgroupstart` to set which descendant element should be initially focused when the widget is tabbed to.

#### HTML

We include an {{svgelement("svg")}} element with several child {{svgelement("a")}} elements, each of which contains some {{svgelement("text")}}. The `<svg>` element has a `focusgroup` attribute set on it with a value of `toolbar nomemory`, to turn it into a toolbar widget that doesn't remember its previous focus position. We've also set `focusgroupstart` on the third `<a>` element so that it will get the initial focus.

```html
<svg
  viewBox="0 0 100 20"
  xmlns="http://www.w3.org/2000/svg"
  focusgroup="toolbar nomemory">
  <a href="#">
    <text x="5" y="15">One</text>
  </a>

  <a href="#">
    <text x="35" y="15">Two</text>
  </a>

  <a href="#" focusgroupstart>
    <text x="65" y="15">Three</text>
  </a>
</svg>
```

The HTML also includes some filler text above and below the toolbar to cause the container to scroll, so we can demonstrate how the toolbar behaves alongside other content, and in a scrollport. We've hidden the filler text for brevity.

```html hidden live-sample___basic-usage-toolbar
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<svg
  viewBox="0 0 100 20"
  xmlns="http://www.w3.org/2000/svg"
  focusgroup="toolbar nomemory">
  <a href="#">
    <text x="5" y="15">One</text>
  </a>

  <a href="#">
    <text x="35" y="15">Two</text>
  </a>

  <a href="#" focusgroupstart>
    <text x="65" y="15">Three</text>
  </a>
</svg>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

#### CSS

We've given the `<a>` elements some styles to make them look and behave more like conventional HTML links:

```css live-sample___basic-usage-toolbar
a:link,
a:visited {
  cursor: pointer;
}

a text {
  fill: blue;
  text-decoration: underline;
}

a:hover,
a:focus {
  outline: dotted 1px blue;
}
```

```css hidden live-sample___basic-usage-toolbar
body {
  margin: 20px auto;
  width: max(400px, 50%);
}

p {
  line-height: 1.5;
}

svg {
  font-size: 0.8em;
}

body.no-focusgroup::before {
  font-family: sans-serif;
  content: "Your browser does not support focusgroup/focusgroupstart.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;

  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

In our script, we grab a reference to the `focusgroup` container and test whether its {{domxref("SVG Element.focusGroup")}} property exists. If not, we set a class on the `<body>` element that causes a "not supported" banner to render.

```js live-sample___basic-usage-toolbar
const focusgroupElem = document.querySelector("[focusgroup]");
if (!focusgroupElem.focusGroup) {
  document.body.className = "no-focusgroup";
}
```

#### Result

{{embedlivesample("basic-usage-toolbar", "100%", 250)}}

Tab to the toolbar, and note how the focusgroup's item focus can then be moved using the inline direction cursor keys. Note also how the initial focus is given to the third `<a>` element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("focusgroupstart")}} SVG attribute
- [`focusgroup`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup) HTML attribute
- {{domxref("SVGElement.focusGroup")}}
