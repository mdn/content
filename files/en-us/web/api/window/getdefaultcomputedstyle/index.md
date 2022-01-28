---
title: Window.getDefaultComputedStyle()
slug: Web/API/window/getDefaultComputedStyle
tags:
  - API
  - CSS
  - Method
  - Reference
browser-compat: api.Window.getDefaultComputedStyle
---
{{APIRef("CSSOM")}} {{Non-standard_header}}

The **`getDefaultComputedStyle()`** method gives the default [computed values](/en-US/docs/Web/CSS/computed_value) of all the CSS
properties of an element, ignoring author styling. That is, only user-agent and user
styles are taken into account.

## Syntax

```js
var style = window.getDefaultComputedStyle(element [, pseudoElt]);
```

### Parameters

- `element`
  - : The {{domxref("Element")}} for which to get the computed style.
- `pseudoElt` {{optional_inline}}
  - : A string specifying the pseudo-element to match. Must be `null` (or not
    specified) for regular elements.

### Return value

The returned `style` is a [`CSSStyleDeclaration`](/en-US/docs/Web/API/CSSStyleDeclaration)
object. The object is of the same type as the object returned by
{{domxref("Window.getComputedStyle()")}}, but only takes into account user-agent and
user rules.

## Example

### Simple example

```js
var elem1 = document.getElementById("elemId");
var style = window.getDefaultComputedStyle(elem1);
```

### Longer example

```html
<style>
#elem-container {
  position: absolute;
  left:     100px;
  top:      200px;
  height:   100px;
}
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  var elem = document.getElementById("elem-container");
  var theCSSprop = window.getDefaultComputedStyle(elem).position;
  document.getElementById("output").innerHTML = theCSSprop; // Will output "static"
</script>
```

### Use with pseudo-elements

The `getDefaultComputedStyle()` method can pull style info from
pseudo-elements (e.g., {{cssxref("::before")}} or {{cssxref("::after")}}).

```html
<style>
 h3:after {
   content: ' rocks!';
 }
</style>

<h3>generated content</h3>

<script>
  var h3       = document.querySelector('h3'),
      result   = getDefaultComputedStyle(h3, ':after').content;

  console.log('the generated content is: ', result); // returns 'none'
</script>
```

## Notes

The returned value is, in certain known cases, expressly incorrect by deliberate
intent. In particular, to avoid the so called CSS History Leak security issue, browsers
may expressly "lie" about the used value for a link and always return values as if a
user has never visited the linked site, and/or limit the styles that can be applied
using the `:visited` pseudo-selector. See <https://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/>
and <https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>
for details of the examples of how this is implemented.

## Specifications

Proposed to the CSS working group.

## Browser compatibility

{{Compat}}
