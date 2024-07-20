---
title: Rsync
slug: Glossary/Rsync
page-type: glossary-definition
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/) is an open-source file synchronizing tool that provides incremental file transfer. It can be used over insecure and secure transports (like SSH). It is available on most Unix-based systems (such as macOS and Linux) and Windows. There are also GUI-based tools that use rsync, for example, [Acrosync](https://acrosync.com/mac.html).

A basic command looks like this:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` is a dash followed by one or more letters, for example `-v` for verbose error messages, and `-b` to make backups. See the full list of options at the [rsync man page.](https://linux.die.net/man/1/rsync) (Search for "Options summary.")
- `SOURCE` is the path to the local file or directory that you want to copy or synchronize
- `user@` is the credentials of the user on the remote server you want to copy files over to.
- `x.x.x.x` is the IP address of the remote server.
- `DESTINATION` is the path to the location you want to copy your directory or files to on the remote server.

You can also make a connection over SSH using the `-e` option as shown:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

There are numerous examples on the Internet, including those at the [official website](https://rsync.samba.org/examples.html), and at the [Wikipedia entry](https://en.wikipedia.org/wiki/Rsync#Examples) for rsync.
