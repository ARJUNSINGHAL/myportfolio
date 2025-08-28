import { Link } from "react-router-dom";

export default function EventPipeline() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Building an Event-Driven Data Pipeline</h1>
      <p>
        Event-driven architecture helps capture IoT data in real-time.  
        Step 1: ESP32 sends data → API Gateway → Lambda  
        Step 2: Lambda stores data in S3 / Timestream  
        Step 3: Daily aggregation with Athena  
        Step 4: Visualize in Grafana  
      </p>

      <Link to="/" style={{ display: "inline-block", marginTop: "20px" }}>
        ⬅ Back to Home
      </Link>
    </div>
  );
}
