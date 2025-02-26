---
title: Fingerprinting
slug: Glossary/Fingerprinting
page-type: glossary-definition
---

{{GlossarySidebar}}

**Fingerprinting** is a practice in which websites identify a particular browser (and by extension, a particular user) by collecting and combining distinguishing features of the browser and underlying operating system. Elements of a fingerprint might include, for example:

- the browser version
- the timezone and preferred language
- the set of video or audio codecs that are available on the system
- the fonts installed on the system
- the state of the browser's settings
- the computer's display size and resolution

A website can retrieve information like this by executing JavaScript and CSS on the device, and by combining this data can often create a unique fingerprint for a browser, which can then be used to track users across the web.

Web standards are designed in such a way as to minimize the ability of a website to collect identifying information, and browsers typically add their own protections as well.

## See also

- [Cover Your Tracks](https://coveryourtracks.eff.org/): a tool to show the data a website can use to fingerprint your browser.
- [Mitigating Browser Fingerprinting in Web Specifications](https://www.w3.org/TR/fingerprinting-guidance/): best practices for specification authors to prevent fingerprinting.
