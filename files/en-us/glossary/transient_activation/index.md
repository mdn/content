---
title: Transient activation
slug: Glossary/Transient_activation
tags:
  - Transient activation
  - Glossary
  - JavaScript
---
**Transient activation** (or "transient user activation") is a window state that indicates a user has recently pressed a button, moved a mouse, used a menu, or performed some other user interaction.

This state is sometimes used as a mechanism for ensuring that a web API can only function if triggered by user interaction.
For example, scripts cannot arbitrarily launch a popup that requires _transient activation_ ⁠—it must be triggered from a UI element's event handler.

Examples of APIs that require _transient activation_ are:

- {{domxref("MediaDevices.selectAudioOutput()")}}

> **Note:** Transient activation expires after a timeout (if not renewed by further interaction), and may also be "consumed" by some APIs.

## See also

- {{domxref("MediaDevices.selectAudioOutput()")}}
- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
