import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useGetExchangesQuery } from "../services/exchangeApi";
import Loader from "./Loader";
const Exchanges = () => {
  const { data: exchanges } = useGetExchangesQuery();
  console.log(exchanges);

  const { Text } = Typography;
  const { Panel } = Collapse;

  if (!exchanges) return <Loader />;
  return (
    <>
      <Row>
        <Col span={6}>Exchanges </Col>
        <Col span={6}>24h Trade Volume </Col>
        <Col span={6}>Year Established </Col>
        <Col span={6}>Coingecko Trust Score </Col>
      </Row>

      {exchanges.map((exchange, i) => (
        <Col key={i} span={24}>
          <Collapse>
            <Panel
              key={i}
              showArrow={false}
              destroyInactivePanel={true}
              header={
                <>
                  <Col span={6}>
                    <Text>
                      <strong>{i + 1}. </strong>{" "}
                    </Text>
                    <Avatar className="exchange-image" src={exchange.image} alt="exchange logo" />
                    <Text>{exchange.name}</Text>
                  </Col>
                  <Col span={6}>
                    <Text>{millify(exchange.trade_volume_24h_btc)} BTC</Text>
                  </Col>
                  <Col span={6}>
                    <Text>{exchange.year_established}</Text>
                  </Col>
                  <Col span={6}>
                    <Text>{exchange.trust_score}</Text>
                  </Col>
                </>
              }
            >
              {exchange.description ? (
                <Text> {exchange.description} </Text>
              ) : (
                <Text>
                  {exchange.name} is an exchange headquartered in {exchange.country}. If you would like to learn more
                  about this exchange you may visit their website at <a href={exchange.url}>{exchange.url}</a>{" "}
                </Text>
              )}
            </Panel>
          </Collapse>
        </Col>
      ))}
    </>
  );
};

export default Exchanges;
