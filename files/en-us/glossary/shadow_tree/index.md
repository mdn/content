---
title: Shadow tree
slug: Glossary/Shadow_tree
page-type: glossary-definition
---

{{GlossarySidebar}}

A **shadow tree** is a tree of {{Glossary("DOM")}} nodes whose topmost [node](/en-US/docs/Glossary/Node/DOM) is a **shadow root**; that is, the topmost node within a **shadow DOM**. A shadow tree is a hidden set of standard DOM nodes which is attached to a standard DOM node that serves as a host. The hidden nodes are not directly visible using regular DOM functionality. They require the use of a special [Shadow DOM API](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) to be accessed.

By default, nodes within the shadow tree are not affected by anything applied outside the shadow tree, and vice versa. This provides a way to encapsulate implementation details, which is especially useful for custom elements and other advanced design paradigms. The shadow boundary, where the shadow DOM ends and the regular DOM begins, can be traversed, but only very intentionally, via [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping).

## See also

- {{Glossary("accessibility_tree", "Accessibility tree")}}
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- {{domxref("Element.shadowRoot")}} and {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
- [CSS shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module
