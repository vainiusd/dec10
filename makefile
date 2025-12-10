# Default target (runs when you execute plain "make")
.DEFAULT_GOAL := build

check :
	dnscontrol check \
	  --config ./dnsconfig/dnsconfig.js

test :
	dnscontrol preview \
	  --config ./dnsconfig/dnsconfig.js \
	  --creds ./dnsconfig/creds.json

build :
	dnscontrol push \
	  --config ./dnsconfig/dnsconfig.js \
	  --creds ./dnsconfig/creds.json
	# Copy Bind files to bind config locations
	# Zones need to be preprovisioned on Bind