# AirByte connector example for NodeJS

https://docs.airbyte.io/understanding-airbyte/airbyte-specification#spec


```bash
.
├── Dockerfile
├── README.md
├── build.gradle
├── commands
│   ├── check.js # https://docs.airbyte.io/understanding-airbyte/airbyte-specification#check
│   ├── discover.js # https://docs.airbyte.io/understanding-airbyte/airbyte-specification#discover
│   ├── read.js # https://docs.airbyte.io/understanding-airbyte/airbyte-specification#read
│   └── spec.js # https://docs.airbyte.io/understanding-airbyte/airbyte-specification#spec
├── commnad-parser.js
├── index.js # main
├── package-lock.json
├── package.json
├── spec.json # Schema
└── utils
    ├── get-input-file-path.js
    └── read-json.js
```


# How to integrate this connector

1) push docker image to a container registry
2) if it's your first time initializing Airbyte, skip the onboarding process
3) go to setting -> sources -> new connector
