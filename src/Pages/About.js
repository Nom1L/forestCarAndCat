import React, { Component } from "react";
import { Nav, Row, Container, Tab, Col } from "react-bootstrap";
import forestone from '../assets/forestOne.jpeg';
import foresttwo from '../assets/forestTwo.jpeg';
import forestthree from '../assets/forestThree.jpeg';


export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-exemple" defaultAchtiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="fixed-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<img
										src={ foresttwo }
										alt="Forest"
										style={{width: 500}}
									/>	
									<p>
									One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	
									</p>							
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fui-design-with-figma-tutorial%2F&psig=AOvVaw3JS7eOtzb-3xb2ffhpbKsz&ust=1666039884209000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjK763Q5foCFQAAAAAdAAAAABAE"
									/>	
									<p>
									One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	
									</p>							
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fui-design-with-figma-tutorial%2F&psig=AOvVaw3JS7eOtzb-3xb2ffhpbKsz&ust=1666039884209000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjK763Q5foCFQAAAAAdAAAAABAE"
									/>	
									<p>
									One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	
									</p>							
								</Tab.Pane>
								<Tab.Pane eventKey="fourth">
									<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fui-design-with-figma-tutorial%2F&psig=AOvVaw3JS7eOtzb-3xb2ffhpbKsz&ust=1666039884209000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjK763Q5foCFQAAAAAdAAAAABAE"
									/>	
									<p>
									One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	
									</p>							
								</Tab.Pane>
								<Tab.Pane eventKey="fifth">
									<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fui-design-with-figma-tutorial%2F&psig=AOvVaw3JS7eOtzb-3xb2ffhpbKsz&ust=1666039884209000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjK763Q5foCFQAAAAAdAAAAABAE"
									/>	
									<p>
									One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	One Two Three Two One	
									</p>							
								</Tab.Pane>

							</Tab.Content>
						</Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
