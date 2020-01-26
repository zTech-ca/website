import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Welcome to zTech!</div>
        <p>
          Grow your brand today! Feel free to have a free consultation today!
        </p>
        <h2
          style={{
            margin: "0 0"
          }}
        >
          CEO
        </h2>
        <h1 style={{ margin: "10px 0" }}>Viet-Nhien Tran Duc</h1>
        <h3 style={{ margin: "0 0" }}>
          Hello, I will be a prime minister of Canada in 30 years
        </h3>
        <img
          style={{
            objectFit: "cover",
            width: "300px",
            height: "300px"
          }}
          alt="nick-profile"
          src="/assets/members/nick.jpg"
        />
        <p>
          A very good software engineer. He will probably ask you for a lot
          money but hey, it is worth every penny
        </p>
        <h2 style={{ margin: "0 0" }}>Employee of the month</h2>
        <h1 style={{ margin: "10px 0" }}>Rahmat Saeedi</h1>
        <h3 style={{ margin: "0 0" }}>
          Thank you for buying your CEO a yatch!
        </h3>
        <img
          style={{
            objectFit: "cover",
            width: "300px",
            height: "300px"
          }}
          alt="rahmat-profile"
          src="/assets/members/rahmat.png"
        />
        <p>Hi guys! You realize that this is just a joke</p>
      </div>
    );
  }
}
