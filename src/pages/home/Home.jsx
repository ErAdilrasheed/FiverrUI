import React from "react";
import "./Home.scss";
import Featured from "../../components/faetured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCart/CatCard";
import ProjectCard from "../../components/projectCart/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow = {5} arrowsScroll = {5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole India freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high quality services at every price point.
             No hourly rates , just project based pricing</p>

             <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>Find the right freelancer to begin working on your project within minutes</p>
             <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payment every time
            </div>
            <p>Always know what you pay upfront. Your payment will not released untill you approve the work</p>
             <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>Always ready to support you with best customer satisfaction</p>
          </div>
          

          <div className="item">
            <video src="./img/video.mp4" controls autoPlay muted></video>
          </div>
        </div>
      </div>


      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr India Business Solution</h1>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <p>Upgrage to a curated experince packed with tools and benefits, dedicated to business</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven experince
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage Team work and boost productivity with one powerful workspace 
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          

          <div className="item">
            <img className="myimg" src="https://res.cloudinary.com/dr5kn8993/image/upload/v1710515021/My%20Images/Group-photo.jpg" alt="Group_Photo" />
          </div>
        </div>
      </div>

      <Slide slidesToShow = {4} arrowsScroll = {4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide> 

    </div>
  );
};

export default Home;
