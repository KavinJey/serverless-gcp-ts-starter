import "source-map-support/register";

export const hello: HttpFunction = (request, response) => {
  console.log(request);
  response.status(200).send("Hello World! Let's start Typescript!!");
};
