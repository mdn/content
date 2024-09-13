---
title: Insecure passwords
slug: Web/Security/Insecure_passwords
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

Serving login forms over HTTP is especially dangerous because of the wide variety of attacks that can be used against them to extract a user's password. Network eavesdroppers could steal a user's password by sniffing the network, or by modifying the served page in transit.

The [HTTPS](/en-US/docs/Glossary/HTTPS) protocol is designed to protect user data from eavesdropping (confidentiality) and from modification (integrity) on the network. Websites that handle user data should use HTTPS to protect their users from attackers. If a website uses HTTP instead of HTTPS, it is trivial to steal user information (such as their login credentials). This was famously demonstrated by [Firesheep](https://codebutler.github.io/firesheep/).

To fix this issue, install and configure a [TLS](/en-US/docs/Glossary/TLS) certificate on your server. There are various vendors offering free and paid certificates. If you are using a cloud platform, it may have its own ways of enabling HTTPS.

## Note on password reuse

Sometimes websites require username and passwords but don't actually store data that is very sensitive. For example, a news site may save which news articles a user wants to go back to and read, but not save any other data about a user. Web developers of the news site may be less motivated to secure their site and their user credentials.

Unfortunately, [password reuse is a big problem](https://www.lightbluetouchpaper.org/2011/02/09/measuring-password-re-use-empirically/). Users use the same password across multiple sites (news websites, social networks, email providers, banks). Hence, even if access to the username and password to your site doesn't seem like a huge risk to you, it is a great risk to users who have used the same username and password to log in to their bank accounts. Attackers are getting smarter; they steal username/password pairs from one site and then try reusing them on more lucrative sites.

## See also

- [No More Passwords over HTTP, Please!](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/) — detailed blog post with more information, and FAQ.
