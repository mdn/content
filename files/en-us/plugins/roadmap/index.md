---
title: Plugin Roadmap for Firefox
slug: Plugins/Roadmap
---
<p>Plugins are a security and performance problem for Firefox users. NPAPI plugins are an obsolete technology, and Mozilla has been moving toward a Web which doesn't need plugins.  The last remaining NPAPI plugin, Adobe Flash, has <a href="https://theblog.adobe.com/adobe-flash-update/">announced</a> an end-of-life plan. To support the transition away from Flash, Firefox is working with other browsers to progressively and carefully make Flash usage less common. Below is the roadmap of past and future support for plugins in Firefox.</p>

<h3 id="Schedule">Schedule</h3>

<dl>
 <dt>June 2016</dt>
 <dd><p>Starting with Firefox 47 in June 2016, all plugins other than Adobe Flash are <em>click-to-activate</em>. Users choose which sites are allowed to activate each plugin. In addition, the 64-bit version of Firefox for Windows only supports the Flash plugin.</p></dd>
 <dt>March 2017</dt>
 <dd><p>Starting with Firefox 52 in March 2017, plugins other than Adobe Flash are no longer supported in Firefox. Firefox <a href="https://www.mozilla.org/en-US/firefox/organizations/faq/">Extended Support Release 52</a> continued to support non-Flash plugins until mid-2018.</p></dd>
 <dt>August 2017</dt>
 <dd><p>Starting with Firefox 55 in August 2017, users must choose which sites are allowed to activate the Flash plugin. Users will have the choice to remember the Flash setting per-site. <em>This change was rolled out progressively during August and September 2017.</em></p>

 <p>In order to improve security and performance, Mozilla will <a href="/en-US/docs/Plugins/Blocking_By_Domain">maintain a list of sites</a> which cannot use any plugins.</p></dd>
 <dt>September 2017</dt>
 <dd><p>Starting with Firefox 56 in September 2017, Firefox for Android removed all support for plugins ({{bug(1381916)}}).</p></dd>
 <dt>2019</dt>
 <dd><p>In September 2019, Firefox 69 removed the "Always Activate" Flash option so Firefox always asks for the user's permission before activating Flash on a website.</p></dd>
 <dt>2021</dt>
 <dd><p>In January 2021, <a href="/en-US/docs/Mozilla/Firefox/Releases/85">Firefox 85</a> was the first Firefox version to ship without Flash support. Firefox now has new behavior when an attempt is made to embed an external object using the <code><a href="/en-US/docs/Web/HTML/Element/object">&lt;object&gt;</a></code> or <code><a href="/en-US/docs/Web/HTML/Element/embed">&lt;embed&gt;</a></code> elements:</p>

 <ul>
   <li>If the element lists a MIME type other than <code>x-shockwave-flash</code> or <code>x-test</code> then the behavior is unchanged. This means that non-plugin types behave as expected and unknown types are displayed at a size of 0 x 0.</li>
   <li>If an <code><a href="/en-US/docs/Web/HTML/Element/object">&lt;object&gt;</a></code> element has an HTML fallback in the DOM then the fallback is shown as expected.</li>
   <li>For <code>x-shockwave-flash</code> or <code>x-test</code> types, the element is shown as a transparent region with the size specified in its <code>width</code> and <code>height</code> attributes.</li>
  </ul>

 <p>See also <a href="https://support.mozilla.org/en-US/kb/end-support-adobe-flash">End of support for Adobe Flash</a>.</p>
 </dd>
</dl>

<h3 id="See_also">See also</h3>

<h4 id="Mozilla_Firefox">Mozilla Firefox</h4>

<ul>
 <li>October 2015 - <a href="https://blog.mozilla.org/futurereleases/2015/10/08/npapi-plugins-in-firefox/">NPAPI Plugins in Firefox</a></li>
 <li>July 2016 - <a href="https://blog.mozilla.org/futurereleases/2016/07/20/reducing-adobe-flash-usage-in-firefox/">Reducing Adobe Flash Usage in Firefox</a></li>
 <li>July 2017 - <a href="https://blog.mozilla.org/futurereleases/2017/07/25/firefox-roadmap-flash-end-life/">Firefox Roadmap for Flash End-of-Life</a></li>
</ul>

<h4 id="Adobe_Flash">Adobe Flash</h4>

<ul>
 <li>November 2015 - <a href="https://theblog.adobe.com/flash-html5-and-open-web-standards/">Flash, HTML5 and Open Web Standards</a></li>
 <li>July 2017 - <a href="https://theblog.adobe.com/adobe-flash-update/">Flash &amp; the Future of Interactive Content</a></li>
</ul>

<h4 id="Google_Chrome">Google Chrome</h4>

<ul>
 <li><a href="https://sites.google.com/a/chromium.org/dev/flash-roadmap">Flash Roadmap</a></li>
 <li>Sep 2013 - <a href="https://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html">Saying Goodbye to Our Old Friend NPAPI</a></li>
 <li>May 2014 - <a href="https://blog.chromium.org/2014/05/update-on-npapi-deprecation.html">Update on NPAPI Deprecation</a></li>
 <li>November 2014 - <a href="https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html">The Final Countdown for NPAPI</a></li>
 <li>August 2016 - <a href="https://blog.google/products/chrome/flash-and-chrome/">Flash and Chrome</a></li>
 <li>December 2016 - <a href="https://blog.chromium.org/2016/12/roll-out-plan-for-html5-by-default.html">Roll-out plan for HTML5 by Default</a></li>
 <li>July 2017 - <a href="https://www.blog.google/products/chrome/saying-goodbye-flash-chrome/">Saying Goodbye to Flash in Chrome</a></li>
</ul>

<h4 id="Microsoft_Edge_and_Internet_Explorer">Microsoft Edge and Internet Explorer</h4>

<ul>
 <li>April 2016 - <a href="https://blogs.windows.com/msedgedev/2016/04/07/putting-users-in-control-of-flash/">Putting Users in Control of Flash</a></li>
 <li>December 2016 - <a href="https://blogs.windows.com/msedgedev/2016/12/14/edge-flash-click-run/">Extending User Control of Flash with Click-to-Run</a></li>
 <li>July 2017 - <a href="https://blogs.windows.com/msedgedev/2017/07/25/flash-on-windows-timeline/">Flash on Windows Timeline</a></li>
 <li>August 2019 - <a href="https://blogs.windows.com/msedgedev/2019/08/30/update-removing-flash-microsoft-edge-internet-explorer/">Update on removing Flash from Microsoft Edge and Internet Explorer</a></li>
 <li>September 2020 - <a href="https://blogs.windows.com/msedgedev/2020/09/04/update-adobe-flash-end-support/">Update on Adobe Flash Player End of Support </a></li>
</ul>

<h4 id="Apple_Safari">Apple Safari</h4>

<ul>
 <li>June 2016 - <a href="https://webkit.org/blog/6589/next-steps-for-legacy-plug-ins/">Next Steps for Legacy Plug-ins</a></li>
 <li>July 2017 - <a href="https://webkit.org/blog/7839/adobe-announces-flash-distribution-and-updates-to-end/">Adobe Announces Flash Distribution and Updates to End</a></li>
</ul>
