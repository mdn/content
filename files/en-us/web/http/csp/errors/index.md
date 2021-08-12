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
<p>{{HTTPSidebar}}{{draft}}</p>

<p>This page will be a parent for reference articles about CSP errors and warnings, and will provide an overview of them, and generic troubleshooting advice, if possible.</p>

<h2 id="The_errors">The errors</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/CSPViolation">The page’s settings blocked the loading of a resource: %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/CSPViolationWithURI">The page’s settings blocked the loading of a resource at %2$S (“%1$S”).</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/CSPROViolation">A violation occurred for a report-only CSP policy (“%1$S”). The behavior was allowed, and a CSP report was sent.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/CSPROViolationWithURI">The page’s settings observed the loading of a resource at %2$S (“%1$S”). A CSP report is being sent.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/triedToSendReport">Tried to send report to invalid URI: “%1$S”</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldNotParseReportURI">couldn’t parse report URI: %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldNotProcessUnknownDirective">Couldn’t process unknown directive ‘%1$S’</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringUnknownOption">Ignoring unknown option %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringDuplicateSrc">Ignoring duplicate source %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringSrcFromMetaCSP">Ignoring source ‘%1$S’ (Not supported when delivered via meta element).</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringSrcWithinScriptStyleSrc">Ignoring “%1$S” within script-src or style-src: nonce-source or hash-source specified</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringSrcForStrictDynamic">Ignoring “%1$S” within script-src: ‘strict-dynamic’ specified</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringStrictDynamic">Ignoring source “%1$S” (Only supported within script-src).</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/strictDynamicButNoHashOrNonce">Keyword ‘strict-dynamic’ within “%1$S” with no valid nonce or hash might block all scripts from loading</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/reportURInotHttpsOrHttp2">The report URI (%1$S) should be an HTTP or HTTPS URI.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/reportURInotInReportOnlyHeader">This site (%1$S) has a Report-Only policy without a report URI. CSP will not block and cannot report violations of this policy.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/failedToParseUnrecognizedSource">Failed to parse unrecognized source %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/inlineScriptBlocked">An attempt to execute inline scripts has been blocked</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/inlineStyleBlocked">An attempt to apply inline style sheets has been blocked</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/scriptFromStringBlocked">An attempt to call JavaScript from a string (by calling a function like eval) has been blocked</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/upgradeInsecureRequest">Upgrading insecure request ‘%1$S’ to use ‘%2$S’</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoreSrcForDirective">Ignoring srcs for directive ‘%1$S’</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/hostNameMightBeKeyword">Interpreting %1$S as a hostname, not a keyword. If you intended this to be a keyword, use ‘%2$S’ (wrapped in single quotes).</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/notSupportingDirective">Not supporting directive ‘%1$S’. Directive and values will be ignored.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/blockAllMixedContent">Blocking insecure request ‘%1$S’.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringDirectiveWithNoValues">Ignoring ‘%1$S’ since it does not contain any parameters.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/ignoringReportOnlyDirective">Ignoring sandbox directive when delivered in a report-only policy ‘%1$S’</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/deprecatedReferrerDirective">Referrer Directive ‘%1$S’ has been deprecated. Please use the Referrer-Policy header instead.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/IgnoringSrcBecauseOfDirective">Ignoring ‘%1$S’ because of ‘%2$S’ directive.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldntParseInvalidSource">Couldn’t parse invalid source %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldntParseInvalidHost">Couldn’t parse invalid host %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldntParseScheme">Couldn’t parse scheme in %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldntParsePort">Couldn’t parse port in %1$S</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/duplicateDirective">Duplicate %1$S directives detected. All but the first instance will be ignored.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/deprecatedChildSrcDirective">Directive ‘%1$S’ has been deprecated. Please use directive ‘worker-src’ to control workers, or directive ‘frame-src’ to control frames respectively.</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors/couldntParseInvalidSandboxFlag">Couldn’t parse invalid sandbox flag ‘%1$S’</a></li>
</ul>
