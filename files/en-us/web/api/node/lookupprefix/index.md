---
title: "Node: lookupPrefix() method"
short-title: lookupPrefix()
slug: Web/API/Node/lookupPrefix
page-type: web-api-instance-method
browser-compat: api.Node.lookupPrefix
---

{{APIRef("DOM")}}

The **`lookupPrefix()`** method of the {{domxref("Node")}} interface
returns a string containing the prefix for a given namespace URI, if present,
and `null` if not.
When multiple prefixes are possible, the first prefix is returned.

## Syntax

```js-nolint
lookupPrefix(namespace)
```

### Parameters

- `namespace`
  - : A string containing the namespace to look the prefix up.
    > [!NOTE]
    > This parameter is not optional but can be set to `null`.

### Return value

A string containing the corresponding prefix, or `null` if none has been found.
If `namespace` is null, or the empty string, `lookupPrefix()` returns `null`.

If the node is a {{domxref("DocumentType")}} or a {{domxref("DocumentFragment")}},
`lookupPrefix()` always returns `null`.

## Example

```html
Prefix for <code>http://www.w3.org/2000/svg</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/XML/1998/namespace</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/TR/html4/</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>https://www.w3.org/1999/xlink</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/2000/svg</code> on &lt;svg&gt;:
<output>Not tested</output>.<br />
Prefix for <code>https://www.w3.org/1999/xlink</code> on &lt;svg&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/XML/1998/namespace</code> on &lt;svg&gt;:
<output>Not tested</output>.<br />
<svg xmlns:t="http://www.w3.org/2000/svg" height="1"></svg>
<button>Click to see the results</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const htmlElt = document.querySelector("output");
  const svgElt = document.querySelector("svg");

  const result = document.getElementsByTagName("output");
  result[0].value = htmlElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[1].value = htmlElt.lookupPrefix(
    "http://www.w3.org/XML/1998/namespace",
  ); // false
  result[2].value = htmlElt.lookupPrefix("http://www.w3.org/TR/html4/"); // true
  result[3].value = htmlElt.lookupPrefix("https://www.w3.org/1999/xlink"); // false
  result[4].value = svgElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[5].value = svgElt.lookupPrefix("https://www.w3.org/1999/xlink"); // true
  result[6].value = svgElt.lookupPrefix("http://www.w3.org/XML/1998/namespace"); // false
});
```

{{ EmbedLiveSample('Example','100%',190) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
