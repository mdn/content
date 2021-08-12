---
title: >-
  Content Security Policy: The page’s settings blocked the loading of a
  resource: xyz
slug: Web/HTTP/CSP/Errors/CSPViolation
tags:
  - CSP
  - CSPViolation
  - Content Security Policy
  - HTTP
  - HTTPS
  - NeedsContent
  - Reference
  - Security
  - Warning
  - Web security
  - message
---
<p>{{HTTPSidebar}}</p>

<p>The warning "Content Security Policy: The page's settings blocked the loading of a resource: xyz" occurs when the page's CSP configuration given by <code>xyz</code> prevents the resource from being loaded into the document's context.</p>

<h2 id="Message">Message</h2>

<h3>Firefox</h3>
<p><code>Content Security Policy: The pages settings blocked the loading of a resource: <em>xyz</em></code></p>
</p>with:</p>
<dl>
 <dt><code>xyz</code></dt>
 <dd>The name of the CSP directive that blocked the resource. This may be expressed as either just the name of the directive, or as the entire policy directive string.</dd>
 <dt><code>uvw</code></dt>
 <dd>Text that provides information that may help you resolve the problem, potentially including specific changes you might make to the CSP configuration.</dd>
</dl>

<h3>Chrome</h3>
<ul>
   <li><code>Refused to apply inline style because it violates the following Content Security Policy Directive: "<em>xyz</em>". <em>uvw</em>.</code></li>
   <li><code>Refused to execute inline script because it violates the following Content Security Policy directive: "<em>xyz</em>". <em>uvw</em>.</code></li>
   <li><code>Refused to run the JavaScript URL because it violates the following Content Security Policy directive: "<em>xyz</em>". <em>uvw</em>.</code></li>
   <li><code>Refused to execute inline event handler because it violates the following Content Security Policy directive: "<em>xyz</em>". <em>uvw</em>.</code></li>
</ul>
<p>with:</p>
<dl>
 <dt><code>xyz</code></dt>
 <dd>The name of the CSP directive that blocked the resource. This may be expressed as either just the name of the directive, or as the entire policy directive string.</dd>
 <dt><code>uvw</code></dt>
 <dd>Text that provides information that may help you resolve the problem, potentially including specific changes you might make to the CSP configuration.</dd>
</dl>

<p><strong>&lt;&lt;&lt;--- The Chrome information above may be incomplete; we need to investigate that when we resume work on this content ---&gt;&gt;&gt;</strong></p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>This warning message means that due to the existence of a particular CSP directive, a resource wasn't loaded.</p>

<p><strong>&lt;&lt;&lt;--- add details and suggested fixes ---&gt;&gt;&gt;</strong></p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CSP/Errors">CSP errors and warnings</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CSP">Content Security Policy</a></li>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTTPHeader("Content-Security-Policy-Report-Only")}}</li>
</ul>
