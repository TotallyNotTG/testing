export async function onRequest(context) {
  if (context.request.method === "POST") {
    const data = await context.request.json();
    return new Response(
      JSON.stringify({ message: data.message }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  // Default GET response
  return new Response(
    JSON.stringify({ message: "Hello!" }),
    { headers: { "Content-Type": "application/json" } }
  );
}