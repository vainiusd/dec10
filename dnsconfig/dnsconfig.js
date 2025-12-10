var REG_NONE = NewRegistrar("none");
var DNS_OUTSIDE = NewDnsProvider("cloudflare");
var DNS_INSIDE = NewDnsProvider("bind");

// Meta settings for individual Cloudflare records.
var CF_PROXY_OFF = {"cloudflare_proxy": "off"};
var CF_PROXY_ON = {"cloudflare_proxy": "on"};

require_glob("../zones/");


