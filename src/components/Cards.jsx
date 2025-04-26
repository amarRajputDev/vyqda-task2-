
export default function UserCard({ user }) {
  return (
    <div className="card h-100">
      <div className="card-body border">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
        <div className="card-text">
          <p>
            <i className="bi bi-envelope me-2"></i>
            {user.email}
          </p>
          <p>
            <i className="bi bi-telephone me-2"></i>
            {user.phone}
          </p>
          <p>
            <i className="bi bi-building me-2"></i>
            {user.company.name}
          </p>
        </div>
      </div>
    </div>
  )
}