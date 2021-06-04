import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import HorizontalTimeline from "react-horizontal-timeline";

const MYVALUES = [
  {
    date: "10/01/2021",
    content:
      "Potential property found  October 1st, 2021 Low-risk investment due to purchase price and total buildout cost.",
  },
  {
    date: "10/04/2021",
    content:
      "Acquired property October 4th, 2021 Property acquired through a pre-foreclosure process",
  },
  {
    date: "10/07/2021",
    content:
      "Relocating tenants October 7th, 2021 Once tenants have been relocated, construction will begin. ",
  },
  {
    date: "10/10/2021",
    content:
      "Low-risk investment due to purchase price and total buildout cost.",
  },
];

export default function TimelineModal({ handleClose, modalState }) {
  const [value, setValue] = useState({ id: 0 });
  const [, setPrevious] = useState({ id: 0 });

  useEffect(() => {
    //   Get first content
    MYVALUES.forEach((result, index) => {
      if (index === 0) {
        setValue({ id: index, content: result.content });
      }
    });
  }, []);

  return (
    <div>
      <Modal
        animation={false}
        show={modalState === "modal-timeline"}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Body className="pt-4 pb-4">
          <h4 className="font-weight-bold text-center  text-primary">
            Monitor Your Timeline!
          </h4>
          <p className="mb-5 text-center">
            This section displays the current state of your project and the next
            steps.{" "}
          </p>

          <div>
            {/* Bounding box for the Timeline */}

            <div style={{ width: "90%", height: "100px", margin: "0 auto" }}>
              <HorizontalTimeline
                isTouchEnabled={true}
                index={value.id}
                indexClick={(index) => {
                  MYVALUES.forEach((result, idx) => {
                    if (index === idx) {
                      setValue({ id: index, content: result.content });
                      setPrevious(value.id);
                    }
                  });
                }}
                values={MYVALUES.map((result) => result.date)}
              />
            </div>
            <div style={{ width: "90%", margin: "0 auto" }} className=" pt-2">
              {/* any arbitrary component can go here */}

              {value.content}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
