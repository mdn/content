---
title: InstallTrigger.startSoftwareUpdate
slug: Web/API/InstallTrigger/startSoftwareUpdate
---
<h2 id="Summary">Summary</h2>
<p>Triggers the downloading and installation of the software at the specified URL.</p>

<h3 id="Method_of">Method of</h3>
<p><a href="/en-US/docs/Web/API/InstallTrigger">InstallTrigger</a>
  object</p>

<h2 id="Syntax">Syntax</h2>
<pre class="brush: js">Boolean startSoftwareUpdate ( String url);
</pre>

<h3 id="Parameters">Parameters</h3>
<p>The <code>startSoftwareUpdate</code> method has the following parameter:</p>
<dl>
  <dt><code>url</code></dt>
  <dd>A uniform resource locator specifying the location of the XPI file containing the
    software.</dd>
</dl>

<h3 id="Returns">Returns</h3>
<p>True.</p>

<h2 id="Description">Description</h2>
<p>The <code>startSoftwareUpdate</code> method triggers a software download and install
  from the specified URL. This method has been largely superseded by newer <a
    href="/en-US/docs/Web/API/InstallTrigger/install">
    install</a> method, which is more flexible and allows you to install more than one
  XPI. Note also that XPIs installed with this method must have their own install.js files
  in which the full installation is defined.</p>
