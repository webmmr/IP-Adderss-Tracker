/* eslint-disable react/prop-types */

const Information = ({ info }) => {
  // console.log(typeof info);

  return (
    <div className="information">
      <div className="card">
        <p>IP Address</p>
        <h2>{info.ip}</h2>
      </div>
      <div className="card">
        <p>Location</p>
        <h2>{`${info.location.city}, ${info.location.region} ${info.location.postalCode}`}</h2>
      </div>
      <div className="card">
        <p>Timezone</p>
        <h2>{`UTC ${info.location.timezone}`}</h2>
      </div>
      <div className="card">
        <p>ISP</p>
        <h2>{info.isp}</h2>
      </div>
    </div>
  );
};

export default Information;
