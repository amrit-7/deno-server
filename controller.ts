// deno-lint-ignore-file no-explicit-any no-unused-vars

function getData({ request, response }: { request: any; response: any }) {
  response.body = "Hello Welcome to Oak Deno";
}

async function postData({
  request,
  response,
}: {
  request: any;
  response: any;
}) {
  const body = await request.body().value;
  console.log("🚀 ~ file: controller.ts:16 ~ body:", body)
  response.body = { message: "OK" };
}
export { postData, getData };
