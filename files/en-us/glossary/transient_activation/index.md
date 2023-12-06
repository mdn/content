---
title: Transient activation
slug: Glossary/Transient_activation
page-type: glossary-definition
---

{{GlossarySidebar}}

**Transient activation** (or "transient user activation") is a window state that indicates a user has recently pressed a button, moved a mouse, used a menu, or performed some other user interaction.

This state is sometimes used as a mechanism for ensuring that a web API can only function if triggered by user interaction.
For example, scripts cannot arbitrarily launch a popup that requires _transient activation_ ⁠—it must be triggered from a UI element's event handler.

See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for examples of APIs that require _transient activation_.

See the {{domxref("UserActivation.isActive")}} property to programmatically access the current window's transient activation state.

> **Note:** Transient activation expires after a timeout (if not renewed by further interaction), and may also be "consumed" by some APIs. See {{Glossary("Sticky activation")}} for a user activation that doesn't reset after it has been set initially.

## See also

- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- {{Glossary("Sticky activation")}}
- {{domxref("UserActivation.isActive")}}
