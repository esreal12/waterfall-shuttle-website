"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { PeekButton } from "@/components/ui/peek-button";

type BookingFormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  passengers: number;
  message?: string;
};

export function BookingSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<BookingFormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: BookingFormValues) => {
    console.log("Booking form submission", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="bg-white py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <p className="section-eyebrow">Booking</p>
          <h2 className="section-title">Reserve your shuttle to Nauyaca Waterfall</h2>
          <p className="lead">
            Book instantly with our secure online system or request more information below.
          </p>
          
          {/* Quick Booking Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <PeekButton variant="book" size="large" className="flex-1" />
            <PeekButton variant="gift" size="large" className="flex-1 bg-brand-natural/10 text-brand-natural hover:bg-brand-natural/20" />
          </div>
          
          <div className="border-t border-brand-natural/20 pt-6">
            <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Need more information?</h3>
            <p className="text-sm text-brand-charcoal/85 mb-4">
              Fill out the form below and our team will get back to you within 12 hours.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-brand-charcoal/85">
              <li>Guaranteed response within 12 hours</li>
              <li>Free cancellation up to 24 hours in advance</li>
              <li>Custom group bookings available</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-brand-natural/20 bg-brand-light p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-brand-charcoal mb-2">Request Information</h3>
            <p className="text-sm text-brand-charcoal/85">Get personalized assistance for your trip</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className="mt-2 w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                placeholder="e.g., Mariana Gomez"
                required
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-brand-charcoal" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="mt-2 w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-charcoal" htmlFor="phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone", { required: true })}
                  className="mt-2 w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                  placeholder="+506 8888-8888"
                  required
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-brand-charcoal" htmlFor="date">
                  Travel date
                </label>
                <input
                  id="date"
                  type="date"
                  {...register("date", { required: true })}
                  className="mt-2 w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-charcoal" htmlFor="passengers">
                  Passengers
                </label>
                <input
                  id="passengers"
                  type="number"
                  min={1}
                  max={30}
                  {...register("passengers", { required: true, min: 1 })}
                  className="mt-2 w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                  placeholder="2"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="message">
                Additional comments
              </label>
              <textarea
                id="message"
                {...register("message")}
                className="mt-2 min-h-[120px] w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                placeholder="Tell us if you need extra pickups, private schedules, etc."
              />
            </div>
            <Button type="submit" size="large" className="w-full bg-brand-natural/10 text-brand-natural hover:bg-brand-natural/20" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Information Request"}
            </Button>
            {submitted && (
              <p className="rounded-xl bg-white/80 p-4 text-center text-sm font-semibold text-brand-natural">
                Thank you! We will get in touch shortly with more information about your trip.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
