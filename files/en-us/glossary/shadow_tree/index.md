---
title: Shadow tree
slug: Glossary/Shadow_tree
page-type: glossary-definition
---

{{GlossarySidebar}}

A **shadow tree** is a hidden set of {{Glossary("DOM")}} nodes whose topmost [node](/en-US/docs/Glossary/Node/DOM) is a **shadow root**. The shadow root is the topmost node of a **shadow DOM** and not part of the regular document's DOM tree.

The shadow root is attached to another node tree through a specific DOM node referred to as its **host**. This host may be part of another shadow tree or part of the regular DOM tree. The node tree of a shadow root's host is sometimes referred to as the **light tree**.

The hidden DOM nodes of a shadow tree are generally not affected by anything applied outside the shadow tree, and vice versa. The **shadow boundary**, where the shadow DOM ends and the regular DOM begins, can be traversed, but only very intentionally:

- Scripting shadow tree nodes from outside requires the use of a special [Shadow DOM API](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) to be accessed.
- Styling a shadow tree from outside can be achieved via [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) and [CSS shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts).

## See also

- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- {{domxref("Element.shadowRoot")}} and {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
- {{Glossary("accessibility_tree", "Accessibility tree")}}
