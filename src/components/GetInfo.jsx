/* eslint-disable react/prop-types */

const GetInfo = ({ query }) => {
  console.log(query);

  return (
    <>
      <div className="information">
        <div className="card">
          <p>IP Address</p>
          <h2>{query.ip}</h2>
        </div>
        <div className="card">
          <p>Location</p>
          <h2>{`${query.location.city}, ${query.location.region} ${query.location.postalCode}`}</h2>
        </div>
        <div className="card">
          <p>Timezone</p>
          <h2>{`UTC ${query.location.timezone}`}</h2>
        </div>
        <div className="card">
          <p>ISP</p>
          <h2>{query.isp}</h2>
        </div>
      </div>
    </>
  );
};

export default GetInfo;
