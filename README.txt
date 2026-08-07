LÄGENHET 434 – WEBBPORTAL

Vercel behöver två environment variables:
HA_PUSH_TOKEN=iCNM1bozW72GKyqQCGr2KNDT5EOiSvHV5Q7c2268XLI
BLOB_READ_WRITE_TOKEN=<skapas när du kopplar Vercel Blob till projektet>

Home Assistant skickar endast 434-data utåt till /api/push.
Webbsidan har ingen anslutning tillbaka till Home Assistant eller ditt lokala nät.

Efter publicering:
1. Byt DIN-VERCEL-ADRESS i home-assistant-434.yaml.
2. Lägg ha_434_push_token i secrets.yaml.
3. Lägg in rest_command + automation i HA och starta om/ladda om.
