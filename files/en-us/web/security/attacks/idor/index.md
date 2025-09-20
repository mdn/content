---
title: Insecure Direct Object Reference (IDOR)
slug: Web/Security/Attacks/IDOR
page-type: guide
sidebar: security
---

**Insecure Direct Object Reference (IDOR)** is a vulnerability that allows an attacker to exploit insufficient access control and insecure exposure of object identifiers, such as database keys or file paths.

This can enable an attacker to access sensitive resources or to perform other unauthorized actions.

## Example scenarios

The classic IDOR attack happens when the server only checks that the user is authenticated, but not whether they are authorized to access an object reference. In a typical flow, the attacker:

1. Logs in as a normal user.
2. Finds a URL, form field, or cookie that references a user or resource ID (e.g., 1234).
3. Modifies the ID to another value (e.g., 1233).
4. Gains unauthorized access to another user's data.

In the following sections we'll explore some concrete examples of this attack.

### URL tampering

A common type of IDOR attack involves manipulation of direct object references in the URL. The "1234" in the following URLs is the user's record in the database (primary key). If an attacker changes this number to any other number (say "1235") and gains access to another user's information, your application is vulnerable to Insecure Direct Object Reference.

```http
# The attacker is logged in as user 1234
https://example.org/user/id/1234

# The attacker changes the id in the URL and gains access to a different user
https://example.org/user/id/1235
```

The problem lies within the server application that doesn't verify which URL is permitted by which user:

```js example-bad
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated) {
    // Authentication is not enough!
    res.render("user", { user });
  }
});
```

Instead, you should implement rules to authorize access to user information. For example, only render the user page if the logged-in user id matches with the requested user id. Otherwise return a HTTP {{HTTPStatus("401")}} `Unauthorized` response.

```js
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated && req.session.userId === req.params.id) {
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

If insufficient server-side access control is performed, the attacker can manipulate the `user_id` value in the hidden `<input>` element to a different user ID and might be able to modify the profile without authorization.

### Cookie or session data manipulation

Attackers might also manipulate cookies or session data to impersonate other users. You can use your browser's developer tools to modify cookie values.

```http
GET /sign-in HTTP/1.1
Host: example.org
Cookie: user_id=1234
```

### File access

A special case of IDOR attacks is access to files or directories that aren't protected by access control. For example, if you provide a folder for PDF file uploads and the uploads get named sequentially, an attacker can guess the filenames and download them all if no access control is provided. Potentially, other files in unprotected directories, such as server configuration files, can be obtained as well which could lead to additional vulnerabilities.

```http
https://example.org/static/pdfs/1.pdf
https://example.org/static/pdfs/2.pdf
```

## Defenses against IDOR

### Access control for each object

The most important mitigation for IDOR attacks is to implement server-side access control checks for each object that users try to access. It is essential, for every request, to verify that the authenticated user has the right to access or perform actions on the targeted object. Never rely solely on client-side data (URLs, cookies, form fields) for security decisions.

### Identifier complexity

Any predictable references, such as sequential numbers or any other guessable strings should be avoided. Do not expose any personally identifiable information (PII), like user names or email addresses in the URL. Instead use a unique non-guessable token to represent the user. You can use more complex IDs as primary keys, like {{glossary("UUID", "UUIDs")}}, and make it harder to guess valid values. However, this only reduces the likelihood of guessing valid IDs and does not replace the need for proper access control.

## Defense summary checklist

- Always verify that the authenticated user is authorized to access or modify the object.
- Never trust identifiers from the client (URLs, form fields, cookies).
- Avoid exposing predictable, sequential, or sensitive object identifiers (like user IDs or email addresses).
- Prefer indirect references or opaque tokens where possible.

## See also

- [OWASP: Insecure Direct Object Reference Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)
