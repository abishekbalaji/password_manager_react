import "./RetrievedItems.scss";

const RetrievedItems = ({ creds }) => {
  return (
    <div className="retrieved-items_container">
      {creds.length === 0 ? (
        <span className="retrieved-items_no-match">No match</span>
      ) : (
        creds.map(({ user, password }, idx) => (
          <div key={idx} className="retrieved-item">
            <span className="retrieved-item_user">
              User: <span className="retrieved-item_user-value">{user}</span>
            </span>
            <span className="retrieved-item_password">
              Password:{" "}
              <span className="retrieved-item_password-value">{password}</span>
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default RetrievedItems;
