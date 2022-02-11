import { ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col, Steps } from "antd";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../constant";
const { Step } = Steps;

const FlowSteps = ({ steps }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [globalState, _] = useContext(StateContext);

  let currentStep = globalState.step || 0;

  return dimensions.width < 532 ? (
    <Step
      title={
        <Row justify="space-around" align="middle" gutter={[16, 16]}>
          <Col>
            <div style={{ fontSize: "1.5em", color: "black" }}>
              {steps[currentStep].title}
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "13px",
                fontWeight: "480",
              }}
            >
              {steps[currentStep].description.split("+").map((i) => (
                <div
                  key={i}
                  style={{ lineHeight: "1.25em", fontSize: "1.25em" }}
                >
                  {i}
                </div>
              ))}
            </div>
          </Col>
          <Col
            style={{
              background: "rgb(246, 194, 67)",
              borderRadius: "5px",
              marginLeft: "0.5em",
            }}
          >
            <div style={{ fontSize: "2em", padding: "0.3em", color: "black" }}>
              {steps[currentStep].image}
            </div>
          </Col>
        </Row>
      }
    />
  ) : (
    <Row justify="space-between" align="middle">
      {steps.map((item, i) => (
        <>
          <Col>
            <Row justify="center" align="top" gutter={[16, 16]}>
              <Col>
                <div
                  style={{
                    fontSize: "1.5em",
                    color: currentStep === i ? "black" : "",
                  }}
                >
                  {" "}
                  {item.title}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: "480",
                  }}
                >
                  {item.description.split("+").map((i) => (
                    <div
                      key={i}
                      style={{ lineHeight: "1.25em", fontSize: "1.15em" }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </Col>
              <Col
                style={{
                  background:
                    currentStep === i
                      ? "rgb(246, 194, 67)"
                      : "rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  marginLeft: "0.5em",
                }}
              >
                <div
                  style={{
                    fontSize: "2em",
                    padding: "0.3em",
                    color: currentStep === i ? "black" : "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {item.image}
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          {i != 2 && <ArrowRightOutlined style={{ fontSize: "1.8em" }} />}
        </>
      ))}
    </Row>
  );
};

export default FlowSteps;
