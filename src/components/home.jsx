import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Card } from "react-bootstrap";
import "./css/home.css";

export class Home extends React.Component {
  render() {
    const bg = ["secondary", "success", "danger", "info", "dark"];
    return (
      <div className="foo">
        <Card
          className="text-center"
          bg={bg[Math.floor(Math.random() * bg.length)]}
          text="white"
        >
          <Card.Header>MSP at CIT Ranchi</Card.Header>
          <Card.Body>
            <Card.Title>Microsoft Student Partner Program</Card.Title>
            <Card.Text>
              Student Partners are a global group of on-campus ambassadors who
              are eager to help fellow students, lead in their local tech
              community, and develop technical and career skills for the future.
              You might find yourself organizing a hackathon to solve the
              world’s toughest problems, mentoring fellow students, or unlocking
              the next great idea with your team — it’s all up to you.
            </Card.Text>
            <Button variant="primary">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/events"
              >
                Events
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
