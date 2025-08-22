export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const GOOGLE_SCRIPT_URL = process.env.API_URL;

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });

      const data = await response.text();

      res.setHeader("Content-Type", "application/json");
      res.status(200).send(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Proxy error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
