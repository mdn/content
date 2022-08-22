---
title: User agent
slug: Glossary/User_agent
tags:
  - Browser
  - Glossary
  - UA
  - User-agent
  - Web Browser
  - WebMechanics
  - agent
  - user agent
  - userAgent
---
A user agent is a computer program representing a person, for example, a {{Glossary("Browser","browser")}} in a {{Glossary("World Wide Web", "Web")}} context.

Besides a browser, a user agent could be a bot scraping webpages, a download manager, or another app accessing the Web. Along with each request they make to the server, browsers include a self-identifying {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} header called a user agent (UA) string. This string often identifies the browser, its version number, and its host operating system.

Spam bots, download managers, and some browsers often send a fake UA string to announce themselves as a different client. This is known as _user agent spoofing_.

The user agent string can be accessed with {{Glossary("JavaScript")}} on the client side using the {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}} property.

A typical user agent string looks like this: `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

## See also

- [User agent](https://en.wikipedia.org/wiki/User_agent) on Wikipedia
- {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: The `User-Agent` header
- [Glossary:](/en-US/docs/Glossary)

  - {{Glossary("Browser")}}

- HTTP Headers

  - {{HTTPHeader("User-agent")}}
