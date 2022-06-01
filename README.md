# OWASP Demo

This demo was created for the course "Informationssicherheit" from the University of Vienna.

## Getting started

You can spin up the whole stack with the following command:

```
docker-compose build && docker-compose up
```

The Postgres instance will be exposed through port `15432`, the Next.js app through port `3000` while the naughty `third-party` module can be accessed through port `4000`.
