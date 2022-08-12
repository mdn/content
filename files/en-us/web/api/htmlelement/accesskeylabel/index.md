---
title: HTMLElement.accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
page-type: web-api-instance-property
browser-compat: api.HTMLElement.accessKeyLabel
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.accessKeyLabel`**
read-only property returns a string containing the element's
browser-assigned access key (if any); otherwise it returns an empty string.

## Syntax

```js
label = element.accessKeyLabel
```

## Example

### JavaScript

```js
const btn = document.getElementById('btn1');
const shortcutLabel = btn.accessKeyLabel || btn.accessKey;
btn.title += ` [${shortcutLabel.toUpperCase()}]`;

btn.onclick = () => {
  const feedback = document.createElement('output');
  feedback.textContent = 'Pressed!';
  btn.insertAdjacentElement('afterend', feedback);
};
```

### HTML

```html
<button accesskey="h" title="Caption" id="btn1">Hover me</button>
```

### Result

{{ EmbedLiveSample('Example') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.accessKey")}}
- The [accesskey](/en-US/docs/Web/HTML/Global_attributes/accesskey) global
  attribute.
