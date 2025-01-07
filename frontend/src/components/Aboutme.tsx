import React ,{useState } from 'react'
import graduted from '../assets/graduted.jpg'
import work from "../assets/sized1.jpg"
import meraki from "../assets/me2.jpg"

const Aboutme = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { image: graduted, text: 'Hi, I\'m Ahmed Smadi. I studied Electrical Engineering at HTU (Al Hussein Technical University), where I gained proficiency in MATLAB. I used MATLAB for numerical computing, data analysis, and algorithm development, which helped me build a strong foundation in problem-solving and technical analysis.' },

    { image:work , text: "Before transitioning to full-stack development, I worked at Amazon in customer service and at Concentrix as a technical support specialist. These roles honed my problem-solving skills, customer interaction abilities, and technical troubleshooting expertise, which are invaluable in delivering efficient and user-centric web solutions." },

    {  image:meraki ,text: 'I then made a career shift to programming by taking a full-stack web development course with Meraki Academy, where I Built five applications, including two full-stack projects with REST APIs and dynamic user interfaces.These applications simulated real-world industry workflows, covering aspects like code reviews, debugging, and deployment.' },
  ];

  const nextStep = () => setStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden ">
      <button onClick={prevStep} className="absolute left-0 p-4 text-2xl">&#9664;</button>
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg p-6 rounded-lg space-y-6 md:space-y-0">
          {steps[step].image && <img src={steps[step].image} alt="Step" className="w-72 h-72 object-cover rounded-full md:mr-8" />}
          <p className="text-xl text-center md:text-left">{steps[step].text}</p>
        </div>
      </div>
      {/* Display icons below the text */}
     
      <button onClick={nextStep} className="absolute right-0 p-4 text-2xl">&#9654;</button>
    </div>
  );
};

export default Aboutme 
