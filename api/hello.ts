// deno-lint-ignore no-unused-vars
export default (req: Request) => {
  return new Response(`Hello, from Deno v${Deno.version.deno}!`);
};
