---
title: Sticky activation
slug: Glossary/Sticky_activation
page-type: glossary-definition
sidebar: glossarysidebar
---

**Sticky activation** (or "sticky user activation") is a window state that indicates a user has meaningfully and directly interacted with the window since page load.
Once active, the state lasts for the duration of the session.

The state is enabled following any user interaction, when the window has focus, that results in the browser generating one or more of the following:

- A `mousedown` or `pointerdown` event for a mouse.
- A `pointerup` event for any other kind of pointer.
- A `touchend` event.
- A `keydown` event, other than for the escape or browser shortcut keys.

The window is not user-activated by events that aren't necessarily caused by intentional interaction with the window, such as mouse move events or `wheel` events.

Sticky activation is used to control access to certain features, blocking them if the user hasn't interacted with the page.
For example, it can be used to ensure that controlled features in cross-origin frames don't run code on page load.
See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for more information.

The {{domxref("UserActivation.hasBeenActive")}} property can be used to programmatically check the current window's sticky activation state.

## Comparison between sticky and transient activation

The difference between sticky and {{Glossary("transient activation")}} is that transient activation only lasts for a short while, and may in some cases be consumed (deactivated) when a protected feature is used.

While the presence of sticky activation is primarily used to prevent features automatically being available on page load, transient activation is used to ensure that features are allowed only if directly triggered by a user.

## See also

- Related glossary terms:
  - {{Glossary("Transient activation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
