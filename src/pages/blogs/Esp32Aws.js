import { Link } from "react-router-dom";

export default function Esp32Aws() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>How to Connect ESP32 with AWS</h1>
      <p>
        In this guide, we’ll connect ESP32 with AWS using API Gateway + Lambda + S3.  
        Step 1: Setup AWS IAM and S3 Bucket…  
        Step 2: Configure API Gateway…  
        Step 3: Write Lambda function…  
        Step 4: Flash ESP32 with code…  
      </p>

      <Link to="/" style={{ display: "inline-block", marginTop: "20px" }}>
        ⬅ Back to Home
      </Link>
    </div>
  );
}
