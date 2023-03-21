const Notification = (props) => {
  return (
    <div className={props.name}>
      <img src={props.src} className={props.image} />
      <h1 className={props.heading}>{props.children}</h1>
    </div>
  );
};

const element = (
  <div className="card-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      name="card first-card"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      children="Information Message"
      image="image"
      heading="subhead"
    />
    <Notification
      name="card second-card"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      children="Success Message"
      image="image"
      heading="subhead"
    />
    <Notification
      name="card third-card"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      children="Warning Message"
      image="image"
      heading="subhead"
    />
    <Notification
      name="card fourth-card"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      children="Error Message"
      image="image"
      heading="subhead"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
