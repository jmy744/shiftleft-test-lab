
export function getUser(req, res) {
  const users = ["Alice", "Bob", "Charlie"];
  const index = Number(req.query.index);

  return res.json({
    user: users[index].toUpperCase()
  });
}
