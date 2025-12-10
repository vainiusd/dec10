var REG_NONE = NewRegistrar("none");
var DNS_OUTSIDE = NewDnsProvider("cloudflare");
var DNS_INSIDE = NewDnsProvider("bind");

DEFAULTS(
  CF_PROXY_DEFAULT_OFF // turn proxy off when not specified otherwise
);
// CF Proxy setting options:
// CF_PROXY_OFF, CF_PROXY_ON
// More:
// https://docs.dnscontrol.org/provider/cloudflareapi

require_glob("../zones/");


