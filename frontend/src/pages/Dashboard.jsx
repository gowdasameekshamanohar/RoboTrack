function Dashboard() {
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
        <h3>Dashboard content coming next</h3>
      </section>
    </main>
  )
}

export default Dashboard