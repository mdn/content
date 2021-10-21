---
title: Plugin Roadmap for Firefox
slug: Plugins/Roadmap
---
Plugins are a security and performance problem for Firefox users. NPAPI plugins are an obsolete technology, and Mozilla has been moving toward a Web which doesn't need plugins.  The last remaining NPAPI plugin, Adobe Flash, has [announced](https://theblog.adobe.com/adobe-flash-update/) an end-of-life plan. To support the transition away from Flash, Firefox is working with other browsers to progressively and carefully make Flash usage less common. Below is the roadmap of past and future support for plugins in Firefox.

### Schedule

- June 2016
  - : Starting with Firefox 47 in June 2016, all plugins other than Adobe Flash are _click-to-activate_. Users choose which sites are allowed to activate each plugin. In addition, the 64-bit version of Firefox for Windows only supports the Flash plugin.
- March 2017
  - : Starting with Firefox 52 in March 2017, plugins other than Adobe Flash are no longer supported in Firefox. Firefox [Extended Support Release 52](https://www.mozilla.org/en-US/firefox/organizations/faq/) continued to support non-Flash plugins until mid-2018.
- August 2017

  - : Starting with Firefox 55 in August 2017, users must choose which sites are allowed to activate the Flash plugin. Users will have the choice to remember the Flash setting per-site. _This change was rolled out progressively during August and September 2017._

    In order to improve security and performance, Mozilla will [maintain a list of sites](/en-US/docs/Plugins/Blocking_By_Domain) which cannot use any plugins.

- September 2017
  - : Starting with Firefox 56 in September 2017, Firefox for Android removed all support for plugins ({{bug(1381916)}}).
- 2019
  - : In September 2019, Firefox 69 removed the "Always Activate" Flash option so Firefox always asks for the user's permission before activating Flash on a website.
- 2021

  - : In January 2021, [Firefox 85](/en-US/docs/Mozilla/Firefox/Releases/85) was the first Firefox version to ship without Flash support. Firefox now has new behavior when an attempt is made to embed an external object using the [`<object>`](/en-US/docs/Web/HTML/Element/object) or [`<embed>`](/en-US/docs/Web/HTML/Element/embed) elements:

    - If the element lists a MIME type other than `x-shockwave-flash` or `x-test` then the behavior is unchanged. This means that non-plugin types behave as expected and unknown types are displayed at a size of 0 x 0.
    - If an [`<object>`](/en-US/docs/Web/HTML/Element/object) element has an HTML fallback in the DOM then the fallback is shown as expected.
    - For `x-shockwave-flash` or `x-test` types, the element is shown as a transparent region with the size specified in its `width` and `height` attributes.

    See also [End of support for Adobe Flash](https://support.mozilla.org/en-US/kb/end-support-adobe-flash).

### See also

#### Mozilla Firefox

- October 2015 - [NPAPI Plugins in Firefox](https://blog.mozilla.org/futurereleases/2015/10/08/npapi-plugins-in-firefox/)
- July 2016 - [Reducing Adobe Flash Usage in Firefox](https://blog.mozilla.org/futurereleases/2016/07/20/reducing-adobe-flash-usage-in-firefox/)
- July 2017 - [Firefox Roadmap for Flash End-of-Life](https://blog.mozilla.org/futurereleases/2017/07/25/firefox-roadmap-flash-end-life/)

#### Adobe Flash

- November 2015 - [Flash, HTML5 and Open Web Standards](https://theblog.adobe.com/flash-html5-and-open-web-standards/)
- July 2017 - [Flash & the Future of Interactive Content](https://theblog.adobe.com/adobe-flash-update/)

#### Google Chrome

- [Flash Roadmap](https://sites.google.com/a/chromium.org/dev/flash-roadmap)
- Sep 2013 - [Saying Goodbye to Our Old Friend NPAPI](https://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html)
- May 2014 - [Update on NPAPI Deprecation](https://blog.chromium.org/2014/05/update-on-npapi-deprecation.html)
- November 2014 - [The Final Countdown for NPAPI](https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html)
- August 2016 - [Flash and Chrome](https://blog.google/products/chrome/flash-and-chrome/)
- December 2016 - [Roll-out plan for HTML5 by Default](https://blog.chromium.org/2016/12/roll-out-plan-for-html5-by-default.html)
- July 2017 - [Saying Goodbye to Flash in Chrome](https://www.blog.google/products/chrome/saying-goodbye-flash-chrome/)

#### Microsoft Edge and Internet Explorer

- April 2016 - [Putting Users in Control of Flash](https://blogs.windows.com/msedgedev/2016/04/07/putting-users-in-control-of-flash/)
- December 2016 - [Extending User Control of Flash with Click-to-Run](https://blogs.windows.com/msedgedev/2016/12/14/edge-flash-click-run/)
- July 2017 - [Flash on Windows Timeline](https://blogs.windows.com/msedgedev/2017/07/25/flash-on-windows-timeline/)
- August 2019 - [Update on removing Flash from Microsoft Edge and Internet Explorer](https://blogs.windows.com/msedgedev/2019/08/30/update-removing-flash-microsoft-edge-internet-explorer/)
- September 2020 - [Update on Adobe Flash Player End of Support](https://blogs.windows.com/msedgedev/2020/09/04/update-adobe-flash-end-support/)

#### Apple Safari

- June 2016 - [Next Steps for Legacy Plug-ins](https://webkit.org/blog/6589/next-steps-for-legacy-plug-ins/)
- July 2017 - [Adobe Announces Flash Distribution and Updates to End](https://webkit.org/blog/7839/adobe-announces-flash-distribution-and-updates-to-end/)
