---
title: Subdomain takeovers
slug: Web/Security/Subdomain_takeovers
tags:
  - Guide
  - Security
---
<p>A subdomain takeover occurs when an attacker gains control over a subdomain of a target domain. Typically, this happens when the subdomain has a canonical name (<a href="https://en.wikipedia.org/wiki/CNAME_record">CNAME</a>) in the Domain Name System (<a href="/en-US/docs/Glossary/DNS">DNS</a>), but no host is providing content for it. This can happen because either a virtual host hasn’t been published yet or a virtual host has been removed. An attacker can take over that subdomain by providing their own virtual host and then hosting their own content for it.</p>

<p>If an attacker can do this, they can potentially read <a href="/en-US/docs/Web/HTTP/Cookies">cookies</a> set from the main domain, perform <a href="/en-US/docs/Web/Security/Types_of_attacks#Cross-site_scripting_XSS">cross-site scripting</a>, or circumvent <a href="/en-US/docs/Web/HTTP/CSP">content security policies</a>, thereby enabling them to capture protected information (including logins) or send malicious content to unsuspecting users.</p>

<p>A subdomain is like an electrical outlet. If you have your own appliance (host) plugged into it, everything is fine. However, if you remove your appliance from the outlet (or haven’t plugged one in yet), someone can plug in a different one. You must cut power at the breaker or fuse box (DNS) to prevent the outlet from being used by someone else.</p>

<h2 id="How_do_they_happen">How do they happen?</h2>

<p>If the process of provisioning or deprovisioning (removing) a virtual host is not handled properly, there can be an opportunity for an attacker to take over a subdomain.</p>

<h3 id="During_provisioning">During provisioning</h3>

<p>An attacker sets up a virtual host for a subdomain name you bought on the hosting provider, before you get to do it.</p>

<p>Suppose you control the domain example.com. You want to add a blog at blog.example.com, and you decide to use a hosting provider who maintains a blogging platform. (For "blog", you can substitute "e-commerce platform", "customer service platform", or any other "cloud-based" virtual hosting scenario.) The process you go through might look like this:</p>

<ol>
 <li>You register the name "blog.example.com" with a domain registrar.</li>
 <li>You set up DNS records to direct browsers that want to access blog.example.com so that they go to the virtual host.</li>
 <li>You create a virtual host at the hosting provider.</li>
</ol>

<p>Unless the hosting provider is very careful to verify that the entity who sets up the virtual host actually is the owner of the subdomain name, an attacker who is quicker than you could create a virtual host with the same hosting provider, using your subdomain name. In such a case, as soon as you set up DNS in step 2, the attacker can host content on your subdomain.</p>

<h3 id="During_deprovisioning">During deprovisioning</h3>

<p>You take down your virtual host, but an attacker sets up a new virtual host using the same name and hosting provider.</p>

<p>You (or your company) decide that you no longer want to maintain a blog, so you remove the virtual host from the hosting provider. However, if you don’t remove the DNS entry that points to the hosting provider, an attacker can now create their own virtual host with that provider, claim your subdomain, and host their own content under that subdomain.</p>

<h2 id="How_can_I_prevent_them">How can I prevent them?</h2>

<p>Preventing subdomain takeovers is a matter of order of operations in lifecycle management for virtual hosts and DNS. Depending on the size of the organization, this may require communication and coordination across multiple departments, which can only increase the likelihood for a vulnerable misconfiguration.</p>

<ul>
 <li>Define standard processes for provisioning and deprovisioning hosts. Do all steps as closely together as possible.
  <ul>
   <li>Start provisioning by claiming the virtual host; create DNS records <em>last</em>.</li>
   <li>Start deprovisioning by removing DNS records <em>first</em>.</li>
  </ul>
 </li>
 <li>Create an inventory of all of your organization’s domains and their hosting providers, and update it as things change, to ensure that nothing is left dangling.</li>
 <li>Put pressure on hosting vendors to close gaps; ask how they verify that someone claiming a virtual host actually has a legitimate claim to the domain name. Work within your organization to make this part of the vendor qualification process.</li>
</ul>

<h2 id="My_subdomain_has_been_taken_over._What_should_I_do">My subdomain has been taken over. What should I do?</h2>

<p>If you discover that a subdomain of your domain has been taken over, the first step, if possible, is to "cut power" by removing the DNS entry for the subdomain. If your site has multiple layers of virtualization (e.g., a <a href="/en-US/docs/Glossary/CDN">CDN</a> in addition to virtual hosting), you may need to examine each layer to see where exactly the attacker asserted their virtual host claim to take over your domain.</p>

<h2 id="Learn_more">Learn more</h2>

<ul>
 <li><a href="https://blog.rubidus.com/2017/02/03/deep-thoughts-on-subdomain-takeovers/">'Deep Thoughts' on Subdomain Takeover Vulnerabilities</a></li>
 <li><a href="https://0xpatrik.com/subdomain-takeover-basics/">Subdomain Takeover: Basics</a></li>
</ul>
