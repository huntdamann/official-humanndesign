"use client"

import React, { useState } from "react"
import Image from "next/image"
import "../css/CTA.css"
import { FaArrowLeft } from "react-icons/fa6"

/* ----------------------------------
   Contact Form UI Component
----------------------------------- */

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const form = e.currentTarget

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      number: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("comments") as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem("budget") as HTMLInputElement)?.value || null,
    }

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Submission failed")

      setStatus("success")
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 space-y-5 mt-5"
      // className="max-w-md flex sm:border-3 flex-col gap-7 mt-12 space-y-5"
    >
      {/* Name */}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name*"
        required
        className="border-b font-[var(--font-orbitron)] px-3 py-2 focus:outline-none focus:ring-2"
      />

      {/* Email */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email*"
        required
        className="border-b px-3 py-2 focus:outline-none focus:ring-2"
      />

      {/* Phone */}
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Phone*"
        required
        className="border-b px-3 py-2 focus:outline-none focus:ring-2"
      />

      {/* Comments */}
      <textarea
        id="comments"
        name="comments"
        rows={4}
        placeholder="How Can I Help You?"
        className="border-b px-3 py-2 resize-none focus:outline-none focus:ring-2"
      />

      {/* Budget */}
      <div className="space-y-2">
        <p className="text-[1.2rem] opacity-80">Project Budget</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "$500 - $1k", value: "500-1k" },
            { label: "$1k – $5k", value: "1k-5k" },
            { label: "More", value: "more" },
          ].map((option) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name="budget"
                value={option.value}
                className="peer hidden"
              />
              <div className="border rounded-md px-3 py-2 text-center transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                {option.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-md bg-black text-white py-2 hover:opacity-90 transition disabled:opacity-50"
      >
        <span>{loading ? "Sending..." : "Let's Connect"}</span>
        <FaArrowLeft style={{ transform: "rotate(135deg)" }} />
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-green-600 text-sm">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}

/* ----------------------------------
   CTA Component
----------------------------------- */

export default function CTA() {
  return (
    <section className="section-content">
      <p className="cta-heading">Let's Build Something Great Together...</p>
      <ContactForm />

      {/* Animated Particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`bubble bubble--${i + 1}`}>
          <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
          />
        </div>
      ))}
    </section>
  )
}
