
export function handler(req, res) {
  if (req.query.ok) {
    res.send("done");
  }

  return res.json({ done: true });
}
