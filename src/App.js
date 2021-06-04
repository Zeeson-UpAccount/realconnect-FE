import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserDashboard from "./pages/UserDashboard";
import UserNavbar from "./components/UserNavbar";

function App() {
  return (
    <>
      <UserNavbar />
      <Container className="mt-5 pt-5">
        <Row>
          <Col lg="12">
            <Router>
              <Switch>
                <Route path="/dashboard" exact component={UserDashboard} />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
