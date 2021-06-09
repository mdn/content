---
title: Web performance resources
slug: Learn/Performance/Web_Performance_Basics
tags:
  - Best practices
  - Website performance
---
<p>{{draft}}</p>
<p>There are many <a href="https://developers.google.com/web/fundamentals/performance/why-performance-matters/">reasons</a> why your website should perform as well as possible.<br>
 Below is a quick review of best practices, tools, APIs with links to provide more information about each topic.</p>

<h2 id="Best_practices">Best practices</h2>

<ul>
 <li>Start with learning the <a href="/en-US/docs/Web/Performance/Critical_rendering_path">critical rendering path</a> of the browser. Knowing this will help you understand how to improve the performance of the site.</li>
 <li>Using <em>resource hints</em> such as <a href="/en-US/docs/Web/HTML/Link_types/preconnect"><code>rel=preconnect</code></a>, <a href="/en-US/docs/Web/HTML/Link_types/dns-prefetch"><code>rel=dns-prefetch</code></a>, <a href="/en-US/docs/Web/HTML/Link_types/prefetch"><code>rel=prefetch</code></a>, <a href="/en-US/docs/Web/HTML/Link_types/preload"><code>rel=preload</code></a>.</li>
 <li>Keep the size of Javascript to a <a href="https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4">minimum</a>. Only use as much Javascript as needed for the current page.</li>
 <li><a href="/en-US/docs/Learn/Performance/CSS">CSS</a> performance factors</li>
 <li>Use {{Glossary("HTTP_2", "HTTP/2")}} on your server (or CDN).</li>
 <li>Use a CDN for resources which can reduce load times significantly.</li>
 <li>Compress your resources using <a href="https://www.gnu.org/software/gzip/" rel="nofollow noopener">gzip</a>, <a href="https://github.com/google/brotli" rel="nofollow noopener">Brotli</a>, and <a href="https://github.com/google/zopfli" rel="nofollow noopener">Zopfli</a>.</li>
 <li>Image optimization (use CSS animation, or SVG if possible).</li>
 <li>Lazy loading parts of your application outside the viewport. If you do, have a backup plan for SEO (e.g render full page for bot traffic); for example, by using the {{htmlattrxref("loading", "img")}} attribute on the {{HTMLElement("img")}} element</li>
 <li>It is also crucial to realize what is really important to your users. It might not be absolute timing, but <a href="/en-US/docs/Learn/Performance/Perceived_performance">user perception</a>.</li>
</ul>

<h2 id="Quick_Wins">Quick Wins</h2>

<h3 id="CSS">CSS</h3>

<p>Web performance is all about user experience and perceived performance. As we learned in the <a href="/en-US/docs/Web/Performance/Critical_rendering_path">critical rendering path</a> document, linking CSS with a traditional link tag with rel="stylesheet" is synchronous and blocks rendering. Optimize the rendering of your page by removing blocking CSS.</p>

<p>To load CSS asynchronously one can set the media type to print and then change to all once loaded. The following snippet includes an onload attribute, requiring Javascript, so it is important to include a noscript tag with a traditional fallback.</p>

<pre class="brush: html">&lt;link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'"&gt;
&lt;noscript&gt;&lt;link rel="stylesheet" href="/path/to/my.css"&gt;&lt;/noscript&gt;
</pre>

<p>The downside with this approach is the flash of unstyled text (FOUT.) The simplest way to address this is by inlining CSS that is required for any content that is rendered above the fold, or what you see in the browser viewport before scrolling. These styles will improve perceived performance as the CSS does not require a file request.</p>

<pre class="brush: html">&lt;style type="text/css"&gt;
// Insert your CSS here
&lt;/style&gt;
</pre>

<h3 id="Javascript">Javascript</h3>

<p>Avoid Javascript blocking by using the <a href="/en-US/docs/Web/HTML/Element/script">async</a> or <a href="/en-US/docs/Web/HTML/Element/script">defer</a> attributes, or link javascript assets after the page's DOM elements. Javascript only block rendering for elements that appear after the script tag in the DOM tree.</p>

<h3 id="Web_Fonts">Web Fonts</h3>

<p>EOT and TTF formats are not compressed by default. Apply compression such as GZIP or Brotli for these file types. Use WOFF and WOFF2. These formats have compression built in.</p>

<p>Within @font-face use font-display: swap. By using font display swap the browser will not block rendering and will use the backup system fonts that are defined. Optimize <a href="/en-US/docs/Web/CSS/font-weight">font weight</a> to match the web font as closely as possible.</p>

<h4 id="Icon_web_fonts">Icon web fonts</h4>

<p>If possible avoid icon web fonts and use compressed SVGs. To further optimize inline your SVG data within HTML markup to avoid HTTP requests.</p>

<h2 id="Tools">Tools</h2>

<ul>
 <li>Learn to use the <a href="/en-US/docs/Tools/Performance">Firefox Dev Tools</a> to profile your site.</li>
 <li><a href="https://developers.google.com/speed/docs/insights/v5/about">PageSpeed Insights</a> can analyze your page and give some general hints to improve performance.</li>
 <li><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> can give you a detailed breakdown of many aspects of your site including performance, SEO and accessibility. </li>
 <li>Test your page's speed using <a href="https://webpagetest.org/">WebPageTest.org</a>, where you can use different real device types and locations.</li>
 <li>Try the <a href="https://developers.google.com/web/tools/chrome-user-experience-report">Chrome User Experience Report</a> which quantifies real user metrics.</li>
 <li>Define a <a href="/en-US/docs/Web/Performance/Performance_budgets">performance budget</a>.</li>
</ul>

<h3 id="APIs">APIs</h3>

<ul>
 <li>Gather user metrics using <a href="https://github.com/akamai/boomerang">https://github.com/akamai/boomerang</a> </li>
 <li>Or directly gather with <a href="/en-US/docs/Web/API/Window/performance">window.performance.timing</a> </li>
</ul>

<h3 id="Things_not_to_do_bad_practices">Things not to do (bad practices)</h3>

<ul>
 <li>  Download everything</li>
 <li>  Use uncompressed media files</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://github.com/filamentgroup/loadCSS">https://github.com/filamentgroup/loadCSS</a></li>
</ul>
