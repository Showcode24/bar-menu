"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, Users, CalendarCheck, X } from "lucide-react"

export default function ReservationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setIsModalOpen(false)
    }, 3000)
  }

  return (
    <section ref={ref} id="reservations" className="py-20 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-500">Reservations</h2>
          <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6"></div>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Reserve your table at DOCKERS' CLUB for an unforgettable evening of premium cocktails and exceptional service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-amber-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Choose a Date</h3>
            <p className="text-zinc-400 text-sm">Select your preferred date for your visit to DOCKERS' CLUB.</p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-amber-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Pick a Time</h3>
            <p className="text-zinc-400 text-sm">We're open from 6PM to 2AM. Choose a time that works for you.</p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
              <Users className="text-amber-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Party Size</h3>
            <p className="text-zinc-400 text-sm">Let us know how many guests will be joining your party.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="reservation-btn px-8 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors"
          >
            Make a Reservation
          </button>
        </motion.div>

        {/* Reservation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl overflow-hidden relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-amber-500 mb-2">Reserve Your Table</h2>
                  <p className="text-zinc-400 text-sm">Fill out the form below to make your reservation</p>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CalendarCheck className="text-amber-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Reservation Received!</h3>
                    <p className="text-zinc-300">
                      Thank you for your reservation. We'll contact you shortly to confirm your booking.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-zinc-400 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          required
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-zinc-400 mb-1">
                          Time
                        </label>
                        <select
                          id="time"
                          required
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="">Select time</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                          <option value="21:30">9:30 PM</option>
                          <option value="22:00">10:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-zinc-400 mb-1">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7+">7+ people</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-zinc-400 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      Confirm Reservation
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
