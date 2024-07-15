# experiments--nestjs-nx--tcp-microservices

1. `pnpm install`
2. `pnpm exec nx run email-microservice:serve` and wait until microservice starts
3. `pnpm exec nx run api-gateway:serve` and wait until app starts
4. Use VSCode's REST Client extension and send requests from `api/requests.http` file
   * Or use other HTTP client, e.g. Postman
