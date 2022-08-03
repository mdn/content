---
title: CSP errors and warnings (Content Security Policy)
slug: Web/HTTP/CSP/Errors
tags:
  - CSP
  - Errors
  - HTTP
  - Landing
  - Messages
  - Warnings
  - console
  - log
---
{{HTTPSidebar}}

When you see any of the following messages logged in the browser devtools console, it indicates that a problem related to [CSP](/en-US/docs/Web/HTTP/CSP) has occurred.

- [The page's settings blocked the loading of a resource: %1$S](/en-US/docs/Web/HTTP/CSP/Errors/CSPViolation)
- The page's settings blocked the loading of a resource at %2$S ("%1$S").
- A violation occurred for a report-only CSP policy ("%1$S"). The behavior was allowed, and a CSP report was sent.
- The page's settings observed the loading of a resource at %2$S ("%1$S"). A CSP report is being sent.
- Tried to send report to invalid URI: "%1$S"
- Couldn't parse report URI: %1$S
- Couldn't process unknown directive '%1$S'
- Ignoring unknown option %1$S
- Ignoring duplicate source %1$S
- Ignoring source '%1$S' (Not supported when delivered via meta element).
- Ignoring "%1$S" within script-src or style-src: nonce-source or hash-source specified
- Ignoring "%1$S" within script-src: 'strict-dynamic' specified
- Ignoring source "%1$S" (Only supported within script-src).
- Keyword 'strict-dynamic' within "%1$S" with no valid nonce or hash might block all scripts from loading
- The report URI (%1$S) should be an HTTP or HTTPS URI.
- This site (%1$S) has a Report-Only policy without a report URI. CSP will not block and cannot report violations of this policy.
- Failed to parse unrecognized source %1$S
- An attempt to execute inline scripts has been blocked
- An attempt to apply inline style sheets has been blocked
- An attempt to call JavaScript from a string (by calling a function like eval) has been blocked
- Upgrading insecure request '%1$S' to use '%2$S'
- Ignoring srcs for directive '%1$S'
- Interpreting %1$S as a hostname, not a keyword. If you intended this to be a keyword, use '%2$S' (wrapped in single quotes).
- Not supporting directive '%1$S'. Directive and values will be ignored.
- Blocking insecure request '%1$S'.(/en-US/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- Ignoring '%1$S' since it does not contain any parameters.
- Ignoring sandbox directive when delivered in a report-only policy '%1$S'
- Referrer Directive '%1$S' has been deprecated. Please use the Referrer-Policy header instead.
- Ignoring '%1$S' because of '%2$S' directive.
- Couldn't parse invalid source %1$S
- Couldn't parse invalid host %1$S
- Couldn't parse scheme in %1$S
- Couldn't parse port in %1$S
- Duplicate %1$S directives detected. All but the first instance will be ignored.
- Directive '%1$S' has been deprecated. Please use directive 'worker-src' to control workers, or directive 'frame-src' to control frames respectively.
- Couldn't parse invalid sandbox flag '%1$S'
