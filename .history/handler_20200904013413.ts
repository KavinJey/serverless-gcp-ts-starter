import "source-map-support/register";

export const hello = (request, response) => {
  console.log(request);
  response.status(200).send("Hello World! Let's start Typescript!!");
};
