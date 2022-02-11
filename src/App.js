import React, { useEffect, useState } from "react";
import { Button, Col, Layout, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import "./app.css";
import { ReactComponent as Alva } from "./alva.svg";

import { StateContext, steps, CatalogContext, OfferContext } from "./constant";
import FlowSteps from "./components/flow-steps-card";
import Icon, { MediumSquareFilled } from "@ant-design/icons";

const { Content, Footer } = Layout;

function App() {
  const [globalState, setGlobalState] = useState({
    step: 0,
    flow_id: uuidv4(),
  });
  const [selectedCatalogItem, setSelectedCatalogItem] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    if (!globalState?.flow_id) {
      setGlobalState({ step: 0, flow_id: uuidv4() });
      setSelectedCatalogItem(null);
      setSelectedOffer(null);
    }
  }, [globalState]);

  const disabled =
    (globalState.step === 0 && !selectedCatalogItem) ||
    (globalState.step === 1 && !selectedOffer);

  return (
    <StateContext.Provider value={[globalState, setGlobalState]}>
      <Layout style={{ background: "white" }}>
        <Content style={{ padding: "4em 2em 6em 2em" }}>
          <FlowSteps steps={steps} />
          <CatalogContext.Provider
            value={[selectedCatalogItem, setSelectedCatalogItem]}
          >
            <OfferContext.Provider value={[selectedOffer, setSelectedOffer]}>
              <div style={{ marginTop: "2em" }}>
                {steps[globalState.step].app}
              </div>
            </OfferContext.Provider>
          </CatalogContext.Provider>
        </Content>
        <Footer
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            bottom: 0,
            padding: "1em",
          }}
        >
          <Row justify="space-between">
            <Col>
              <Row gutter={[8, 8]}>
                <Col>
                  <Button
                    href="https://career.alvalabs.io/jobs"
                    target="_blank"
                    className="contact"
                  >
                    Alva Labs
                    <Icon component={Alva} />
                  </Button>
                </Col>
                <Col>
                  <Button
                    href="https://medium.com/alva-labs"
                    target="_blank"
                    className="contact"
                  >
                    <MediumSquareFilled />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              {steps[globalState.step]?.footer && (
                <Button
                  className={!disabled && "alva shake"}
                  shape="round"
                  disabled={disabled}
                  onClick={() =>
                    setGlobalState({
                      ...globalState,
                      step: steps[globalState.step].footer.step,
                    })
                  }
                >
                  {steps[globalState.step].footer.title}
                </Button>
              )}
            </Col>
          </Row>
        </Footer>
      </Layout>
    </StateContext.Provider>
  );
}

export default App;
