---
title: Subdomain takeovers
slug: Web/Security/Subdomain_takeovers
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

A subdomain takeover occurs when an attacker gains control over a subdomain of a target domain. Typically, this happens when the subdomain has a canonical name ([CNAME](https://en.wikipedia.org/wiki/CNAME_record)) in the Domain Name System ([DNS](/en-US/docs/Glossary/DNS)), but no host is providing content for it. This can happen because either a virtual host hasn't been published yet or a virtual host has been removed. An attacker can take over that subdomain by providing their own virtual host and then hosting their own content for it.

If an attacker can do this, they can potentially read [cookies](/en-US/docs/Web/HTTP/Cookies) set from the main domain, perform [cross-site scripting](/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss), or circumvent [content security policies](/en-US/docs/Web/HTTP/CSP), thereby enabling them to capture protected information (including logins) or send malicious content to unsuspecting users.

A subdomain is like an electrical outlet. If you have your own appliance (host) plugged into it, everything is fine. However, if you remove your appliance from the outlet (or haven't plugged one in yet), someone can plug in a different one. You must cut power at the breaker or fuse box (DNS) to prevent the outlet from being used by someone else.

## How do they happen?

If the process of provisioning or deprovisioning (removing) a virtual host is not handled properly, there can be an opportunity for an attacker to take over a subdomain.

### During provisioning

An attacker sets up a virtual host for a subdomain name you bought on the hosting provider, before you get to do it.

Suppose you control the domain example.com. You want to add a blog at blog.example.com, and you decide to use a hosting provider who maintains a blogging platform. (For "blog", you can substitute "e-commerce platform", "customer service platform", or any other "cloud-based" virtual hosting scenario.) The process you go through might look like this:

1. You register the name "blog.example.com" with a domain registrar.
2. You set up DNS records to direct browsers that want to access blog.example.com so that they go to the virtual host.
3. You create a virtual host at the hosting provider.

Unless the hosting provider is very careful to verify that the entity who sets up the virtual host actually is the owner of the subdomain name, an attacker who is quicker than you could create a virtual host with the same hosting provider, using your subdomain name. In such a case, as soon as you set up DNS in step 2, the attacker can host content on your subdomain.

### During deprovisioning

You take down your virtual host, but an attacker sets up a new virtual host using the same name and hosting provider.

You (or your company) decide that you no longer want to maintain a blog, so you remove the virtual host from the hosting provider. However, if you don't remove the DNS entry that points to the hosting provider, an attacker can now create their own virtual host with that provider, claim your subdomain, and host their own content under that subdomain.

## How can I prevent them?

Preventing subdomain takeovers is a matter of order of operations in lifecycle management for virtual hosts and DNS. Depending on the size of the organization, this may require communication and coordination across multiple departments, which can only increase the likelihood for a vulnerable misconfiguration.

- Define standard processes for provisioning and deprovisioning hosts. Do all steps as closely together as possible.

  - Start provisioning by claiming the virtual host; create DNS records _last_.
  - Start deprovisioning by removing DNS records _first_.

- Create an inventory of all of your organization's domains and their hosting providers, and update it as things change, to ensure that nothing is left dangling.
- Put pressure on hosting vendors to close gaps; ask how they verify that someone claiming a virtual host actually has a legitimate claim to the domain name. Work within your organization to make this part of the vendor qualification process.

## My subdomain has been taken over. What should I do?

If you discover that a subdomain of your domain has been taken over, the first step, if possible, is to "cut power" by removing the DNS entry for the subdomain. If your site has multiple layers of virtualization (e.g., a [CDN](/en-US/docs/Glossary/CDN) in addition to virtual hosting), you may need to examine each layer to see where exactly the attacker asserted their virtual host claim to take over your domain.

## Learn more

- ['Deep Thoughts' on Subdomain Takeover Vulnerabilities](http://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Subdomain Takeover: Basics](https://0xpatrik.com/subdomain-takeover-basics/)
