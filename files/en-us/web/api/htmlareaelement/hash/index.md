---
title: "HTMLAreaElement: hash property"
short-title: hash
slug: Web/API/HTMLAreaElement/hash
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.hash
---

{{ APIRef("HTML DOM") }}

The **`hash`** property of the {{domxref("HTMLAreaElement")}} interface is a string containing a `"#"` followed by the fragment identifier of the `<area>` element's `href`. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

See {{domxref("URL.hash")}} for more information.

## Value

A string.

## Examples

### Getting the hash from an area link

Given this HTML

```html
<map name="infographic">
  <area
    id="mdn-circle"
    shape="circle"
    coords="130,136,60"
    href="https://developer.mozilla.org/#ExampleSection"
    alt="MDN" />
</map>

<img
  usemap="#infographic"
  src="/media/examples/mdn-info.png"
  alt="MDN infographic" />
```

you can get the hash of the area link like this:

```js
const area = document.getElementById("mdn-circle");
area.hash; // '#ExampleSection'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
