---
title: Sticky activation
slug: Glossary/Sticky_activation
page-type: glossary-definition
---

{{GlossarySidebar}}

**Sticky activation** (or "sticky user activation") is a window state that indicates a user has pressed a button, moved a mouse, used a menu, or performed some other user interaction.

A page is considered "user activated" if a user is currently interacting with the page or has completed a touch, pointer, or keyboard interaction since page load. With sticky user activation, if activation is set it is not reset for the duration of the session (unlike {{Glossary("Transient activation")}}).

See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for examples of APIs that require _sticky activation_.

See the {{domxref("UserActivation.hasBeenActive")}} property to programmatically access the current window's sticky activation state.

## See also

- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- Related glossary terms:
  - {{Glossary("Transient activation")}}
- {{domxref("UserActivation.hasBeenActive")}}
