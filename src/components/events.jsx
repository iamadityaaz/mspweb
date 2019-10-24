import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Card } from "react-bootstrap";
import './css/events.css';
import { data } from "./data";

export class Events extends React.Component {
  render() {
    const bg = [
      "secondary",
      "primary",
      "success",
      "danger",
      "info",
      "dark"
    ];
    return data.map(post => {
      return (
        <div style={{ marginTop: "14px" }}>
          <Link className = 'link-cards'
            to={{
              pathname: `/event/${post.id}`
            }}
          >
            <Card
              className="text-center"
              bg={bg[Math.floor(Math.random() * bg.length)]}
              text="white"
            >
              <Card.Header>{post.title}</Card.Header>
              <Card.Body>
                <Card.Title>{post.shortDes}</Card.Title>
              </Card.Body>
              <Card.Footer text="white">{`Event Date : ${post.date}`}</Card.Footer>
            </Card>
          </Link>
        </div>
      );
    });
  }
}
