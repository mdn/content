---
title: Window.openDialog()
slug: Web/API/Window/openDialog
tags:
- API
- Gecko
- HTML DOM
- Method
- Non-standard
- Reference
- Window
browser-compat: api.Window.openDialog
---
<div>{{APIRef("HTML DOM")}}{{Non-standard_header}}</div>

<p><code>window.openDialog()</code> is an extension to {{domxref("window.open()")}}. It
  behaves the same, except that it can optionally take one or more parameters past
  <code>windowFeatures</code>, and <code>windowFeatures</code> itself is treated a little
  differently.</p>

<p>The optional parameters, if present, are bundled up in a JavaScript {{jsxref("Array")}}
  object and added to the newly created window as a property named
  {{domxref("window.arguments")}}. They may be referenced in the JavaScript of the window
  at any time, including during the execution of a {{event("load")}} handler. These
  parameters may be used, then, to pass arguments to and from the dialog window.</p>

<p>The call to <code>openDialog()</code> returns immediately. If you want the call to
  block until the user has closed the dialog, supply <code>modal</code> as a
  <code>windowFeatures</code> parameter. Note that this also means the user won't be able
  to interact with the opener window until they close the modal dialog.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>newWindow</var> = openDialog(<var>url</var>, <var>name</var>, <var>features</var>, <var>arg1</var>, <var>arg2</var>, ...)
</pre>

<dl>
  <dt><code>newWindow</code></dt>
  <dd>The opened window</dd>
  <dt><code>url</code></dt>
  <dd>The URL to be loaded in the newly opened window.</dd>
  <dt><code>name</code></dt>
  <dd>The window name (optional). See {{domxref("window.open()")}} description for
    detailed information.</dd>
  <dt><code>features</code></dt>
  <dd>See {{domxref("window.open()")}} for details.</dd>
  <dt><code>arg1</code>, <code>arg2</code>, ...</dt>
  <dd>The arguments to be passed to the new window (optional).</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
</pre>

<h2 id="Notes">Notes</h2>

<h4 id="New_features">New features</h4>

<p><code>all</code> - Initially activates (or deactivates <code>("all=no")</code>) all
  chrome (except the behavior flags <code>chrome</code>, <code>dialog</code> and
  <code>modal</code>). These can be overridden (so <code>"menubar=no,all"</code> turns on
  all chrome except the menubar.) This feature is explicitly ignored by
  {{domxref("window.open()")}}. <code>window.openDialog()</code> finds it useful because
  of its different default assumptions.</p>

<h4 id="Default_behavior">Default behavior</h4>

<p>The <code>chrome</code> and <code>dialog</code> features are always assumed on, unless
  explicitly turned off ("<code>chrome=no</code>"). <code>openDialog()</code> treats the
  absence of the features parameter the same way {{domxref("window.open()")}} does; that
  is, an empty string sets all features to off) except <code>chrome</code> and
  <code>dialog</code>, which default to on. If the <code>features</code> parameter is a
  zero-length string, or contains only one or more of the behavior features
  (<code>chrome</code>, <code>dependent</code>, <code>dialog</code> and
  <code>modal</code>) the chrome features are assumed "OS' choice." That is, window
  creation code is not given specific instructions, but is instead allowed to select the
  chrome that best fits a dialog on that operating system.</p>

<h4 id="Passing_extra_parameters_to_the_dialog">Passing extra parameters to the dialog
</h4>

<p>To pass extra parameters into the dialog, you can supply them after the
  <code>windowFeatures</code> parameter:</p>

<pre class="brush: js">openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);
</pre>

<p>The extra parameters will then get packed into a property named <code>arguments</code>
  of type {{jsxref("Array")}}, and this property gets added to the newly opened dialog
  window.</p>

<p>To access these extra parameters from within dialog code, use the following scheme:</p>

<pre class="brush: js">var food  = window.arguments[0];
var price = window.arguments[1];
</pre>

<p>Note that you can access this property from within anywhere in the dialog code. (<a
    href="/en-US/Add-ons/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog">Another
    example</a>).</p>

<h4 id="Returning_values_from_the_dialog">Returning values from the dialog</h4>

<p>Since {{domxref("window.close()")}} erases all properties associated with the dialog
  window (i.e. the variables specified in the JavaScript code which gets loaded from the
  dialog), it is not possible to pass return values back past the close operation using
  globals (or any other constructs).</p>

<p>To be able to pass values back to the caller, you have to supply some object via the
  extra parameters. You can then access this object from within the dialog code and set
  properties on it, containing the values you want to return or preserve past the
  <code>window.close()</code> operation.</p>

<pre class="brush: js">var retVals = { address: null, delivery: null };
openDialog("http://example.tld/zzz.xul", "dlg", "modal", "pizza", 6.98,
    retVals);
</pre>

<p>If you set the properties of the <code>retVals</code> object in the dialog code as
  described below, you can now access them via the <code>retVals</code> array after the
  <code>openDialog()</code> call returns.</p>

<p>Inside the dialog code, you can set the properties as follows:</p>

<pre class="brush: js">var retVals = window.arguments[2];
retVals.address  = enteredAddress;
retVals.delivery = "immediate";
</pre>

<h2 id="Specifications">Specifications</h2>

<p>This is not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/Add-ons/Code_snippets/Dialogs_and_Prompts#Passing_arguments_and_displaying_a_dialog">Another
      example</a></li>
  <li><a
      href="/en-US/docs/Archive/Web/Window.importDialog"><code>window.importDialog</code></a>
    (mobile) {{deprecated_inline}}</li>
</ul>
