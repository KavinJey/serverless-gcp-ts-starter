# Serverless TypeScritp starter

A serverless starter that adds TypeScript syntax, serverless-offline, environment variables and unit test support. Based on the aws-nodejs-typescript template provided by the serverless framework.

[Serverless GCP TypeScript starter](https://github.com/KavinJey/serverless-gcp-ts-starter) uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin, [ts-loader](https://github.com/TypeStrong/ts-loader), [jest](https://github.com/facebook/jest) and [ts-jest](https://github.com/kulshekhar/ts-jest).

- **ES7 syntax in your handler functions**
  - Use `import`, `export`, `async` and `await`
- **Package your function using webpack**
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`
- **Add environment variables for your stages**

---

### Starter function

Here's the code for the sample function:

```typescript
import "source-map-support/register";
import { HttpFunction } from "@google-cloud/functions-framework/build/src/functions";

export const hello: HttpFunction = (request, response) => {
  console.log(request);
  response.status(200).send("Hello World! Let's start Typescript!!");
};
```

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/google/guide/installation/)
- [Configure your GCP CLI](https://serverless.com/framework/docs/providers/google/guide/credentials/)

### Installation

To create a new Serverless project.

```bash
$ serverless install --url https://github.com/KavinJey/serverless-gcp-ts-starter --name my-project
```

Enter the new directory

```bash
$ cd my-project
```

Install the Node.js packages

```bash
$ npm install
```

### Usage

To run unit tests on your local environment

```bash
$ npm test
```

To run a function on your local environment

```bash
$ serverless invoke local --function hello
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

Deploy your project

```bash
$ serverless deploy
```

Deploy a single function

```bash
$ serverless deploy function --function hello
```

### Maintainers

Serverless GCP TypeScript starter is maintained by Kavin Jey ([@KavinJey](https://github.com/KavinJey)) forked from Serverless Typescript Starter made by Mariano Uvalle ([@AYM1607](https://github.com/AYM1607)).
