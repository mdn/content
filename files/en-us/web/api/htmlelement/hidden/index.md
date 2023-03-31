---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
page-type: web-api-instance-property
browser-compat: api.HTMLElement.hidden
---

{{ APIRef("HTML DOM") }}

The {{domxref("HTMLElement")}} property **`hidden`** reflects the value of the element's [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute.

## Value

This attribute may have one of three values:

- `true`
  - : The element is hidden.
- `false`
  - : The element is not hidden. This is the default value for the attribute.
- `"until-found"`
  - : The element is _hidden until found_, meaning that it is hidden but will be revealed if found through in page search or reached through fragment navigation.

For details on the usage of this attribute, see the page for the [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) HTML attribute that this property reflects.

## Examples

Here's an example where a hidden block is used to contain a 'thank you' message that is
displayed after a user agrees to an unusual request.

### HTML

The HTML contains two panels: a welcome panel, that asks users to agree to be awesome, and a follow-up panel, which is initially hidden.

```html
<div id="welcome" class="panel">
  <h1>Welcome to Foobar.com!</h1>
  <p>By clicking "OK" you agree to be awesome today!</p>
  <button class="button" id="okButton">OK</button>
</div>

<div id="awesome" class="panel" hidden>
  <h1>Thanks!</h1>
  <p>Thanks for agreeing to be awesome today!</p>
</div>
```

### CSS

The content is styled using the CSS below.

```css
.panel {
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font: 22px "Open Sans", Helvetica, Arial, sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### JavaScript

The JavaScript adds an event listener to the "OK" button, which hides the "welcome" panel and shows the "awesome" panel:

```js
document.getElementById("okButton").addEventListener(
  "click",
  () => {
    document.getElementById("welcome").hidden = true;
    document.getElementById("awesome").hidden = false;
  },
  false
);
```

### Result

{{ EmbedLiveSample('Examples', 560, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [hidden](/en-US/docs/Web/HTML/Global_attributes#hidden) attribute
- {{cssxref("display")}}
