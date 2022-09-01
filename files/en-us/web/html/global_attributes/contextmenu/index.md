---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
tags:
  - Deprecated
  - Global attributes
  - HTML
  - Reference
  - contextmenu
  - Non-standard
browser-compat: html.global_attributes.contextmenu
---

{{HTMLSidebar("Global_attributes")}}{{Deprecated_Header}}{{Non-standard_header}}

> **Warning:** The [contextmenu attribute is obsolete](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) and will be removed from all browsers

The **`contextmenu`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is the [**id**](/en-US/docs/Web/HTML/Global_attributes/id) of a {{HTMLElement("menu")}} to use as the contextual menu for this element.

A _context menu_ is a menu that appears upon user interaction, such as a right-click. HTML now allows us to customize this menu. Here are some implementation examples, including nested menus.

## Example

### HTML

```html
<body contextmenu="share">
  <menu type="context" id="share">
    <menu label="share">
      <menuitem label="Twitter" onclick="shareViaTwitter()"></menuitem>
      <menuitem label="Facebook" onclick="shareViaFacebook()"></menuitem>
    </menu>
  </menu>
  <ol>
    <li>
      Anywhere in the example you can share the page on Twitter and
      Facebook using the Share menu from your context menu.
    </li>
    <li contextmenu="changeFont" id="fontSizing">
      On this specific list element, you can change the size of the text
      by using the "Increase/Decrease font" actions from your context menu
    </li>
    <menu type="context" id="changeFont">
      <menuitem label="Increase Font" onclick="incFont()"></menuitem>
      <menuitem label="Decrease Font" onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">
      On the image below, you can fire the "Change Image" action
      in your Context Menu.<br />
      <img src="promobutton_mdn5.png"
          contextmenu="ChangeImage" id="promoButton" />
      <menu type="context" id="ChangeImage">
        <menuitem label="Change Image" onclick="changeImage()"></menuitem>
      </menu>
    </li>
  </ol>
</body>
```

### JavaScript

```js
function shareViaTwitter() {
  window.open("https://twitter.com/intent/tweet?text=" +
      "Hurray! I am learning ContextMenu from MDN via Mozilla");
}

function shareViaFacebook() {
  window.open("https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus");
}

function incFont() {
  document.getElementById("fontSizing").style.fontSize = "larger";
}

function decFont() {
  document.getElementById("fontSizing").style.fontSize = "smaller";
}

function changeImage() {
  const index = Math.ceil(Math.random() * 39 + 1);
  document.images[0].src = `${index}.png`;
}
```

### Result

{{EmbedLiveSample("Example", "100%", 400)}}

## Specifications

The [contextmenu attribute is obsolete](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) and will be removed from all browsers.

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contextMenu")}}
