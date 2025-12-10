D("chicfycdn.com", REG_NONE, DnsProvider(DNS_OUTSIDE), DnsProvider(DNS_INSIDE),
  A("@", "192.0.2.1", CF_PROXY_ON),
  AAAA("@", "2001:DB8::1"),
  CNAME("www", "@", TTL("1h"))
);

D("local.chicfycdn.com", REG_NONE, DnsProvider(DNS_INSIDE),
  A("server", "10.32.0.1"),
);