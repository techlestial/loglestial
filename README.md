# @techlestial/loglestial

Colorful Node.js logging — console levels + optional file output.

- **Site:** [loglestial.vercel.app](https://loglestial.vercel.app)
- **Pair:** [@techlestial/gitlestial](https://github.com/techlestial/gitlestial)

## Install

```sh
npm i @techlestial/loglestial
```

## Usage

```js
import Loglestial from "@techlestial/loglestial";

const logger = Loglestial.init();
logger.info("ready");
logger.error("failed", new Error("reason"));
```

## Develop

```sh
npm install
npm test
npm run build
```

MIT · [@techlestial](https://github.com/techlestial)
