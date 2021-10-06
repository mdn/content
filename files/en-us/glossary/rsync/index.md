---
title: Rsync
slug: Glossary/Rsync
---
<p><a href="https://rsync.samba.org/" rel="nofollow">Rsync</a> is an open-source file synchronizing tool that provides incremental file transfer It can be used over insecure and secure transports (like SSH).  It is available on most Unix-based systems (such as macOS and Linux) and Windows. There are also GUI-based tools that use rsync, for example, <a href="https://acrosync.com/mac.html" rel="noopener">Acrosync</a>.</p>

<p>A basic command looks like this:</p>

<pre class="brush: bash">rsync [-options] SOURCE user@x.x.x.x:DESTINATION</pre>

<ul>
 <li><code>-options</code> is a dash followed by one or more letters, for example <code>-v</code> for verbose error messages, and <code>-b</code> to make backups. See the full list of options at the <a href="https://linux.die.net/man/1/rsync" rel="noopener">rsync man page.</a> (Search for "Options summary.")</li>
 <li><code>SOURCE</code> is the path to the local file or directory that you want to copy or synchronize</li>
 <li><code>user@</code> is the credentials of the user on the remote server you want to copy files over to.</li>
 <li><code>x.x.x.x</code> is the IP address of the remote server.</li>
 <li><code>DESTINATION</code> is the path to the location you want to copy your directory or files to on the remote server.</li>
</ul>

<p>You can also make a connection over SSH using the <code>-e</code> option as shown:</p>

<pre class="brush: bash">rsync [-options] -e &quot;ssh [SSH DETAILS GO HERE]&quot; SOURCE user@x.x.x.x:DESTINATION</pre>

<p>There are numerous examples on the Internet, including those at the <a href="https://rsync.samba.org/examples.html">official website</a>, and at the <a href="https://en.wikipedia.org/wiki/Rsync#Examples">Wikipedia entry</a> for rsync.</p>
