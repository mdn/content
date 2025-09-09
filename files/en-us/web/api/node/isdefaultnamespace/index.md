---
title: "Node: isDefaultNamespace() method"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
page-type: web-api-instance-method
browser-compat: api.Node.isDefaultNamespace
---

{{APIRef("DOM")}}

The **`isDefaultNamespace()`** method of the {{domxref("Node")}} interface accepts a namespace URI as an argument.
It returns a boolean value that is `true` if the namespace is the default namespace on the given node and `false` if not.

> [!NOTE]
> The default namespace of an HTML element is always `""`. For a SVG element, it is set by the `xmlns` attribute.

## Syntax

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Parameters

- `namespaceURI`
  - : A string representing the namespace against which the element will be checked.
    > [!NOTE]
    > `namespaceURI` is not an optional parameter, but can be `null`.

### Return value

A boolean value that holds the return value `true` or `false`, indicating if the parameter is the default namespace, or not.

## Example

```html
Is "" the default namespace for &lt;output&gt;:
<output>Not tested</output>.<br />
Is "http://www.w3.org/2000/svg" the default namespace for &lt;output&gt;:
<output>Not tested</output>.<br />
Is "" the default namespace for &lt;svg&gt;: <output>Not tested</output>.<br />
Is "http://www.w3.org/2000/svg" the default namespace for &lt;svg&gt;:
<output>Not tested</output>.<br />
<svg xmlns="http://www.w3.org/2000/svg" height="1"></svg>
<button>Click to run tests</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const htmlElt = document.querySelector("output");
  const svgElt = document.querySelector("svg");

  const result = document.getElementsByTagName("output");
  result[0].value = htmlElt.isDefaultNamespace(""); // true
  result[1].value = htmlElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // false
  result[2].value = svgElt.isDefaultNamespace(""); // false
  result[3].value = svgElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // true
});
```

{{ EmbedLiveSample('Example','100%',130) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.lookupNamespaceURI")}}
- {{domxref("Node.lookupPrefix")}}
