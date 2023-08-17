---
title: Top layer
slug: Glossary/Top_layer
page-type: glossary-definition
---

{{GlossarySidebar}}

The **top layer** is a specific layer in the [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), which spans the entire width and height of the viewport and sits on top of all other layers displayed in a web document. It is created by the browser to contain elements that should appear on top of all other content on the page.

Elements that will appear in the top layer include:

- Fullscreen elements, i.e. elements that have been caused to display in fullscreen mode by a successful {{domxref("Element.requestFullscreen()")}} call.
- {{htmlelement("dialog")}} elements displayed as a modal via a successful {{domxref("HTMLDialogElement.showModal()")}} call.
- Popover elements shown via a successful {{domxref("HTMLElement.showPopover()")}} call.

The following screenshot demonstrates how a shown popover element is placed in the top layer in Chrome:

![An element in the top layer, as shown in the chrome devtools](top_layer_devtools.png)

## See also

- [The stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [The Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [The Popover API](/en-US/docs/Web/API/Popover_API)
