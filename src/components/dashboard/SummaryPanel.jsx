import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Users2, PartyPopper, MapPin, LucideSun } from "lucide-react";

export default function SummaryPanel({ stats }) {
  const items = [
    { icon: <Users2 size={32} />,   label: "예상인구", value: stats.population },
    { icon: <PartyPopper size={32} />, label: "행사",   value: stats.events     },
    { icon: <MapPin size={32} />,    label: "랜드마크", value: stats.landmarks },
    { icon: <LucideSun size={32} />, label: "날씨",   value: stats.weather    },
  ];

  return (
    <Card>
      <Card.Body>
        <Row className="text-center">
          {items.map((it) => (
            <Col key={it.label}>
              <div>{it.icon}</div>
              <div className="mt-2">{it.label}</div>
              <div className="fw-bold">{it.value}</div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}