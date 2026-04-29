export default function handler(req, res) {
  const { prompt } = req.body;

  let image = "";

  if (prompt.toLowerCase().includes("car")) {
    image = "https://images.unsplash.com/photo-1503376780353-7e6692767b70";
  } 
  else if (prompt.toLowerCase().includes("cat")) {
    image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131";
  } 
  else {
    image = "https://picsum.photos/400";
  }

  res.status(200).json({ image });
}
