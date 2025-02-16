import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Setup = () => {
  const router = useRouter();
  const { templateId } = router.query;
  const [template, setTemplate] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    if (templateId) {
      fetch(`https://api.example.com/templates/${templateId}`) // Replace with actual API
        .then((res) => res.json())
        .then((data) => setTemplate(data))
        .catch((error) => console.error("Error fetching template details:", error));
    }
  }, [templateId]);

  if (!template) return <p>Loading template...</p>;

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Setting Up: {template.name}</h2>
      <img src={template.image} alt={template.name} style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }} />
      <p>Customization options will go here...</p>
    </div>
  );
};

export default Setup;
