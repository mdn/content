---
title: Round Trip Time (RTT)
slug: Glossary/Round_Trip_Time
page-type: glossary-definition
---

{{GlossarySidebar}}

**Round Trip Time (RTT)** is the length time it takes for a data packet to be sent to a destination plus the time it takes for an acknowledgment of that packet to be received back at the origin. The RTT between a network and server can be determined by using the `ping` command.

```bash
$ ping example.com
PING example.com(2001:db8:220:1:248:1893:25c8:1946 (2001:db8:220:1:248:1893:25c8:1946)) 56 data bytes
64 bytes from 2001:db8:220:1:248:1893:25c8:1946 (2001:db8:220:1:248:1893:25c8:1946): icmp_seq=1 ttl=52 time=85.4 ms
64 bytes from 2001:db8:220:1:248:1893:25c8:1946 (2001:db8:220:1:248:1893:25c8:1946): icmp_seq=2 ttl=52 time=87.0 ms
64 bytes from 2001:db8:220:1:248:1893:25c8:1946 (2001:db8:220:1:248:1893:25c8:1946): icmp_seq=3 ttl=52 time=86.7 ms
64 bytes from 2001:db8:220:1:248:1893:25c8:1946 (2001:db8:220:1:248:1893:25c8:1946): icmp_seq=4 ttl=52 time=86.4 ms
^C
--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 85.436/86.363/86.973/0.577 ms
```

In the above example, the average round trip time is shown on the final line as 26.8ms.

## See also

- [Time to First Byte (TTFB)](/en-US/docs/Glossary/Time_to_first_byte)
- [Latency](/en-US/docs/Glossary/Latency)
