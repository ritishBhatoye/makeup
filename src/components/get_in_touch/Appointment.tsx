"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, CheckCircle, Leaf, Info, DollarSign, Clock, X } from 'lucide-react';
import gsap from 'gsap';

const AppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    message: ''
  });

  useEffect(() => {
    gsap.from(".gsap-header", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".gsap-leaf", {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    gsap.from(".gsap-policy", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log(formData);
    }
  };

  const steps = [
    { number: 1, title: 'Select Date / Time Slot', description: 'Choose service and time', icon: Calendar },
    { number: 2, title: 'Fill Contact Details', description: 'Personal info and message', icon: User },
    { number: 3, title: 'Check Details', description: 'Review your appointment', icon: CheckCircle },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f8f5f2] to-[#e8e0d8] min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <Leaf key={i} className={`gsap-leaf absolute text-[#8b6f4e] opacity-5 w-${8 + i * 2} h-${8 + i * 2}`} style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`
        }} />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full backdrop-blur-sm bg-opacity-90"
      >
        <h3 className="text-3xl font-bold text-[#8b6f4e] mb-6 flex items-center">
          <Info className="mr-3 w-8 h-8" /> Booking Policies
        </h3>
        <div className="gsap-policy space-y-4">
          <motion.div 
            className="flex items-start space-x-4 bg-[#f0e6d9] p-4 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DollarSign className="w-6 h-6 text-[#8b6f4e] mt-1" />
            <div>
              <h4 className="font-semibold text-[#8b6f4e]">Deposit</h4>
              <p>A 25% non-refundable deposit is required to secure your booking. This deposit ensures your slot is reserved and allows us to prepare for your appointment.</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-start space-x-4 bg-[#f0e6d9] p-4 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="w-6 h-6 text-[#8b6f4e] mt-1" />
            <div>
              <h4 className="font-semibold text-[#8b6f4e]">Arrival Time</h4>
              <p>Please arrive 10 minutes before your scheduled appointment time to ensure a relaxed check-in process.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 backdrop-blur-sm bg-opacity-90"
      >
        <div className="p-8 md:p-12">
          <h2 className="gsap-header text-5xl font-bold text-[#8b6f4e] mb-8 text-center">Make An Appointment</h2>
          
          <div className="flex justify-between mb-12">
            {steps.map((s) => (
              <motion.div 
                key={s.number}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: s.number * 0.2 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step >= s.number ? 'bg-[#8b6f4e] text-white' : 'bg-gray-200 text-gray-500'} transition-all duration-300`}>
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="mt-3 font-semibold text-[#8b6f4e]">{s.title}</h3>
                <p className="text-sm text-center text-gray-500 mt-1">{s.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-100 p-4 rounded-lg mb-8 shadow-inner"
          >
            <p className="text-blue-700 font-medium text-center">All fields are mandatory</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.form 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {step === 1 && (
                <>
                  <select
                    name="service"
                    className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="makeup">Makeup (1 hr)</option>
                    <option value="facial">Facial (45 min)</option>
                    <option value="manicure">Manicure (30 min)</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="time"
                    name="time"
                    className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNo"
                    placeholder="Phone No"
                    className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-4 rounded-lg border-2 border-[#8b6f4e] focus:outline-none focus:ring-2 focus:ring-[#8b6f4e] transition-all duration-300"
                    onChange={handleChange}
                    required
                  ></textarea>
                </>
              )}

              {step === 3 && (
                <div className="space-y-4 bg-[#f8f5f2] p-6 rounded-lg">
                  <h4 className="font-semibold text-xl text-[#8b6f4e]">Review your appointment details:</h4>
                  {Object.entries(formData).map(([key, value]) => (
                    <p key={key} className="flex justify-between">
                      <span className="font-medium text-[#8b6f4e] capitalize">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </p>
                  ))}
                </div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-[#8b6f4e] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#725a3f] transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step === 3 ? 'Confirm Appointment' : 'Next Step'}
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full backdrop-blur-sm bg-opacity-90"
      >
        <h3 className="text-3xl font-bold text-[#8b6f4e] mb-6 flex items-center">
          <X className="mr-3 w-8 h-8" /> Cancellation Policy
        </h3>
        <div className="gsap-policy space-y-4">
          <motion.div 
            className="bg-[#f0e6d9] p-4 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Cancellations made 4 days or more before the scheduled booking will receive a full refund.</li>
              <li>Cancellations made within 48 hours of the booking will receive a 50% refund.</li>
              <li>No refunds will be given for cancellations made within 24 hours of the booking.</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">We understand that emergencies can happen. In case of serious illness or unforeseen circumstances, please contact us as soon as possible, and we will do our best to accommodate your situation.</p>
          </motion.div>
        </div>
        <div className="mt-8 bg-[#f0e6d9] p-4 rounded-lg">
          <h4 className="text-xl font-semibold text-[#8b6f4e] mb-4">Get in Touch:</h4>
          <div className="flex items-center space-x-4 mb-2">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-[#8b6f4e] p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <p><strong>Email:</strong> [Your Email]</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-[#8b6f4e] p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.div>
            <p><strong>Phone:</strong> [Your Phone Number]</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppointmentForm;
