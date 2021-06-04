import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  activeInvestment,
  inActiveInvestment,
} from "../components/common/projects";

import MainCard from "../components/MainCard";
import ProgressModal from "../components/Modals/ProgressModal";
import TimelineModal from "../components/Modals/TimelineModal";

export default function UserDashboard() {
  const [modalState, setModalState] = useState(
    "modal-progress" | "modal-timeline" | "close"
  );

  const handleViewProgress = () => {
    setModalState("modal-progress");
  };

  const handleViewTimeline = () => {
    setModalState("modal-timeline");
  };

  const handleClose = () => {
    setModalState("close");
  };
  return (
    <div>
      <Container>
        <small className="welcome-text">Welcome Back!</small>

        <ProgressModal handleClose={handleClose} modalState={modalState} />
        <TimelineModal handleClose={handleClose} modalState={modalState} />

        <div className="card mb-4 mt-3 border-0">
          <div className="card-header bg-navyblue text-white  mb-2">
            My Investments
          </div>
          <Row>
            {activeInvestment.map((investment) => {
              return (
                <MainCard
                  bgcolor="#fff"
                  btncolor="primary"
                  investment="active"
                  image={investment.image}
                  key={investment.id}
                  name={investment.name}
                  category={investment.category}
                  completionpct={investment.completionpct}
                  price={investment.price}
                  handleViewProgress={handleViewProgress}
                  handleViewTimeline={handleViewTimeline}
                />
              );
            })}
          </Row>
        </div>

        <div className="card mb-4 mt-4 border-0">
          <div className="card-header bg-navyblue text-white  mb-2">
            Investment Section
          </div>
          <Row>
            {inActiveInvestment.map((investment) => {
              return (
                <MainCard
                  bgcolor="#e6e6e6"
                  investment="notactive"
                  btncolor="white"
                  image={investment.image}
                  key={investment.id}
                  name={investment.name}
                  category={investment.category}
                  ROI={investment.ROI}
                  price={investment.price}
                />
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}
