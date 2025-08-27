// Example portfolio with projects and blog summaries
export default function App() {
  // Your Projects
  const projects = [
    {
      title: "ESP32 → AWS S3 Pipeline",
      description:
        "Built a real-time pipeline that sends ESP32 sensor data to AWS using API Gateway, Lambda, and S3.",
      link: "https://github.com/YOUR_USERNAME/esp32-aws-pipeline",
    },
    {
      title: "IoT Dashboard with Grafana",
      description:
        "Created a real-time monitoring system using AWS Timestream + Grafana to visualize IoT data.",
      link: "https://github.com/YOUR_USERNAME/iot-grafana-dashboard",
    },
  ];

  // Your Blog Posts
  const blogs = [
    {
      title: "How to Connect ESP32 with AWS (Step by Step)",
      summary:
        "Beginner-friendly guide to connect ESP32 to AWS using API Gateway and Lambda.",
      link: "https://yourblog.com/esp32-aws-guide",
    },
    {
      title: "Building an Event-Driven Data Pipeline",
      summary:
        "Explained how to set up an automated IoT pipeline with S3, Lambda, and Athena.",
      link: "https://yourblog.com/event-driven-pipeline",
    },
    {
      title: "Hosting Grafana on Your Own Domain",
      summary:
        "Step-by-step guide on deploying Grafana and connecting it with your domain.",
      link: "https://yourblog.com/host-grafana",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Hi, I’m Arjun 👋</h1>
        <p>IoT • AWS • Tech Projects | Building smart solutions step by step</p>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2>About Me</h2>
        <p>
          I’m a tech enthusiast passionate about IoT, AWS, and cloud-driven automation. 
          I love turning ideas into real-world projects and sharing step-by-step tutorials 
          that make complex concepts simple and fun.
        </p>
      </section>

      {/* Projects Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Projects</h2>
        <ul>
          {projects.map((proj, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              <b>{proj.title}</b> – {proj.description} <br />
              <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Blog Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Blog</h2>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              <b>{blog.title}</b> – {blog.summary} <br />
              <a href={blog.link} target="_blank" rel="noreferrer">Read More</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Let’s Connect</h2>
        <p>
          Email: <a href="Arjunsinghal150@gmail.com">youremail@example.com</a>
        </p>
        <p>
          <a href="https://github.com/ARJUNSINGHAL" target="_blank" rel="noreferrer">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/arjun-singhal-888385145" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </footer>

    </div>
  );
}
