/* eslint-disable react/prop-types */

const Information = ({ information }) => {
  // console.log(information);

  return (
    <div className="information">
      <div className="card">
        <p>IP Address</p>
        <h2>{information.ip}</h2>
      </div>
      <div className="card">
        <p>Location</p>
        <h2>{`${information.location.city}, ${information.location.region} ${information.location.postalCode}`}</h2>
      </div>
      <div className="card">
        <p>Timezone</p>
        <h2>{`UTC ${information.location.timezone}`}</h2>
      </div>
      <div className="card">
        <p>ISP</p>
        <h2>{information.isp}</h2>
      </div>
    </div>
  );
};

export default Information;
