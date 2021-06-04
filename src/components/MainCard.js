import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function MainCard({
  name,
  image,
  category,
  bgcolor,
  btncolor,
  investment,
  price,
  completionpct,
  handleViewProgress,
  handleViewTimeline,
  ROI,
}) {
  return (
    <>
      <Col sm="12" lg="6" md="12" className="mb-3 text-white text-center">
        <Card
          className="shadow-sm"
          style={{
            cursor: "pointer",
            borderLeftColor: "#ccc",
            borderLeftWidth: "3px",
            borderTop: 0,
            borderBottom: 0,
            borderRight: 0,
            backgroundColor: bgcolor,
          }}
        >
          <Card.Body>
            <Row>
              <Col>
                <img
                  src={image}
                  alt="icon"
                  style={{
                    objectFit: "cover",
                    width: "15rem",
                    height: "8rem",
                  }}
                />
                {investment === "active" ? (
                  <>
                    <Button
                      className={`btn btn-${btncolor} btn-sm   mt-3 mb-1 mr-3 font-size-sm`}
                      onClick={() => handleViewProgress()}
                    >
                      <small>View Progess</small>
                    </Button>
                    <Button
                      className={`btn btn-${btncolor} btn-sm  mt-3 mb-1 font-size-sm`}
                      onClick={() => handleViewTimeline()}
                    >
                      <small>View Timeline</small>
                    </Button>
                  </>
                ) : (
                  <Button
                    className={`btn btn-${btncolor}  mt-3 mb-1 py-2 px-5 font-size-sm`}
                  >
                    <small>Invest Now</small>
                  </Button>
                )}
              </Col>
              <Col className=" text-left">
                <Card.Text className=" text-dark">
                  <label className="project-value">Name:&nbsp; </label>
                  <span>{name}</span> <br />
                  <label className="project-value">Category:&nbsp; </label>
                  <span>{category}</span>
                  <br />
                  <label className="project-value">Price:&nbsp; </label>
                  <span>{price}</span>
                  <br />
                  {investment === "active" ? (
                    <>
                      {" "}
                      <label className="project-value">
                        Completion percentage:&nbsp;{" "}
                      </label>
                      <span>{completionpct}</span>
                    </>
                  ) : (
                    <>
                      <label className="project-value">ROI:&nbsp; </label>
                      <span>{ROI}</span>
                    </>
                  )}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
