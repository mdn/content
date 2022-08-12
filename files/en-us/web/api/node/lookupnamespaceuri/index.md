---
title: Node.lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.Node.lookupNamespaceURI
---
{{APIRef("DOM")}}

The **`lookupNamespaceURI()`** method of the {{domxref("Node")}} interface
takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and
`null` if not).

## Syntax

```js
lookupNamespaceURI(prefix);
```

### Parameters

- `prefix`
  - : The prefix to look for.
    > **Note:** This parameter is not optional, but can be set to `null`.

### Return value

A string containing the namespace URI corresponding to the prefix.
If the prefix is not found, it returns `null`.
If the requested `prefix` is `null`, it returns the default namespace URI.

## Example

```html
Namespace URL for <code>xlink</code> on &lt;output&gt;: <output>Not tested</output>.<br/>
Namespace URL for <code>xml</code> on &lt;output&gt;: <output>Not tested</output>.<br/>
Namespace URL for <code>html</code> on &lt;output&gt;: <output>Not tested</output>.<br/>
Namespace URL for <code>``</code> on &lt;output&gt;: <output>Not tested</output>.<br/>
Namespace URL for <code>svg</code> on &lt;svg&gt;: <output>Not tested</output>.<br/>
Namespace URL for <code>xlink</code> on &lt;svg&gt;: <output>Not tested</output>.<br/>
Namespace URL for <code>xml</code> on &lt;svg&gt;: <output>Not tested</output>.<br/>
<svg xmlns:svg="http://www.w3.org/2000/svg" height="1"></svg>
<button>Click to see the results</button>
```

```js
const button = document.querySelector('button');
button.addEventListener("click", () => {
  const aHtmlElt = document.querySelector('output');
  const aSvgElt = document.querySelector('svg');

  const result = document.getElementsByTagName('output');
  result[0].value = aHtmlElt.lookupNamespaceURI("xlink");
  result[1].value = aHtmlElt.lookupNamespaceURI("xml");
  result[2].value = aHtmlElt.lookupNamespaceURI("html");
  result[3].value = aHtmlElt.lookupNamespaceURI("");
  result[4].value = aSvgElt.lookupNamespaceURI("svg");
  result[5].value = aSvgElt.lookupNamespaceURI("xlink");
  result[6].value = aSvgElt.lookupNamespaceURI("xml");
});
```

{{ EmbedLiveSample('Example','100%',190) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.lookupPrefix")}}
- {{domxref("Node.isDefaultNameSpace")}}
