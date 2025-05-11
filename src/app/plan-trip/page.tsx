"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const destinations = [
  "Arizona",
  "Bandon Dunes",
  "California",
  "Caribbean",
  "Dominican Republic",
  "Florida",
  "Hawaii",
  "Ireland",
  "Mexico",
  "Myrtle Beach",
  "North Carolina",
  "Pebble Beach",
  "Pinehurst",
  "Portugal",
  "Scotland",
  "South Carolina",
  "Spain",
  "United Kingdom",
  "Wisconsin",
];
const durations = ["Weekend", "4–6 days", "7+ days"];
const groupSizes = ["Solo", "2–4", "5–8", "9+"];
const budgets = ["$1,000–$2,000", "$2,000–$5,000", "$5,000+"];
const preferences = [
  { label: "Walkable courses only", icon: "🏌️" },
  { label: "Spa or wellness amenities", icon: "🧖" },
  { label: "Fine dining", icon: "🍽️" },
  { label: "Stay-on-property lodging", icon: "🏨" },
  { label: "Close airport access", icon: "✈️" },
  { label: "Bucket list courses", icon: "🎯" },
  { label: "Bachelor party vibe", icon: "🥂" },
  { label: "Corporate group", icon: "👥" },
];

export default function PlanTripPage() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    destinationType: "flexible",
    destination: "",
    travelDatesType: "exact",
    travelDates: "",
    duration: "",
    groupSize: "",
    budget: "",
    preferences: [] as string[],
  });
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAiResponse(null);
    try {
      const res = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to get trip plan.');
      setAiResponse(data.result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const togglePreference = (pref: string) => {
    setForm((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(pref)
        ? prev.preferences.filter((p) => p !== pref)
        : [...prev.preferences, pref],
    }));
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center justify-center">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-gold-100 bg-white/95 shadow-2xl p-10 relative">
        <h1 className="text-4xl font-serif font-bold text-green-900 mb-2 text-center">Trip Planning Assistant</h1>
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
        <p className="mb-6 text-center text-green-700 text-lg">
          <strong>Note:</strong> This tool is designed to help you explore general golf trip ideas and inspiration. Your real, personalized trip planning will be handled by your dedicated White Glove Golf Trip assistant after you submit your preferences.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-green-900 mb-2">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-green-900">Email <span className="text-red-500">*</span></label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 transition" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
              </div>
              <div>
                <label className="block font-medium text-green-900">Phone <span className="text-red-500">*</span></label>
                <input type="tel" required className="mt-1 w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 transition" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
              </div>
            </div>
          </div>
          <hr className="my-2 border-green-100" />
          {/* Destination */}
          <div>
            <h2 className="text-lg font-semibold text-green-900 mb-2">Trip Details</h2>
            <div className="mb-4">
              <label className="block font-medium text-green-900">Destination / Region</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="destinationType" checked={form.destinationType === "flexible"} onChange={() => setForm(f => ({...f, destinationType: "flexible"}))} /> Flexible
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="destinationType" checked={form.destinationType === "specific"} onChange={() => setForm(f => ({...f, destinationType: "specific"}))} /> Specific
                </label>
              </div>
              {form.destinationType === "specific" && (
                <select className="mt-2 w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 transition" value={form.destination} onChange={e => setForm(f => ({...f, destination: e.target.value}))}>
                  <option value="">Select a destination</option>
                  {destinations.map(dest => <option key={dest} value={dest}>{dest}</option>)}
                </select>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-medium text-green-900">Travel Dates</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="travelDatesType" checked={form.travelDatesType === "exact"} onChange={() => setForm(f => ({...f, travelDatesType: "exact"}))} /> Exact
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="travelDatesType" checked={form.travelDatesType === "flexible"} onChange={() => setForm(f => ({...f, travelDatesType: "flexible"}))} /> Flexible range
                </label>
              </div>
              <input type="text" placeholder="e.g. 2024-09-10 to 2024-09-15" className="mt-2 w-full rounded-lg border border-green-200 bg-green-50 px-3 py-2 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 transition" value={form.travelDates} onChange={e => setForm(f => ({...f, travelDates: e.target.value}))} />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-green-900">Trip Duration</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {durations.map(dur => (
                  <label key={dur} className={`px-4 py-2 rounded-full border cursor-pointer shadow-sm transition-all duration-150 ${form.duration === dur ? 'bg-amber-500 text-white border-amber-500 scale-105' : 'bg-white border-green-200 text-green-900 hover:bg-green-50'}`}
                    onClick={() => setForm(f => ({...f, duration: dur}))}>
                    {dur}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-green-900">Group Size</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {groupSizes.map(size => (
                  <label key={size} className={`px-4 py-2 rounded-full border cursor-pointer shadow-sm transition-all duration-150 ${form.groupSize === size ? 'bg-amber-500 text-white border-amber-500 scale-105' : 'bg-white border-green-200 text-green-900 hover:bg-green-50'}`}
                    onClick={() => setForm(f => ({...f, groupSize: size}))}>
                    {size}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-green-900">Budget Per Person</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {budgets.map(budget => (
                  <label key={budget} className={`px-4 py-2 rounded-full border cursor-pointer shadow-sm transition-all duration-150 ${form.budget === budget ? 'bg-amber-500 text-white border-amber-500 scale-105' : 'bg-white border-green-200 text-green-900 hover:bg-green-50'}`}
                    onClick={() => setForm(f => ({...f, budget: budget}))}>
                    {budget}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-2 border-green-100" />
          {/* Preferences */}
          <div>
            <h2 className="text-lg font-semibold text-green-900 mb-2">Preferences</h2>
            <div className="flex flex-wrap gap-2">
              {preferences.map(pref => (
                <button type="button" key={pref.label} className={`px-3 py-2 rounded-full border flex items-center gap-2 shadow-sm transition-all duration-150 ${form.preferences.includes(pref.label) ? 'bg-amber-100 border-amber-500 text-amber-700 scale-105' : 'bg-white border-green-200 text-green-700 hover:bg-green-50'}`} onClick={() => togglePreference(pref.label)}>
                  <span>{pref.icon}</span> {pref.label}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-bold py-4 text-lg shadow-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-200">Get My Curated Trip Plan</button>
          </div>
        </form>
        {/* Output Section */}
        {loading && (
          <div className="mt-10 text-center text-green-700 font-semibold">Generating your curated trip plan...</div>
        )}
        {error && (
          <div className="mt-10 text-center text-red-600 font-semibold">{error}</div>
        )}
        {aiResponse && (
          <div className="mt-10 p-6 rounded-xl bg-green-50 border border-green-200 shadow">
            <h2 className="text-2xl font-serif font-bold text-green-900 mb-4">Your Curated Trip Plan</h2>
            <div className="mb-2 text-green-700">We&apos;ve also emailed this to you.</div>
            <div className="mb-4 whitespace-pre-line">{aiResponse}</div>
            <a href="/contact" className="inline-block rounded bg-amber-500 text-white font-semibold px-6 py-3 hover:bg-amber-600 transition">Start Your White Glove Trip</a>
          </div>
        )}
      </div>
    </div>
  );
} 