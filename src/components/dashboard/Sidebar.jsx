import React from "react";
// import { Card, CardContent } from "../ui/card.jsx";
import { Card, Button } from "react-bootstrap";
import CategoryButton from "./CategoryButton.jsx";
import categories from "../../data/categories.js";

export default function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <Card className="p-3">
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={activeCategory === cat.key ? "primary" : "outline-secondary"}
            onClick={() => setActiveCategory(cat.key)}
            className="d-flex flex-column align-items-center p-3"
            style={{ width: "120px", height: "120px", borderRadius: "18px" }}
          >
            {cat.icon}
            <small className="mt-1" 
            style={{ fontSize: "1.2rem",
                whiteSpace: "nowrap",}} 
            >
              {cat.label}</small>
          </Button>
        ))}
      </div>
    </Card>
  );
}