"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919537997711"; // without +

export function BrochureDownload() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleDownload = () => {
    if (!name.trim() || !mobile.trim()) {
      alert("Please enter your name and mobile number.");
      return;
    }

    const message = `Hello CK Infinity,

A new brochure has been requested.

Name: ${name}
Mobile: ${mobile}`;

    window.open(
      `https://wa.me/${7383521849}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "CK-Infinity-Brochure.pdf";
    link.click();

    setOpen(false);
    setName("");
    setMobile("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-stone-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-stone-800"
      >
        Download Brochure
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <h2 className="font-serif text-3xl text-stone-900">
              Download Brochure
            </h2>

            <p className="mt-3 text-sm text-stone-500">
              Please enter your details to download the brochure.
            </p>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 w-full rounded-xl border p-3 outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-4 w-full rounded-xl border p-3 outline-none"
            />

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 rounded-xl border py-3"
              >
                Cancel
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 rounded-xl bg-stone-900 py-3 text-white"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
