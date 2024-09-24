"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, CheckCircle, Leaf, Info, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { client } from '../../sanity/lib/client'

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
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      try {
        const appointmentData = {
          _type: 'appointment',
          service: formData.service,
          date: new Date(formData.date).toISOString().split('T')[0],
          time: formData.time,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNo: formData.phoneNo,
          message: formData.message
        };

        const result = await client.create(appointmentData);
        console.log('Appointment created:', result);
        setPopupMessage('Appointment booked successfully!');
        setShowPopup(true);
        // Reset form data
        setFormData({
          service: '',
          date: '',
          time: '',
          firstName: '',
          lastName: '',
          email: '',
          phoneNo: '',
          message: ''
        });
        setStep(1);
      } catch (error) {
        console.error('Error submitting appointment:', error);
        setPopupMessage('Error booking appointment. Please try again.');
        setShowPopup(true);
      }
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
          top: `[${Math.random() * 100}%]`,
          left: `[${Math.random() * 100}%]`,
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
        <div className="gsap-policy">
          <p className="mb-2"><strong>Deposit:</strong> A 25% non-refundable deposit is required to secure your booking.</p>
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
        <h3 className="text-3xl font-bold text-[#8b6f4e] mb-6">Cancellation Policy</h3>
        <div className="gsap-policy space-y-4">
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Cancellations made 4 days or more before the scheduled booking will receive a full refund.</li>
            <li>Cancellations made within 48 hours of the booking will receive a 50% refund.</li>
            <li>No refunds will be given for cancellations made within 24 hours of the booking.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#8b6f4e] mb-2">Get in Touch:</h4>
          <div className="flex items-center space-x-4 mb-2">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-[#8b6f4e] p-2 rounded-full">
              <Mail className="h-6 w-6 text-white" />
            </motion.div>
            <p><strong>Email:</strong> [Your Email]</p>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-[#8b6f4e] p-2 rounded-full">
              <Phone className="h-6 w-6 text-white" />
            </motion.div>
            <p><strong>Phone:</strong> [Your Phone Number]</p>
          </div>
        </div>
      </motion.div>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <p className="text-xl font-semibold mb-4">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#8b6f4e] text-white py-2 px-4 rounded-lg hover:bg-[#725a3f] transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AppointmentForm;
