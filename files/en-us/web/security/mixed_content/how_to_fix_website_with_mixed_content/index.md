---
title: How to fix a website with blocked mixed content
slug: Web/Security/Mixed_content/How_to_fix_website_with_mixed_content
tags:
  - HTTPS
  - Security
---
<p>Starting with <a href="/en-US/docs/Mozilla/Firefox/Releases/23">Firefox 23</a>, Firefox blocks <a href="/en-US/docs/Security/MixedContent#Mixed_active_content">active mixed content</a> by default. This follows a practice adopted by Internet Explorer (<a href="http://blogs.msdn.com/b/ie/archive/2011/06/23/internet-explorer-9-security-part-4-protecting-consumers-from-malicious-mixed-content.aspx">since version 9</a>) and <a href="https://security.googleblog.com/2011/06/trying-to-end-mixed-scripting.html?m=1">Chrome</a>.</p>

<p>This page explains what you should be aware of as a web developer.</p>

<h2 id="Your_website_may_break">Your website may break</h2>

<p>If your website delivers HTTPS pages, all <a href="/en-US/docs/Security/MixedContent#Mixed_active_content">active mixed content</a> delivered via HTTP on this pages will be blocked by default. Consequently, your website may appear broken to users (if iframes or plugins don't load, etc.). <a href="/en-US/docs/Security/MixedContent#Mixed_passivedisplay_content">Passive mixed content</a> is displayed by default, but users can set a preference to block this type of content, as well.</p>

<p>Note that since mixed content blocking already happens in Chrome and Internet Explorer, it is very likely that if your website works in both of these browsers, it will work equally well in Firefox with mixed content blocking.</p>

<p>In any case, the best way to know if something is broken in Firefox is to download the <a href="https://www.mozilla.org/en-US/firefox/developer/">latest Firefox Edition</a>, open different pages on your website with the <a href="/en-US/docs/Tools/Web_Console">web console</a> open (enable the "Security" messages) and see if anything related to mixed content is reported. Or use a free online crawler like <a href="http://www.jitbit.com/sslcheck/">SSL-check</a> or <a href="https://www.missingpadlock.com">Missing Padlock</a>, a desktop crawler like <a href="https://httpschecker.net/how-it-works">HTTPSChecker</a>, or a CLI tool like <a href="https://github.com/agis/mcdetect">mcdetect</a> to check your website recursively and find links to insecure content. If nothing is said about mixed content, your website is in good shape: Keep making excellent websites!</p>

<h2 id="How_to_fix_your_website">How to fix your website</h2>

<p>The best strategy to avoid mixed content blocking is to serve all the content as HTTPS instead of HTTP.</p>

<p><strong>For your own domain,</strong> serve all content as HTTPS and fix your links.  Often, the HTTPS version of the content already exists and this just requires adding an "s" to links - http:// to https://.</p>

<p>However, in some cases, the path may just be incorrect to the media in question. There are online as well as offline tools (depending on your operating system) such as <a href="https://linkchecker.github.io/linkchecker/">linkchecker</a> to help resolve this.</p>

<p><strong>For other domains,</strong> use the site's HTTPS version if available. If HTTPS is not available, you can try contacting the domain and asking them if they can make the content available via HTTPS.</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}</p>
