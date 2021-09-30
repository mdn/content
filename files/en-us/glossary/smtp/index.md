---
title: SMTP
slug: Glossary/SMTP
tags:
  - Beginner
  - Collaboration
  - Glossary
  - Infrastructure
  - Sharing
---
**SMTP** (Simple Mail Transfer Protocol) is a {{glossary("protocol")}} used to send a new email.  Like {{glossary("POP")}} and {{glossary("NNTP")}}, it is a {{Glossary("state machine")}}-driven protocol.

The protocol is relatively straightforward. Primary complications include supporting various authentication mechanisms ([GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, etc.), handling error responses, and falling back when authentication mechanisms fail (e.g., the server claims to support a mechanism, but doesn't).

## See also

- {{Interwiki("wikipedia", "SMTP")}} (Wikipedia)
- [Glossary](/en-US/docs/Glossary)

  - {{glossary("NNTP")}}
  - {{glossary("POP")}}
  - {{glossary("protocol")}}
  - {{Glossary("state machine")}}
