import React from "react";
import "../App.css";
import { Button } from 'react-bootstrap';
import {Accordion} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

export const DisplayItem = ({ note, onDelete }) => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button}  eventKey="0">
          <h6>{note.title}</h6>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{note.desc}<br></br>
          <br></br>
          <button className="btn btn-outline-danger btn-sm" onClick={() => {onDelete(note)}}>Delete</button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

