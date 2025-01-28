---
title: Website security
slug: Learn_web_development/Extensions/Server-side/First_steps/Website_security
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Website security requires vigilance in all aspects of website design and usage. This introductory article won't make you a website security guru, but it will help you understand where threats come from, and what you can do to harden your web application against the most common attacks.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>Basic computer literacy.</td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand the most common threats to web application security and
        what you can do to reduce the risk of your site being hacked.
      </td>
    </tr>
  </tbody>
</table>

## What is website security?

The Internet is a dangerous place! With great regularity, we hear about websites becoming unavailable due to denial of service attacks, or displaying modified (and often damaging) information on their homepages. In other high-profile cases, millions of passwords, email addresses, and credit card details have been leaked into the public domain, exposing website users to both personal embarrassment and financial risk.

The purpose of website security is to prevent these (or any) sorts of attacks. The more formal definition of website security _is the act/practice of protecting websites from unauthorized access, use, modification, destruction, or disruption_.

Effective website security requires design effort across the whole of the website: in your web application, the configuration of the web server, your policies for creating and renewing passwords, and the client-side code. While all that sounds very ominous, the good news is that if you're using a server-side web framework, it will almost certainly enable "by default" robust and well-thought-out defense mechanisms against a number of the more common attacks. Other attacks can be mitigated through your web server configuration, for example by enabling HTTPS. Finally, there are publicly available vulnerability scanner tools that can help you find out if you've made any obvious mistakes.

The rest of this article gives you more details about a few common threats and some of the simple steps you can take to protect your site.

> [!NOTE]
> This is an introductory topic, designed to help you start thinking about website security, but it is not exhaustive.

## Website security threats

This section lists just a few of the most common website threats and how they are mitigated. As you read, note how threats are most successful when the web application either trusts, or is _not paranoid enough_ about the data coming from the browser.

### Cross-Site Scripting (XSS)

XSS is a term used to describe a class of attacks that allow an attacker to inject client-side scripts _through_ the website into the browsers of other users. Because the injected code comes to the browser from the site, the code is _trusted_ and can do things like send the user's site authorization cookie to the attacker. When the attacker has the cookie, they can log into a site as though they were the user and do anything the user can, such as access their credit card details, see contact details, or change passwords.

> [!NOTE]
> XSS vulnerabilities have been historically more common than any other type of security threat.

The XSS vulnerabilities are divided into _reflected_ and _persistent_, based on how the site returns the injected scripts to a browser.

- A _reflected_ XSS vulnerability occurs when user content that is passed to the server is returned _immediately_ and _unmodified_ for display in the browser. Any scripts in the original user content will be run when the new page is loaded.
  For example, consider a site search function where the search terms are encoded as URL parameters, and these terms are displayed along with the results. An attacker can construct a search link that contains a malicious script as a parameter (e.g., `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) and email it to another user. If the target user clicks this "interesting link", the script will be executed when the search results are displayed. As discussed earlier, this gives the attacker all the information they need to enter the site as the target user, potentially making purchases as the user or sharing their contact information.
- A _persistent_ XSS vulnerability occurs when the malicious script is _stored_ on the website and then later redisplayed unmodified for other users to execute unwittingly.
  For example, a discussion board that accepts comments that contain unmodified HTML could store a malicious script from an attacker. When the comments are displayed, the script is executed and can send to the attacker the information required to access the user's account. This sort of attack is extremely popular and powerful, because the attacker might not even have any direct engagement with the victims.

While the data from `POST` or `GET` requests is the most common source of XSS vulnerabilities, any data from the browser is potentially vulnerable, such as cookie data rendered by the browser, or user files that are uploaded and displayed.

The best defense against XSS vulnerabilities is to remove or disable any markup that can potentially contain instructions to run the code. For HTML this includes elements, such as `<script>`, `<object>`, `<embed>`, and `<link>`.

The process of modifying user data so that it can't be used to run scripts or otherwise affect the execution of server code is known as input sanitization. Many web frameworks automatically sanitize user input from HTML forms by default.

### SQL injection

SQL injection vulnerabilities enable malicious users to execute arbitrary SQL code on a database, allowing data to be accessed, modified, or deleted irrespective of the user's permissions. A successful injection attack might spoof identities, create new identities with administration rights, access all data on the server, or destroy/modify the data to make it unusable.

SQL injection types include Error-based SQL injection, SQL injection based on boolean errors, and Time-based SQL injection.

This vulnerability is present if user input that is passed to an underlying SQL statement can change the meaning of the statement. For example, the following code is intended to list all users with a particular name (`userName`) that has been supplied from an HTML form:

```python
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

If the user specifies a real name, the statement will work as intended. However, a malicious user could completely change the behavior of this SQL statement to the new statement in the following example, by specifying `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` for the `userName`.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

The modified statement creates a valid SQL statement that deletes the `users` table and selects all data from the `userinfo` table (which reveals the information of every user). This works because the first part of the injected text (`a';`) completes the original statement.

To avoid such attacks, the best practice is to use parameterized queries (prepared statements). This approach ensures that the user input is treated as a string of data rather than executable SQL, so that the user cannot abuse special SQL syntax characters to generate unintended SQL statements. The following is an example:

```sql
SELECT * FROM users WHERE name = ? AND password = ?;
```

When executing the above query, for example, in Python, we pass the `name` and `password` as parameters, as shown below.

```python
cursor.execute("SELECT * FROM users WHERE name = ? AND password = ?", (name, password))
```

Libraries often provide well-abstracted APIs that handle SQL injection protection for the developer, such as Django's models. You can avoid SQL injection by using encapsulated APIs rather than directly writing raw SQL.

### Cross-Site Request Forgery (CSRF)

CSRF attacks allow a malicious user to execute actions using the credentials of another user without that user's knowledge or consent.

This type of attack is best explained by example. Josh is a malicious user who knows that a particular site allows logged-in users to send money to a specified account using an HTTP `POST` request that includes the account name and an amount of money. Josh constructs a form that includes his bank details and an amount of money as hidden fields, and emails it to other site users (with the _Submit_ button disguised as a link to a "get rich quick" site).

If a user clicks the submit button, an HTTP `POST` request will be sent to the server containing the transaction details and any client-side cookies that the browser associated with the site (adding associated site cookies to requests is normal browser behavior). The server will check the cookies, and use them to determine whether or not the user is logged in and has permission to make the transaction.

The result is that any user who clicks the _Submit_ button while they are logged in to the trading site will make the transaction. Josh gets rich.

> [!NOTE]
> The trick here is that Josh doesn't need to have access to the user's cookies (or access credentials). The browser of the user stores this information and automatically includes it in all requests to the associated server.

One way to prevent this type of attack is for the server to require that `POST` requests include a user-specific site-generated secret. The secret would be supplied by the server when sending the web form used to make transfers. This approach prevents Josh from creating his own form, because he would have to know the secret that the server is providing for the user. Even if he found out the secret and created a form for a particular user, he would no longer be able to use that same form to attack every user.

Web frameworks often include such CSRF prevention mechanisms.

### Other threats

Other common attacks/vulnerabilities include:

- [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking). In this attack, a malicious user hijacks clicks meant for a visible top-level site and routes them to a hidden page beneath. This technique might be used, for example, to display a legitimate bank site but capture the login credentials into an invisible {{htmlelement("iframe")}} controlled by the attacker. Clickjacking could also be used to get the user to click a button on a visible site, but in doing so actually unwittingly click a completely different button. As a defense, your site can prevent itself from being embedded in an iframe in another site by setting the appropriate HTTP headers.
- [Denial of Service](/en-US/docs/Glossary/Distributed_Denial_of_Service) (DoS). DoS is usually achieved by flooding a target site with fake requests so that access to a site is disrupted for legitimate users. The requests may be numerous, or they may individually consume large amounts of resource (e.g., slow reads or uploading of large files). DoS defenses usually work by identifying and blocking "bad" traffic while allowing legitimate messages through. These defenses are typically located before or in the web server (they are not part of the web application itself).
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (File and disclosure). In this attack, a malicious user attempts to access parts of the web server file system that they should not be able to access. This vulnerability occurs when the user is able to pass filenames that include file system navigation characters (for example, `../../`). The solution is to sanitize input before using it.
- [File Inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). In this attack, a user is able to specify an "unintended" file for display or execution in data passed to the server. When loaded, this file might be executed on the web server or the client-side (leading to an XSS attack). The solution is to sanitize input before using it.
- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection). Command injection attacks allow a malicious user to execute arbitrary system commands on the host operating system. The solution is to sanitize user input before it might be used in system calls.

