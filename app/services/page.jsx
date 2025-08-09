"use client";

import Card from "@/app/components/Card"; 
import cardData from "../components/CardData";

export default function NewData() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 w-full px-4">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map(({ icon, title, count, href }, index) => (
          <Card
            key={index}
            icon={icon}
            title={title}
            count={count}
            href={href}
          />
        ))}
      </div>
    </div>
  );
}
