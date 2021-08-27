# node 14
FROM node:alpine3.12

WORKDIR /airbyte/integration_code
# Copy source files
COPY . .
# Install any needed dependencies
RUN npm install

ENV AIRBYTE_ENTRYPOINT "node /airbyte/integration_code/index.js"
ENTRYPOINT ["node", "/airbyte/integration_code/index.js"]

LABEL io.airbyte.version=0.2.1
LABEL io.airbyte.name=airbyte/hello-world
