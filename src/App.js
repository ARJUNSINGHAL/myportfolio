import { Routes, Route, Link } from "react-router-dom";
import Esp32Aws from "./pages/blogs/Esp32Aws";
import EventPipeline from "./pages/blogs/EventPipeline";

function App() {
  const projects = [
    {
      title: "ESP32 → AWS S3 Pipeline",
      description: "Pipeline sending ESP32 sensor data to AWS.",
      link: "https://github.com/ARJUNSINGHAL/event-pipeline-project1",
    },
    {
      title: "IoT Dashboard with Grafana",
      description: "Real-time monitoring with AWS Timestream + Grafana.",
      link: "https://github.com/ARJUNSINGHAL/iot-dashboard",
    },
  ];

  const blogs = [
    {
      title: "How to Connect ESP32 with AWS",
      summary: "Step by step ESP32 to AWS guide.",
      link: "/blog/esp32-aws",
    },
    {
      title: "Building an Event-Driven Data Pipeline",
      summary: "Automated IoT pipeline with S3 + Lambda.",
      link: "/blog/event-pipeline",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <header style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1>Hi, I’m Arjun 👋</h1>
                <p>
                  Tech enthusiast passionate about IoT, AWS, and cloud automation.
                </p>
              </header>

              <section style={{ marginBottom: "40px" }}>
                <h2>Projects</h2>
                <ul>
                  {projects.map((p, i) => (
                    <li key={i}>
                      <b>{p.title}</b> – {p.description} <br />
                      <a href={p.link} target="_blank" rel="noreferrer">
                        View on GitHub
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>Project Blogs</h2>
                <ul>
                  {blogs.map((b, i) => (
                    <li key={i}>
                      <b>{b.title}</b> – {b.summary} <br />
                      <Link to={b.link}>Read Blog</Link>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          }
        />

        {/* Blog Routes */}
        <Route path="/blog/esp32-aws" element={<Esp32Aws />} />
        <Route path="/blog/event-pipeline" element={<EventPipeline />} />
      </Routes>
    </div>
  );
}

export default App;
