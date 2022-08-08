---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
page-type: web-api-instance-property
tags:
  - API
  - Attribute
  - Element
  - HTML
  - HTML element
  - Property
  - Reference
  - hidden
browser-compat: api.HTMLElement.hidden
---
{{ APIRef("HTML DOM") }}

The {{domxref("HTMLElement")}} property
**`hidden`** is a boolean value which is
`true` if the element is hidden; otherwise the value is `false`.
This is quite different from using the CSS property {{cssxref("display")}} to control
the visibility of an element.

The `hidden` property applies to all
presentation modes and should not be used to hide content that is meant to be directly
accessible to the user.

Appropriate use cases for `hidden` include:

- Content that isn't yet relevant but may be needed later
- Content that was previously needed but is not any longer
- Content that is reused by other parts of the page in a template-like fashion
- Creating an offscreen canvas as a drawing buffer

Inappropriate use cases include:

- Hiding panels in a tabbed dialog box
- Hiding content in one presentation while intending it to be visible in others

> **Note:** Elements that are not `hidden` must not link to elements which are.

## Value

A Boolean which is `true` if the element is hidden from view; otherwise, the
value is `false`.

## Examples

Here's an example where a hidden block is used to contain a thank you message that is
displayed after a user agrees to an unusual request.

### JavaScript

```js
document.getElementById("okButton")
        .addEventListener("click", () => {
  document.getElementById("welcome").hidden = true;
  document.getElementById("awesome").hidden = false;
}, false);
```

This code sets up a handler for the welcome panel's "OK" button that hides the welcome
panel and makes the follow-up panel—with the curious name "awesome"—visible in its
place.

### HTML

The HTML for the two boxes are shown here.

#### The welcome panel

```html
<div id="welcome" class="panel">
  <h1>Welcome to Foobar.com!</h1>
  <p>By clicking "OK" you agree to be awesome every day!</p>
  <button class="button" id="okButton">OK</button>
</div>
```

This HTML creates a panel (in a {{HTMLElement("div")}} block) that welcomes the user to
a site and tells them what they're agreeing to by clicking the OK button.

#### The follow-up panel

Once the user clicks the "OK" button in the welcome panel, the JavaScript code swaps
the two panels by changing their respective values for `hidden`. The
follow-up panel looks like this in HTML:

```html
<div id="awesome" class="panel" hidden>
  <h1>Thanks!</h1>
  <p>Thank you <strong>so</strong> much for agreeing to be
  awesome today! Now get out there and do awesome things
  awesomely to make the world more awesome!</p>
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

### Result

{{ EmbedLiveSample('Examples', 560, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlattrxref("hidden")}} attribute
- {{cssxref("display")}}
