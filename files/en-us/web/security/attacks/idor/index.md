---
title: Insecure Direct Object Reference (IDOR)
slug: Web/Security/Attacks/IDOR
page-type: guide
sidebar: security
---

**Insecure Direct Object Reference (IDOR)** is a vulnerability that allows an attacker to exploit insufficient access control and insecure exposure of object identifiers, such as database keys or file paths.

Websites often want to serve different content to different users: for example, a shopping website might let each user view their purchase history. Websites can identify users by authenticating them, using a method such as a password or a passkey. Often, once a website has authenticated a user, they will set a session cookie in that user's browser: then, when the user makes a request, the server will know that the request came from this authenticated user.

However, as well as checking that the request came from an authenticated user, the server must implement access control for the resources that the user requests: that is, they must check that this user is allowed to access the specific resource requested. For example, each authenticated user must only be allowed to see their own purchase history.

If a server does not implement access control for resources, then an attacker who is signed into the site may be able to access the resources belonging to a different user. This is called an Insecure Direct Object Reference (IDOR) attack.

## Example scenarios

The classic IDOR attack happens when the server only checks that the user is authenticated, but not whether they are authorized to access an object reference. In a typical flow, the attacker:

1. Logs in as a normal user.
2. Finds a URL, form field, or cookie that references a user or resource ID (e.g., 1234).
3. Modifies the ID to another value (e.g., 1233).
4. Gains unauthorized access to another user's data.

In the following sections we'll explore some concrete examples of this attack.

### URL tampering

A common type of IDOR attack involves manipulation of direct object references in the URL. The "1234" in the following URLs is an identifier for the user's record in the server's database. If an attacker changes this number to any other number (say "1235") and gains access to another user's information, your application is vulnerable to Insecure Direct Object Reference.

```http
# The attacker is logged in as user 1234
https://example.org/user/id/1234

# The attacker changes the id in the URL and gains access to a different user
https://example.org/user/id/1235
```

For example, in the Express code below, the value given in the URL is available as `req.params.id`, and we use that value to retrieve the corresponding record in the database. We also check that the request is from an authenticated user, by (calling the `isAuthenticated` function). But critically, we don't check that the ID of the authenticated user matches the ID in the URL, and this enables one authenticated user (the attacker) to get a page for a different authenticated user (the victim).

```js example-bad
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated()) {
    // Authentication is not enough!
    res.render("user", { user });
  }
});
```

Instead, you should implement rules to authorize access to user information. For example, only render the user page if the logged-in user id matches with the requested user id. Otherwise return a HTTP {{HTTPStatus("401")}} `Unauthorized` response.

```js
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated() && req.session.userId === req.params.id) {
    res.render("user", { user });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});
```

### Document manipulation

Similar to URL tampering, the document body of a page can be manipulated by an attacker by modifying values of {{HTMLElement("form")}} elements, like radio buttons, checkboxes, or (hidden) {{HTMLElement("input")}} elements in the browser's developer tools.
For example, maybe your application doesn't provide the user's ID in the URL but instead passes the user ID in a hidden form element:

```html
<form action="updateUser" method="POST">
  <input type="hidden" name="user_id" value="1234" />
  <button type="submit">Update profile</button>
</form>
```

If no server-side access control is performed, the attacker can manipulate the `user_id` value in the hidden `<input>` element to a different user ID and might be able to modify the profile without authorization.

### Cookie and session data manipulation

Attackers might also manipulate cookies and session data to impersonate other users. The attacker can use the browser's developer tools to modify cookie values. In bad implementations, session IDs are composed by username, user id, or other predictable information in clear text. Or they are insufficiently encoded by weak algorithms like `base64` encoding. In the following example the attacker can just change the `SESSIONID` clear text in the {{HTTPHeader("Cookie")}} header to a different user ID and it could possibly get inside the application without prior authentication.

```http example-bad
GET /sign-in HTTP/1.1
Host: example.org
Cookie: SESSIONID=user1234
```

### File access

A special case of IDOR attacks is access to files or directories that aren't protected by access control. For example, if you provide a folder for PDF file uploads and the uploads get named sequentially, an attacker can guess the filenames and download them all if no access control is provided. Potentially, other files in unprotected directories, such as server configuration files, can be obtained as well which could lead to additional vulnerabilities.

```http
https://example.org/static/pdfs/1.pdf
https://example.org/static/pdfs/2.pdf
```

## Defenses against IDOR

### Access control for each object

The most important mitigation for IDOR attacks is to implement server-side access control checks for each object that users try to access. Always verify that the authenticated user has the right to access or perform actions on the targeted object.

### Identifier complexity

Ensure that identifiers for resources can't be guessed by an attacker. Do not expose any personally identifiable information (PII), like user names or email addresses in the URL. Instead use a unique non-guessable token to represent the user. You can use more complex IDs as primary keys, like {{glossary("UUID", "UUIDs")}}, and make it harder to guess valid values. However, this only reduces the likelihood of guessing valid IDs and does not replace the need for proper access control.

### Session IDs

Session IDs require special security measurements and should never be predictable nor contain any direct object references like the user name or user ID. If you can, use secure mechanism in established frameworks to generate non-predictable, safe, long session IDs. The use of existing frameworks or libraries often also has the advantage that additional [secure cookie configurations](/en-US/docs/Web/Security/Practical_implementation_guides/Cookies) are integrated already as well.

If you must generate session IDs yourself, do not generate session IDs from any predictable information. Instead, generate IDs that are very long and based on data from cryptographically secure pseudo-random number generators (CSPRNG). If you're combining randomness with non-random data such as timestamps and user IDs to avoid collisions, make sure to use strong and non-reversible hash algorithms.

## Defense summary checklist

- Always verify that the authenticated user is authorized to access or modify the object.
- Avoid exposing predictable, sequential, or sensitive object identifiers (like user IDs or email addresses).
- Use more complex IDs that are harder to predict (for example, UUIDs).
- Pay special attention to session ID security, prefer non-predictable IDs and cryptographically secure pseudo-random numbers where possible.

## See also

- [OWASP: Insecure Direct Object Reference Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)
- [OWASP: Session Prediction](https://owasp.org/www-community/attacks/Session_Prediction)
