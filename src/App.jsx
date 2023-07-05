import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="section">
      <h1 className="title">Simple Tabs</h1>
      <div className="container glass">
        <div className="tab-page">
          <button
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            tab 1
          </button>
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            tab 2
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            tab 3
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            tab 4
          </button>
          <button
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
          >
            tab 5
          </button>
          <button
            className={activeTab === 5 ? "active" : ""}
            onClick={() => handleTabClick(5)}
          >
            tab 6
          </button>
        </div>

        <div className="tab-container glass">
          <div className={`tab-card ${activeTab === 0 ? "active" : ""}`}>
            <h4 className="tab-title">Lorem nam soluta Title 1 </h4>
            <p className="tab-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              recusandae sint, rerum perferendis eos reiciendis accusamus
              repudiandae nesciunt nam soluta?
            </p>
          </div>
          <div className={`tab-card ${activeTab === 1 ? "active" : ""}`}>
            <h4 className="tab-title">Lorem ea nihil title 2 </h4>
            <p className="tab-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              quibusdam labore praesentium cumque, et quae beatae adipisci ea
              nihil corrupti assumenda deleniti illo eum reprehenderit possimus
              veritatis, excepturi eligendi nisi.
            </p>
          </div>
          <div className={`tab-card ${activeTab === 2 ? "active" : ""}`}>
            <h4 className="tab-title">Lorem quae aut title 3</h4>
            <p className="tab-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              temporibus maiores reiciendis corporis quae aut eveniet, neque
              molestias in similique repudiandae perferendis hic, corrupti
              facilis impedit vitae repellendus adipisci ex voluptas natus minus
              libero ea.
            </p>
          </div>
          <div className={`tab-card ${activeTab === 3 ? "active" : ""}`}>
            <h4 className="tab-title">Lorem labore natus title 4</h4>
            <p className="tab-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
              quae optio ratione eveniet nihil provident labore natus! Incidunt
              dolorem accusamus aspernatur deserunt sapiente culpa non
              perferendis repellendus atque odit est, assumenda consectetur, cum
              possimus voluptates, quidem sint optio delectus architecto?
            </p>
          </div>
          <div className={`tab-card ${activeTab === 4 ? "active" : ""}`}>
            <h4 className="tab-title">Lorem dolor sit amet title 5</h4>
            <p className="tab-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              quis nemo at consectetur blanditiis eos quo iste aspernatur?
              Corporis aperiam nisi numquam consequatur! Rem dolorem vero enim
              quidem sit inventore quam soluta ex dignissimos nemo quos
              perferendis culpa, officiis consequuntur optio exercitationem est
              ipsum omnis illo accusamus temporibus! Sit, aperiam.
            </p>
          </div>
          <div className={`tab-card ${activeTab === 5 ? "active" : ""}`}>
            <h4 className="tab-title">Lorem ipsun amet title 6</h4>
            <p className="tab-description">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              excepturi ratione quod laboriosam. Nisi, vero ut porro voluptate
              tenetur quod optio deserunt aut dignissimos, earum aliquam velit
              aspernatur nobis. Nobis nisi sapiente beatae nihil quo sint natus
              possimus, modi voluptate fuga dicta aliquam dolores ad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
