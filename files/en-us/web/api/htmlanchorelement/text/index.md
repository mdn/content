---
title: "HTMLAnchorElement: text property"
short-title: text
slug: Web/API/HTMLAnchorElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.text
---

{{ApiRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLAnchorElement")}} represents the text inside the element.
This property represents the same information as {{domxref("Node.textContent")}}.

## Value

A string.

## Example

```html
<a id="exampleLink" href="https://example.com">Example Link</a>
<p class="text"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".text");
pTag.textContent = `Text property: ${anchorElement.text}`;
```

### Result

{{EmbedLiveSample("Example",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.text")}} property
- {{domxref("HTMLOptionElement.text")}} property
