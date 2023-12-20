---
title: How to fix a website with blocked mixed content
slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

Starting with [Firefox 23](/en-US/docs/Mozilla/Firefox/Releases/23), Firefox blocks [active mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_active_content) by default. This follows a practice adopted by [Chrome](https://security.googleblog.com/2011/06/trying-to-end-mixed-scripting.html?m=1).

This page explains what you should be aware of as a web developer.

## Your website may break

If your website delivers HTTPS pages, all [active mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_active_content) delivered via HTTP on this pages will be blocked by default. Consequently, your website may appear broken to users (if iframes or plugins don't load, etc.). [Passive mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_passivedisplay_content) is displayed by default, but users can set a preference to block this type of content, as well.

Note that since mixed content blocking already happens in Chrome, it is very likely that if your website works in Chrome, it will work equally well in Firefox with mixed content blocking.

In any case, the best way to know if something is broken in Firefox is to download the [latest Firefox Edition](https://www.mozilla.org/en-US/firefox/developer/), open different pages on your website with the [web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) open (enable the "Security" messages) and see if anything related to mixed content is reported. Or use a free online crawler like [SSL-check](https://www.jitbit.com/sslcheck/) or [Missing Padlock](https://www.missingpadlock.com), a desktop crawler like [HTTPSChecker](https://httpschecker.net/how-it-works), or a CLI tool like [mcdetect](https://github.com/agis/mcdetect) to check your website recursively and find links to insecure content. If nothing is said about mixed content, your website is in good shape: Keep making excellent websites!

## How to fix your website

The best strategy to avoid mixed content blocking is to serve all the content as HTTPS instead of HTTP.

**For your own domain,** serve all content as HTTPS and fix your links. Often, the HTTPS version of the content already exists and this just requires adding an "s" to links - http\:// to https\://.

However, in some cases, the path may just be incorrect to the media in question. There are online as well as offline tools (depending on your operating system) such as [linkchecker](https://linkchecker.github.io/linkchecker/) to help resolve this.

**For other domains,** use the site's HTTPS version if available. If HTTPS is not available, you can try contacting the domain and asking them if they can make the content available via HTTPS.
