import React from 'react'

export default function Faqs() {
  return (
    <>
    <section className="bg-light py-5">
<div className="container">
    <div>
    <h2 className="pb-4 border-bottom border-dark text-center display-5 fw-bold">FAQs</h2>
    <br />
  <p className="fs-5 mb-4 text-dark text-center mx-auto "> Here are some sample questions and answers that will help you to learn more about web development:.</p>
    </div>
<div className="accordion shadow-lg  my-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header peach " id="headingOne">
      <button className="accordion-button bg-orange" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h3 className="fs-4 fw-bold text-dark">1: What technologies do you specialize in as a frontend developer?</h3>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p className="fs-5">I specialize in HTML, CSS, and JavaScript. I also have hands-on experience with popular frontend frameworks such as React.js and Vue.js.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed peach" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h3 className="fs-4 fw-bold text-dark">2: Can you describe your approach to responsive web design?</h3>
      </button>
      
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="fs-5">A: Absolutely. I prioritize a mobile-first approach, ensuring that websites are not only visually appealing but also functional across various devices. I use media queries and flexible grid systems to achieve responsive designs.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h3 className="fs-4 fw-bold text-dark">3: How do you ensure accessibility in your web development projects?</h3>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="fs-5">A: Accessibility is crucial to me. I follow Web Content Accessibility Guidelines (WCAG) and implement semantic HTML, ARIA roles, and conduct thorough testing to ensure that my websites are inclusive and usable for all users.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed bg-orange " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <h3 className="fs-4 fw-bold text-dark">4: How do you stay updated with the latest trends in frontend development?</h3>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="fs-5"> A: I am a firm believer in continuous learning. I regularly read industry blogs, follow thought leaders on social media, and participate in webinars and conferences. Additionally, I am part of online developer communities to stay informed about emerging trends.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed peach " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <h3 className="fs-4 fw-bold text-dark">5: How do you handle tight deadlines and multiple projects simultaneously?</h3>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="fs-5"> A: Time management is crucial in my workflow. I break down tasks, prioritize them, and use project management tools to stay organized. This approach allows me to meet deadlines without compromising on the quality of my work.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <h3 className="fs-4 fw-bold text-dark">6: Do you have experience with version control systems?</h3>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="fs-5">A: Yes, I am proficient in using Git for version control. I regularly use Git for tracking changes, collaborating with other developers, and managing code repositories.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed bg-orange" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      <h3 className="fs-4 fw-bold text-dark">7: How can I contact you for potential collaboration or job opportunities?</h3>
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className="fs-5"> A: I would love to connect! You can reach out to me via email at [your@email.com] or connect with me on LinkedIn. I'm always open to discussing new opportunities and collaborations.

Feel free to customize these questions and answers based on your specific experiences and preferences. This section is an opportunity to provide valuable information about yourself and your work, so tailor it to showcase your unique qualities as a frontend developer.</p>
      </div>
    </div>
  </div>


</div>
</div>
</section>

      
    </>
  )
}
