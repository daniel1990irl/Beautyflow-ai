export async function GET() {
  return new Response(
    JSON.stringify({ message: "Hello from BeautyFlow AI API!" }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
