---
title: style
slug: Web/HTML/Global_attributes/style
page-type: html-attribute
browser-compat: html.global_attributes.style
---

{{HTMLSidebar("Global_attributes")}}

The **`style`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the {{HTMLElement("style")}} element have mainly the purpose of allowing for quick styling, for example for testing purposes.

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

> [!NOTE]
> This attribute must not be used to convey semantic information. Even if all styling is removed, a page should remain semantically correct. Typically it shouldn't be used to hide irrelevant information; this should be done using the [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.style")}}
