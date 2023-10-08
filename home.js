import React, {useState,setState} from 'react';
import './homecss.css'
import { Link } from 'react-router-dom';
function Home() {
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>ETERNAL LIFE</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link" href="#abou">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#miss">FAQ's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#cont">Contact Us</a>
        </li>
      </ul>
      <div className="d-grid col-2">
        <Link to={'/login'}>
        <button className="btn btn-primary">Sign In</button>
        </Link>
            </div>
    </div>
  </div>
</nav>
<div className="home-page">
      <header>
        <h1>ETERNAL LIFE- Where organs are eternal</h1>
      </header>
      <main>
        
        <div className="intro-section">
        <h1 id="abou">Our Mission:</h1>
      <p id="mission">To facilitate hope, healing, and a brighter future through the power of organ donation. 
       Our mission is to connect willing donors with grateful recipients, saving lives one transplant at a time. 
        We strive to raise awareness, promote compassion, and champion the gift of life, 
         fostering a community where the act of giving is celebrated as the ultimate act of humanity.</p>
        </div>
        <div className='benefits'>
        <div className='container'>
          <h1>Benefits of organ donation</h1>
          <div className="row">
                <div className="col-lg-4">1. Saving Lives:* Organ donation is a lifesaving gift. It provides recipients with a chance to live longer, 
        healthier lives by replacing failing or damaged organs with healthy ones 
         </div>
                <div className="col-lg-4">2. Improved Quality of Life:* For recipients, organ transplantation can significantly improve their quality of life. 
         It can alleviate symptoms, restore normal bodily functions, and allow them to participate in everyday activities. 
          </div>
                <div className="col-lg-4">3. Multiple Lives Saved:* One organ donor can potentially save multiple lives. 
         Organs such as the heart, liver, kidneys, lungs, and pancreas can be transplanted to different recipients, multiplying the impact of a single donation. 
         </div>
            </div>
            <div className="row">
                <div className="col-lg-6">4. Legacy of Giving:* Organ donors leave a lasting legacy by offering the gift of life to others. 
          It's a selfless act that can bring comfort and pride to their loved ones. 
          </div>
                <div className="col-lg-6">5. Emotional Fulfillment:* Many donors and their families experience 
          a deep sense of fulfillment and emotional satisfaction knowing that they've made a difference in the lives of others. 
           </div>
            </div>
          </div>
          </div>
          <div className="intro-section">
        <h1 id="miss">FAQ's</h1>
        <p id="faqal">
        <strong>*Q1: What is organ donation?*</strong><br/>
-  Ans: Organ donation is the process of voluntarily giving one's organs or tissues,
 either after death or while alive, to be transplanted into another person's body to replace failing or damaged organs.<br/>
  It's a life-saving and life-improving act.
  <br/>
<strong>*Q2: Who can be an organ donor?*</strong><br/>
-  Ans: In general, anyone can be an organ donor.
 Age, medical history, and certain medical conditions do not necessarily disqualify a person from being a donor. 
 Eligibility depends on factors at the time of death or evaluation for living donation.
 <br/>
<strong>*Q3: Can I donate organs while I'm alive?*</strong><br/>
-  Ans: Yes, living individuals can donate certain organs, such as a kidney or a portion of their liver, to help others in need.
 Living organ donation is typically safe and regulated to ensure the well-being of both the donor and recipient.
 <br/>
<strong>*Q4: What organs and tissues can be donated?*</strong><br/>
-  Ans: Organs such as the heart, lungs, liver, kidneys, pancreas, and small intestine can be donated.
 Tissues like corneas, skin, bone, heart valves, and blood vessels can also be donated.
 <br/>
<strong>*Q5: How can I become an organ donor?*</strong><br/>
-  Ans: You can become an organ donor by registering with your country's organ donor registry,
 indicating your wishes on your driver's license, or informing your family of your desire to donate.
 Registration processes vary by location.
 <br/>
<strong>*Q6: Will organ donation disfigure the body for the funeral?*</strong><br/>
-  Ans: Organ and tissue donation is performed with great care and respect for the donor.<br/>
 Cosmetic considerations are taken into account, and the body is prepared for an open-casket funeral in most cases.
 <br/>
<strong>*Q7: Can I choose which organs to donate or not to donate?*</strong><br/>
-  Ans: Yes, you can specify which organs and tissues you are comfortable donating.
 You have the choice to donate all eligible organs or only specific ones.
 <br/>
<strong>*Q8: What happens if I have a medical condition? Can I still be a donor?*</strong><br/>
-  Ans: Having a medical condition does not automatically disqualify you from becoming a donor.
 The suitability for donation is determined at the time of death or evaluation for living donation.
 <br/>
<strong>*Q9: How are recipients matched with donors?*</strong><br/>
-  Ans: Recipients are matched with donors based on compatibility factors, such as blood type, tissue type, organ size, and medical urgency.
 A thorough evaluation process ensures the best possible match.
<br/>
<strong>*Q10: Is organ donation financially beneficial to the donor's family?*</strong><br/>
-  Ans: Organ donation is a voluntary and altruistic act.
The donor's family does not receive financial compensation for the donation.
 However, medical expenses related to the donation process are typically covered.
 <br/>
       </p>
        </div>
      </main>
      <footer>
      <div className='container'>
          <h3 id="cont">CONTACT US:</h3>
          <div className="row">
                <div className="col-lg-4">Instagram: eternallife@insta.com</div>
                <div className="col-lg-4">Phone Number:8000011118</div>
                <div className="col-lg-4">Email:eternallife@gmail.com</div>
            </div>
            </div>
            <br/>
      </footer>
</div>
</>
       
    )       
}

export default Home

//<form className="d-flex" role="search">
  //      <button className="btn btn-outline-success" type="submit">Search</button>
     // </form>