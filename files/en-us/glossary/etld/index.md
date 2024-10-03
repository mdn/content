---
title: eTLD
slug: Glossary/eTLD
page-type: glossary-definition
---

{{GlossarySidebar}}

The term **eTLD** stands for "effective top-level domain" and is a domain under which domains can be registered by a single organization.

A top level domain (TLD) is the part of the domain name following the final dot: so for example, the top-level domain in `crookedtimber.org` is `org`.

Suppose only domains directly under top-level domains were registrable by single organizations. Then you would know that the following domains all belonged to the same organization:

```plain
    xyz.org
abc.xyz.org
def.xyz.org
```

However, this does not work as a general rule, because many registrars allow organizations to register domains at levels below the top level. This means that, for example, `sussex.ac.uk` and `aber.ac.uk` are owned by different organizations.

Because this is a matter of the registrar's policies, it's impossible to tell algorithmically whether a given domain name suffix (like `ac.uk`) is publicly registrable or not. The [Public Suffix List](https://publicsuffix.org/) is a list of all suffixes under which organizations can directly register names: that is, it is a list of eTLDs.

The related concept **eTLD+1** means an eTLD plus the next part of the domain name. Because eTLD+1s are registrable, all domains with the same eTLD+1 are owned by the same organization.

For example, all the following are eTLD+1 domains:

- crookedtimber.org
- theguardian.com
- sussex.ac.uk
- aber.ac.uk

This means that all domains under each of these domains belong to the same organization. For example:

```plain
 film.theguardian.com
music.theguardian.com
```

```plain
      news.sussex.ac.uk
      blog.sussex.ac.uk
admissions.sussex.ac.uk
```

## See also

- [Public Suffix List](https://publicsuffix.org/)
