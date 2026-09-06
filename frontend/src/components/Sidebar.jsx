import {
  LayoutDashboard,
  Bot,
  BarChart3,
  PlusCircle,
  Settings,
  Radio,
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <Bot size={28} />
        </div>

        <div>
          <h1>RoboTrack</h1>
          <span>FLEET CONTROL</span>
        </div>
      </div>

      <nav className="nav-menu">
        <p className="nav-label">MAIN MENU</p>

        <a href="#" className="nav-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>

        <a href="#" className="nav-item">
          <Bot size={20} />
          <span>Robots</span>
        </a>

        <a href="#" className="nav-item">
          <BarChart3 size={20} />
          <span>Analytics</span>
        </a>

        <a href="#" className="nav-item">
          <PlusCircle size={20} />
          <span>Add Robot</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </a>

        <div className="system-status">
          <Radio size={16} />
          <div>
            <strong>System Online</strong>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar