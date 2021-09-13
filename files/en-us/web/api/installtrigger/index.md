---
title: InstallTrigger
slug: Web/API/InstallTrigger
tags:
  - API
  - Add-ons
  - Apps
  - Extensions
  - Interface
  - Non-standard
  - Reference
---
<p>{{APIRef("Apps")}}{{non-standard_header()}}</p>

<p>The <code>InstallTrigger</code> interface is an interesting outlier in the Apps API; it's included in this API but are inherited from the old Mozilla XPInstall technology for installing add-ons. It is used for triggering the download and installation of an add-on (or anything packaged in an .<code>xpi</code> file) from a Web page, using JavaScript code to kick off the install process.</p>

<div class="note">
<p><strong>Note:</strong> This article needs to be updated somewhat.</p>
</div>

<h2 id="Overview">Overview</h2>

<p>For very simple installations, the install methods on the <code>InstallTrigger</code> object may be all that's needed in the installation script.</p>

<p>For more complex installations, you may need to use the <a href="/en-US/docs/XPInstall_API_Reference/Install_Object"> Install</a> and/or <a href="/en-US/docs/XPInstall_API_Reference/File_Object"> File</a> installation objects. In either case, you must trigger the installation process by creating a web page script in which InstallTrigger methods download the specified XPI file and "trigger" the execution of the install.js script at the top level of that XPI.</p>

<p>The principal method on the InstallTrigger object is <a href="/en-US/docs/Web/API/InstallTrigger/install">install</a>, which downloads and installs one or more software packages archived in the XPI file format. The following is a basic example of an install trigger on a web page:</p>

<pre>xpi={'XPInstall Dialog Display Name':'simple.xpi'};
InstallTrigger.install(xpi);
</pre>

<p>You can also use the InstallTrigger object to install Netscape 6/Mozilla skins and language packs, and perform multiple-package installations with <a href="/en-US/docs/Web/API/InstallTrigger/install">install</a>.</p>

<p>{{SubpagesWithSummaries}}</p>
