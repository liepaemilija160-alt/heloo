export default function handler(req, res) {
  res.status(200).json({
    image: "https://picsum.photos/400"
  });
}
