D("chicfycdn.com!outside", REG_NONE, DnsProvider(DNS_OUTSIDE),
  A("@", "192.0.2.1", CF_PROXY_OFF),
  AAAA("@", "2001:DB8::1"),
  CNAME("www", "@", TTL("1h"))
);

D("chicfycdn.com!inside", REG_NONE, DnsProvider(DNS_INSIDE),
  A("@", "192.0.2.1"),
  AAAA("@", "2001:DB8::1"),
  CNAME("www", "@", TTL("1h"))
);

D_EXTEND("local.chicfycdn.com!inside",
  A("server", "10.32.0.1"),
);