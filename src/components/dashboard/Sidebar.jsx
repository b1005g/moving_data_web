import { Card, CardContent } from "../ui/card.jsx";
import CategoryButton from "./CategoryButton.jsx";
import categories from "../../data/categories.js";

export default function Sidebar({ active, setActive }) {
  return (
    <Card className="rounded-3xl p-4 shadow-md">
      <CardContent className="grid grid-cols-3 gap-4">
        {categories.map(c => (
          <CategoryButton key={c.key} cat={c} active={active === c.key} onPick={setActive} />
        ))}
      </CardContent>
    </Card>
  );
}