---
title: Replay attack
slug: Glossary/Replay_attack
---

{{GlossarySidebar}}

In web security, a _replay attack_ happens when an attacker intercepts a previously-sent message and resends it later to get the same credentials as the original message, potentially with a different payload or instruction.

Replay attacks can be prevented by including a unique, single-use identifier with each message that the receiver can use to verify the authenticity of the transmission. This identifier can take the form of a session token or "number used only once" ("nonce").

## See also

- [Replay attack](https://en.wikipedia.org/wiki/Replay_attack) on Wikipedia.
