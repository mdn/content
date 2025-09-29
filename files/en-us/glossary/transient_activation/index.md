---
title: Transient activation
slug: Glossary/Transient_activation
page-type: glossary-definition
sidebar: glossarysidebar
---

**Transient activation** (or "transient user activation") is a window state that indicates a user has recently directly and meaningfully interacted with the window.

The state is enabled following any user interaction that results in the browser generating a `mousedown` or `pointerdown` event for a mouse, a `pointerup` event for any other kind of pointer, a `touchend` event, or a `keydown` event (other than for the escape or browser shortcut keys) when the window has focus.
The window is not user activated by events that don't indicate intentional interaction with the window, such as mouse move events or `wheel` events.
Transient activation expires after a timeout (if not renewed by further interaction), and may also be "consumed" by some APIs.

Transient activation is commonly used as a mechanism for ensuring that a web API can only function if triggered by user interaction.
For example, scripts cannot arbitrarily launch a popup that requires _transient activation_ ⁠— it must be triggered from a UI element's event handler.
See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for information about APIs that require _transient activation_.

The {{domxref("UserActivation.isActive")}} property can be used to programmatically check the current window's transient activation state.

> [!NOTE]
> See {{Glossary("Sticky activation")}} for a user activation that persists for the duration of the session.

## See also

- Related glossary terms:
  - {{Glossary("Sticky activation")}}
- {{domxref("UserActivation.isActive")}}
- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
