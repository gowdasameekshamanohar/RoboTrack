import { useEffect, useState } from "react";

function Dashboard() {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/robots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch robots");
        }

        return response.json();
      })
      .then((data) => {
        setRobots(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load robot data.");
        setLoading(false);
      });
  }, []);

  const activeRobots = robots.filter(
    (robot) => robot.status === "Active"
  ).length;

  const chargingRobots = robots.filter(
    (robot) => robot.status === "Charging"
  ).length;

  const offlineRobots = robots.filter(
    (robot) => robot.status === "Offline"
  ).length;

  return (
    <main className="dashboard-page">
      <div className="topbar">
        <div>
          <p className="eyebrow">COMMAND CENTER</p>

          <h2>Fleet Overview</h2>

          <p className="subtitle">
            Monitor and manage your robotic fleet in real time.
          </p>
        </div>

        <div className="live-status">
          <span className="status-dot"></span>
          Live System
        </div>
      </div>

      <section className="dashboard-content">
        {loading && <p>Loading robot data...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <p>Total Robots</p>
                <h3>{robots.length}</h3>
              </div>

              <div className="stat-card">
                <p>Active</p>
                <h3>{activeRobots}</h3>
              </div>

              <div className="stat-card">
                <p>Charging</p>
                <h3>{chargingRobots}</h3>
              </div>

              <div className="stat-card">
                <p>Offline</p>
                <h3>{offlineRobots}</h3>
              </div>
            </div>

            <div className="robot-section">
              <h3>Robot Fleet</h3>

              <div className="robot-list">
                {robots.map((robot) => (
                  <div className="robot-card" key={robot._id}>
                    <div>
                      <h4>{robot.name}</h4>
                      <p>{robot.id}</p>
                    </div>

                    <div>
                      <span>{robot.status}</span>
                    </div>

                    <div>
                      <p>Battery</p>
                      <strong>{robot.battery}%</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Dashboard;