For a comprehensive listing of website security threats see [Category: Web security exploits](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) and [Category: Attack](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## A few key messages

Almost all of the security exploits in the previous sections are successful when the web application trusts data from the browser. Whatever else you do to improve the security of your website, you should sanitize all user-originating data before it is displayed in the browser, used in SQL queries, or passed to an operating system or file system call.

> [!WARNING]
> The single most important lesson you can learn about website security is to **never trust data from the browser**. This includes, but is not limited to data in URL parameters of `GET` requests, `POST` requests, HTTP headers and cookies, and user-uploaded files. Always check and sanitize all incoming data. Always assume the worst.

A number of other concrete steps you can take are:

- Use more effective password management. Encourage strong passwords. Consider two-factor authentication for your site, so that in addition to a password the user must enter another authentication code (usually one that is delivered via some physical hardware that only the user will have, such as a code in an SMS sent to their phone).
- Configure your web server to use [HTTPS](/en-US/docs/Glossary/HTTPS) and [HTTP Strict Transport Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS). HTTPS encrypts data sent between your client and server. This ensures that login credentials, cookies, `POST` requests data and header information are not easily available to attackers.
- Keep track of the most popular threats (the [current OWASP list is here](https://owasp.org/www-project-top-ten/)) and address the most common vulnerabilities first.
- Use [vulnerability scanning tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools) to perform automated security testing on your site. Later on, your very successful website may also find bugs by offering a bug bounty [like Mozilla does here](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Only store and display data that you need. For example, if your users must store sensitive information like credit card details, only display enough of the card number that it can be identified by the user, and not enough that it can be copied by an attacker and used on another site. The most common pattern at this time is to only display the last 4 digits of a credit card number.
- Keep software up-to-date.
  Most servers have regular security updates that fix or mitigate known vulnerabilities.
  If possible, schedule regular automated updates, and ideally, schedule updates during times when your website has the lowest amount of traffic.
  It's best to back up your data before updating and test new software versions to make sure there's no compatibility issues on your server.

Web frameworks can help mitigate many of the more common vulnerabilities.

## Summary

This article has explained the concept of web security and some of the more common threats against which your website should attempt to protect. Most importantly, you should understand that a web application cannot trust any data from the web browser. All user data should be sanitized before it is displayed, or used in SQL queries and file system calls.

With this article, you've come to the end of [this module](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps), covering your first steps in server-side website programming. We hope you've enjoyed learning these fundamental concepts, and you're now ready to select a Web Framework and start programming.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
