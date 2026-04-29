export default function handler(req, res) {
  const { prompt } = req.body;

  const p = prompt.toLowerCase();

  let image = "";

  if (p.includes("car")) {
    image = "https://images.unsplash.com/photo-1503376780353-7e6692767b70";
  } 
  else if (p.includes("cat")) {
    image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131";
  } 
  else if (p.includes("dog")) {
    image = "https://images.unsplash.com/photo-1558788353-f76d92427f16";
  } 
  else if (p.includes("house")) {
    image = "https://images.unsplash.com/photo-1570129477492-45c003edd2be";
  } 
  else {
    image = "https://picsum.photos/400";
  }

  res.status(200).json({ image });
}
