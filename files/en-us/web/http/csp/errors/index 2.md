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
{{HTTPSidebar}}{{draft}}

This page will be a parent for reference articles about CSP errors and warnings, and will provide an overview of them, and generic troubleshooting advice, if possible.

## The errors

- [The page’s settings blocked the loading of a resource: %1$S](/en-US/docs/Web/HTTP/CSP/Errors/CSPViolation)
- [The page’s settings blocked the loading of a resource at %2$S (“%1$S”).](/en-US/docs/Web/HTTP/CSP/Errors/CSPViolationWithURI)
- [A violation occurred for a report-only CSP policy (“%1$S”). The behavior was allowed, and a CSP report was sent.](/en-US/docs/Web/HTTP/CSP/Errors/CSPROViolation)
- [The page’s settings observed the loading of a resource at %2$S (“%1$S”). A CSP report is being sent.](/en-US/docs/Web/HTTP/CSP/Errors/CSPROViolationWithURI)
- [Tried to send report to invalid URI: “%1$S”](/en-US/docs/Web/HTTP/CSP/Errors/triedToSendReport)
- [couldn’t parse report URI: %1$S](/en-US/docs/Web/HTTP/CSP/Errors/couldNotParseReportURI)
- [Couldn’t process unknown directive ‘%1$S’](/en-US/docs/Web/HTTP/CSP/Errors/couldNotProcessUnknownDirective)
- [Ignoring unknown option %1$S](/en-US/docs/Web/HTTP/CSP/Errors/ignoringUnknownOption)
- [Ignoring duplicate source %1$S](/en-US/docs/Web/HTTP/CSP/Errors/ignoringDuplicateSrc)
- [Ignoring source ‘%1$S’ (Not supported when delivered via meta element).](/en-US/docs/Web/HTTP/CSP/Errors/ignoringSrcFromMetaCSP)
- [Ignoring “%1$S” within script-src or style-src: nonce-source or hash-source specified](/en-US/docs/Web/HTTP/CSP/Errors/ignoringSrcWithinScriptStyleSrc)
- [Ignoring “%1$S” within script-src: ‘strict-dynamic’ specified](/en-US/docs/Web/HTTP/CSP/Errors/ignoringSrcForStrictDynamic)
- [Ignoring source “%1$S” (Only supported within script-src).](/en-US/docs/Web/HTTP/CSP/Errors/ignoringStrictDynamic)
- [Keyword ‘strict-dynamic’ within “%1$S” with no valid nonce or hash might block all scripts from loading](/en-US/docs/Web/HTTP/CSP/Errors/strictDynamicButNoHashOrNonce)
- [The report URI (%1$S) should be an HTTP or HTTPS URI.](/en-US/docs/Web/HTTP/CSP/Errors/reportURInotHttpsOrHttp2)
- [This site (%1$S) has a Report-Only policy without a report URI. CSP will not block and cannot report violations of this policy.](/en-US/docs/Web/HTTP/CSP/Errors/reportURInotInReportOnlyHeader)
- [Failed to parse unrecognized source %1$S](/en-US/docs/Web/HTTP/CSP/Errors/failedToParseUnrecognizedSource)
- [An attempt to execute inline scripts has been blocked](/en-US/docs/Web/HTTP/CSP/Errors/inlineScriptBlocked)
- [An attempt to apply inline style sheets has been blocked](/en-US/docs/Web/HTTP/CSP/Errors/inlineStyleBlocked)
- [An attempt to call JavaScript from a string (by calling a function like eval) has been blocked](/en-US/docs/Web/HTTP/CSP/Errors/scriptFromStringBlocked)
- [Upgrading insecure request ‘%1$S’ to use ‘%2$S’](/en-US/docs/Web/HTTP/CSP/Errors/upgradeInsecureRequest)
- [Ignoring srcs for directive ‘%1$S’](/en-US/docs/Web/HTTP/CSP/Errors/ignoreSrcForDirective)
- [Interpreting %1$S as a hostname, not a keyword. If you intended this to be a keyword, use ‘%2$S’ (wrapped in single quotes).](/en-US/docs/Web/HTTP/CSP/Errors/hostNameMightBeKeyword)
- [Not supporting directive ‘%1$S’. Directive and values will be ignored.](/en-US/docs/Web/HTTP/CSP/Errors/notSupportingDirective)
- [Blocking insecure request ‘%1$S’.](/en-US/docs/Web/HTTP/CSP/Errors/blockAllMixedContent)
- [Ignoring ‘%1$S’ since it does not contain any parameters.](/en-US/docs/Web/HTTP/CSP/Errors/ignoringDirectiveWithNoValues)
- [Ignoring sandbox directive when delivered in a report-only policy ‘%1$S’](/en-US/docs/Web/HTTP/CSP/Errors/ignoringReportOnlyDirective)
- [Referrer Directive ‘%1$S’ has been deprecated. Please use the Referrer-Policy header instead.](/en-US/docs/Web/HTTP/CSP/Errors/deprecatedReferrerDirective)
- [Ignoring ‘%1$S’ because of ‘%2$S’ directive.](/en-US/docs/Web/HTTP/CSP/Errors/IgnoringSrcBecauseOfDirective)
- [Couldn’t parse invalid source %1$S](/en-US/docs/Web/HTTP/CSP/Errors/couldntParseInvalidSource)
- [Couldn’t parse invalid host %1$S](/en-US/docs/Web/HTTP/CSP/Errors/couldntParseInvalidHost)
- [Couldn’t parse scheme in %1$S](/en-US/docs/Web/HTTP/CSP/Errors/couldntParseScheme)
- [Couldn’t parse port in %1$S](/en-US/docs/Web/HTTP/CSP/Errors/couldntParsePort)
- [Duplicate %1$S directives detected. All but the first instance will be ignored.](/en-US/docs/Web/HTTP/CSP/Errors/duplicateDirective)
- [Directive ‘%1$S’ has been deprecated. Please use directive ‘worker-src’ to control workers, or directive ‘frame-src’ to control frames respectively.](/en-US/docs/Web/HTTP/CSP/Errors/deprecatedChildSrcDirective)
- [Couldn’t parse invalid sandbox flag ‘%1$S’](/en-US/docs/Web/HTTP/CSP/Errors/couldntParseInvalidSandboxFlag)
