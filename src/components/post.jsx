import React from "react";
import { data } from "./data";
import { Navbar, Nav, NavDropdown, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Post extends React.Component {
  componentDidMount() {
    //    const { details } = this.props.match.params;
  }

  render() {
    const bg = ["secondary", "success", "danger", "info", "dark"];

    const { handle } = this.props.match.params;

    //   const { id } = this.props.location.id;

    return data.map(post => {
      if (post.id === handle) {
        const { title, des, date } = post;
        return (
          <div style={{ marginTop: "14px" }}>
            <Card
              className="text-center"
              bg={bg[Math.floor(Math.random() * bg.length)]}
              text="white"
            >
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Text>{des}</Card.Text>
                <a href="http://facebook.com" target="_blank">
                  <Button variant="primary">Register Now</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });
  }
}
