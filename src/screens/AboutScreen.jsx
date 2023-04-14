import React from "react";
import "../styles/about.css";

const AboutScreen = () => {
  return (
    <div className="main">
      <div className="cont1">
         <img src="/images/logo.png" className=" h-6" alt="Visitto" />   
         <a href="/"><button>Go back to website</button></a>
      </div>
      <div className="cont2">
      <span>About Visitto:</span>
      <div className="first">
      VSITTO is an app developed and maintained by a technology company called YALA Inc. YALA Inc. was founded in 2023 by a team of experienced travel enthusiasts and technology experts. The company's mission is to revolutionize the travel industry by providing innovative and user-friendly technology solutions that make travel planning and management easy and enjoyable for everyone.
      </div>
      <div className="second">YALA Inc. is headquartered in Raipur, India, and has a team of dedicated professionals with expertise in travel, technology, and customer service. The team is committed to creating a travel app that provides users with a seamless and stress-free experience, from the initial trip planning stages to the final destination.
      </div>
      <div className="third">At Yala Inc., our core values include innovation, user-centric design, and quality service. We strive to provide our users with the best possible experience, and are continuously working to improve our products and services. Our team is dedicated to providing exceptional customer support and is always available to assist users with any questions or issues they may have.
      </div>
      <div className="fourth">
      Overall, Yala Inc. is a dynamic and innovative company with a passion for travel and technology. We are excited to bring the VSITTO app to travelers around the world and help them create unforgettable travel experiences.
      <ul>
        <li>
        A timeline showcasing the app's development and milestones
        </li>
        <li>
        A message from the company's CEO or spokesperson
        </li>
        <li>
        Company culture, values, and mission statement
        </li> </ul>
      </div>
      <div className="fifth">
      <h1>Company Culture:</h1>
      <p>
        At Yala Inc., we foster a culture of collaboration, creativity, and innovation. We believe that a positive and supportive work environment is essential to the success of our company and our team members. We encourage our employees to share their ideas and insights openly and value diversity and inclusivity.
      </p>

      </div>
      <div className="sixth">
        <h1>Values:</h1>
        <ol type="1" >
          <li>
           Innovation: We embrace change and are always looking for new and creative ways to improve our products and services
          </li>
          <li>
          User-Centric Design: We put our users first and strive to create technology solutions that are intuitive, user-friendly, and accessible to everyone.
          </li>
          <li>
          Quality Service: We are dedicated to providing exceptional customer service and support, and always go the extra mile to ensure our users have a positive experience.
          </li>
        </ol>
      </div>
      <div className="seventh">
        <h1>
        Mission Statement:
        </h1>
        <p>
        Our mission is to revolutionize the travel industry by providing innovative and user-friendly technology solutions that make travel planning and management easy and enjoyable for everyone. We believe that travel has the power to connect people, cultures, and communities, and we are committed to helping travelers create unforgettable experiences that enrich their lives.
        </p>
      </div>
      </div>
      <div className="founder">
        <h1>Founders</h1>
      </div>
    </div>
  );
};

export default AboutScreen;
