'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Star } from 'lucide-react'
import { gsap } from 'gsap'
import Image, { StaticImageData } from 'next/image';

import Person1 from "../../../public/images/image_1.jpg"
import Person2 from "../../../public/images/image_2.jpg"
import Person3 from "../../../public/images/image_3.jpg"
import Person4 from "../../../public/images/image_4.jpg"
import Person5 from "../../../public/images/image_5.jpg"
import Person6 from "../../../public/images/image_6.jpg"


interface Review {
  id: number
  name: string
  location: string
  rating: number
  image: StaticImageData
  content:string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Fiore Itala",
    location: "New York, USA",
    content: "Justo nec ultrices dui sapien eget mi proin. At elementum eu facilisis sed odio morbi quis. Tortor condimentum lacinia quis vel eros donec ac odio.",
    rating: 4,
    image: Person1
  },
  {
    id: 2,
    name: "Sophia Chen",
    location: "San Francisco, USA",
    content: "Exceptional service and stunning results! The attention to detail is remarkable.",
    rating: 5,
    image: Person2
  },
  {
    id: 3,
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    content: "A truly transformative experience. The team's expertise is unmatched.",
    rating: 5,
    image: Person6
  },

  {
    id: 18,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    content: "Innovative techniques and a warm, welcoming atmosphere. Highly recommended!",
    rating: 5,
    image: Person3
  },
  {
    id: 19,
    name: "Isabella Rossi",
    location: "Rome, Italy",
    content: "Bellissimo! The artistry and skill of the makeup artists are truly impressive.",
    rating: 4,
    image: Person4
  },
  {
    id: 20,
    name: "Zara Ahmed",
    location: "Dubai, UAE",
    content: "Luxurious experience from start to finish. The results exceeded my expectations.",
    rating: 5,
    image: Person5
  }
]

export function AboutReviews() {
  const [currentReview, setCurrentReview] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 15 },
    drag: true,
    slideChanged: (slider) => setCurrentReview(slider.track.details.rel),
  })

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <section className="py-16 bg-[#F8F3F0] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center " >
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-[#8B4E4E] uppercase text-sm font-semibold mb-2">Happy Clients</h3>
          <h2 ref={titleRef} className="text-5xl font-serif text-[#8B4E4E] mb-4">
            Top Reviews<br />Over The Globe
          </h2>
        </div>
        
        <div className="md:w-1/2 w-full">
          <div ref={sliderRef} className="keen-slider">
            <AnimatePresence initial={false}>
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="keen-slider__slide p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentReview === index ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 md:w-5 md:h-5 ${i < review.rating ? 'text-[#8B4E4E]' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-[#8B4E4E] italic text-base md:text-lg">
                      &ldquo;{review.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Image 
                        className='rounded-full object-cover w-16 h-16 md:w-20 md:h-20'
                        src={review.image} 
                        alt={review.name} 
                        width={100} 
                        height={100} 
                      />
                      <div>
                        <h4 className="font-semibold text-[#8B4E4E] text-sm md:text-base">{review.name}</h4>
                        <p className="text-xs md:text-sm text-[#8B4E4E]">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="w-full h-[2px] bg-gray-200 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#8B4E4E]"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentReview + 1) / reviews.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  )
}
