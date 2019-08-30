import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from 'react-router-bootstrap';
import Row from "react-bootstrap/Row";
import { Button, Collapse, CardGroup } from "react-bootstrap";

interface State {
    open: boolean;
}

export default class Home extends React.Component<State> {
    state: State;

    constructor(state: State) {
        super(state);
        this.state = { open: true };
    }

    setCollapsedState() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <>
                <Row>
                    <Button onClick={() => this.setCollapsedState()}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.open}>{this.state.open ? "Hide options" : "Show options"}</Button>
                </Row>
                <Collapse in={this.state.open}>
                    <Row>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Microsoft Graph</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">For viewing user data</Card.Subtitle>
                                    <Card.Text>
                                        View basic user data from the Graph.
                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/graph">
                                        <Card.Link>Me</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Microsoft Graph</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Your API</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">For accessing your own API</Card.Subtitle>
                                    <Card.Text>
                                        Fetches data from your own Azure AD-protected API.
                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/power">
                                        <Card.Link>Your API</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Your API</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Static scopes</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Pre-configured scopes</Card.Subtitle>
                                    <Card.Text>
                                        Fetches data using pre-configured scopes (e.g., https://graph.microsoft.com/User.Read).
                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/static">
                                        <Card.Link>Static scopes</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Microsoft Graph</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Dynamic scopes</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Just-in-time scope requests</Card.Subtitle>
                                    <Card.Text>
                                        Fetches data using scopes requested at runtime.
                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/jit">
                                        <Card.Link>Dynamic scopes</Card.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/inc">
                                        <Card.Link>Incremental scopes</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Azure AD</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Group claim data</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Include group data in claims</Card.Subtitle>
                                    <Card.Text>
                                        Shows group data included in claims with the <code>groupMembershipClaims</code> attribute.
                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/groups">
                                        <Card.Link>Groups</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Azure AD</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>AppRole claim data</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">View user's role data</Card.Subtitle>
                                    <Card.Text>
                                        Shows AppRole data included in claims for making authorization decisions.
                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/approles">
                                        <Card.Link>Dynamic scopes</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Azure AD</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Claims</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">View claims</Card.Subtitle>
                                    <Card.Text>View authentication claims that got you here</Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <LinkContainer to="/claims">
                                        <Card.Link>Claims</Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Served by Azure AD</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row >
                </Collapse>
            </>
        );
    }
}