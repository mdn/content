---
title: Replay attack
slug: Glossary/Replay_attack
tags:
  - Security
---

In web security, a _replay attack_ is when an attacker intercepts a previously-sent message and resends it at a later time to get the same credentials as the original message, potentially with a different payload or instruction.

Replay attacks can be prevented by including a unique, single-use identifier with each message that can be used by the receiver to verify the authenticity of the transmission. This can take the form of a session token or "number used only once" ("nonce").

## See also

- [Replay attack](https://en.wikipedia.org/wiki/Replay_attack) on Wikipedia.
