---
title: HTMLFormElement.action
slug: Web/API/HTMLFormElement/action
tags:
- API
- Forms
- HTML DOM
- HTMLFormElement
- NeedsSpecTable
- NeedsUpdate
- Property
- Reference
browser-compat: api.HTMLFormElement.action
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <strong><code>HTMLFormElement.action</code></strong> property represents the action
  of the {{HTMLElement("form")}} element.</p>

<p>The action of a form is the program that is executed on the server when the form is
  submitted. This property can be retrieved or set.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>string</em> = <em>form</em>.action;
<em>form</em>.action = <em>string</em>;
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">form.action = '/cgi-bin/publish';</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
