"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");

      const res = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSuccess("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <input
        required
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
      />

      <input
        required
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
      />

      <textarea
        required
        rows={5}
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="How can we help?"
        className="w-full resize-none rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 text-sm outline-none ring-gold/20 focus:ring-2"
      />

      <MagneticButton>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-stone-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </MagneticButton>

      {success && <p className="text-sm text-green-600">{success}</p>}
    </form>
  );
}
