# Dec10

## Workflow

Deployment workflow sequence:
1. make check
1. make test
1. make build

## Configuration file structure.

`dnsconfig/` - dnscontrol configuration files. Includes configurations from `zones`.  
`zones/` - zone configuration file directory. Subdirectories per domain.  
`bind_zones/` - generated bind zone files.  

## ENV vars

These env vars need to be set:
```
export CF_TOKEN=
export CF_ACCOUNT_ID=
```

