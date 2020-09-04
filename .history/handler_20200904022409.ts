import "source-map-support/register";
import { HttpFunction } from "@google-cloud/functions-framework/build/src/functions";

export const hello: HttpFunction = (request, response) => {
  console.log(request);
  response.status(200).send("Hello World! Let's start Typescript!!");
};
