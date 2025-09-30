---
title: Transient activation
slug: Glossary/Transient_activation
page-type: glossary-definition
sidebar: glossarysidebar
---

**Transient activation** (or "transient user activation") is a window state that indicates a user has recently directly and meaningfully interacted with the window.

The state is enabled following any user interaction, when the window has focus, that results in the browser generating one or more of the following:

- A `mousedown` or `pointerdown` event for a mouse.
- A `pointerup` event for any other kind of pointer.
- A `touchend` event.
- A `keydown` event, other than for the escape or browser shortcut keys.

The window is not user-activated by events that aren't necessarily caused by intentional interaction with the window, such as mouse move events or `wheel` events.

Transient activation expires after a timeout (if not renewed by further interaction), and may also be consumed/deactivated after using some gated features (such as {{domxref("Window.open()")}}).

Transient activation is commonly used as a mechanism for ensuring that a web API can only function if triggered by user interaction.
For example, scripts cannot arbitrarily launch a popup that requires _transient activation_ ⁠— it must be triggered from a UI element's event handler.
See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for information about APIs that require _transient activation_.

The {{domxref("UserActivation.isActive")}} property can be used to programmatically check the current window's transient activation state.


## Comparison between transient and sticky activation

The difference between transient and {{Glossary("sticky activation")}} is that sticky activation persists from the first meaningful interaction until the end of the session.

While the presence of transient activation is used to ensure that features are only allowed if directly triggered by a user, sticky activation is primarily used to prevent features automatically being triggered on page load.

## See also

- Related glossary terms:
  - {{Glossary("Sticky activation")}}
- {{domxref("UserActivation.isActive")}}
- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
