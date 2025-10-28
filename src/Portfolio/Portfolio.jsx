// import Laptop from "/laptop1.jpg"
// import { FaCartPlus } from "react-icons/fa";
import "./portfolio.css"

const portfolio = () => {
    const portfolioData = [
      {
          img: "/adset.png",
        id: "E-c8",
        title: "Web Development",
      },
      {
          img: "/calculator.png",
        id: "E-commere7",
        title: "Web Development",
      },
       {
          img: "/css.html done.png",
        id: "E-commrce6",
        title: "Web Development",
      },
       {
          img: "/norman-borlong.png",
        id: "E-commec5e",
        title: "Web Development",
      },
       {
          img: "/scabby.png",
        id: "E-comme4",
        title: "Web Development",
      },
       {
          img: "/Simple.png",
        id: "E-comm3",
        title: "Web Development",
      },
       {
          img: "/smart.png",
        id: "E-cor2ce",
        title: "Web Development",
      },
       {
          img: "/three.png",
        id: "E-co1mmerce",
        title: "Web Development",
      },
       {
          img: "/two.png",
        id: "E-com0merce",
        title: "Web Development",
      },
    ];
  return (
    <>
  <div className="products-container">
    {portfolioData.map((portfolio) => (
        <div key={portfolio.id} className="all">
          <img src={portfolio.img} alt="img" />
        <h2>{portfolio.title}</h2>
        <p> {portfolio.id} </p>
      </div>
    ))}
  </div>
     
    </>
  );
}

export default portfolio