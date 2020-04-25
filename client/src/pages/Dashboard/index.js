import React from "react";
import { Row, Calendar, Button } from "antd";

import ContentCard from "../../components/ContentCard";

const calendarButton = <Button>Crear evento</Button>;

const Dashboard = () => {
  return (
    <div style={{ height: "100%" }}>
      <Row>
        <ContentCard
          title="Calendario"
          bodyStyle={{ padding: "5px" }}
          actions={[calendarButton]}
        >
          <Calendar fullscreen={false} />
        </ContentCard>
      </Row>
    </div>
  );
};
export default Dashboard;
