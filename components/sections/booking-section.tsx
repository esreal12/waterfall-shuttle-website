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
    <section id="booking" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container space-y-8 lg:space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="section-eyebrow">Booking</p>
          <h2 className="section-title">Reserve your shuttle to Nauyaca Waterfall</h2>
          <p className="lead">
            Book instantly with our secure online system or request more information below.
          </p>
        </div>

        {/* Quick Booking Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row max-w-2xl mx-auto">
          <PeekButton variant="book" size="large" className="flex-1" />
          <PeekButton variant="gift" size="large" className="flex-1 bg-brand-natural/10 text-brand-natural hover:bg-brand-natural/20" />
        </div>

        {/* Information Request Form */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl border border-brand-natural/20 bg-brand-light p-4 sm:p-6 shadow-sm">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-brand-charcoal mb-1 sm:mb-2">Request Information</h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/85">Get personalized assistance for your trip</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              <div>
                <label className="text-xs sm:text-sm font-semibold text-brand-charcoal" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="mt-1 sm:mt-2 w-full rounded-lg sm:rounded-xl border border-brand-natural/30 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                  placeholder="e.g., Mariana Gomez"
                  required
                />
              </div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-brand-charcoal" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="mt-1 sm:mt-2 w-full rounded-lg sm:rounded-xl border border-brand-natural/30 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-brand-charcoal" htmlFor="phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: true })}
                    className="mt-1 sm:mt-2 w-full rounded-lg sm:rounded-xl border border-brand-natural/30 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                    placeholder="+506 8888-8888"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-brand-charcoal" htmlFor="date">
                    Travel date
                  </label>
                  <input
                    id="date"
                    type="date"
                    {...register("date", { required: true })}
                    className="mt-1 sm:mt-2 w-full rounded-lg sm:rounded-xl border border-brand-natural/30 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-brand-charcoal" htmlFor="passengers">
                    Passengers
                  </label>
                  <input
                    id="passengers"
                    type="number"
                    min={1}
                    max={30}
                    {...register("passengers", { required: true, min: 1 })}
                    className="mt-1 sm:mt-2 w-full rounded-lg sm:rounded-xl border border-brand-natural/30 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                    placeholder="2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm font-semibold text-brand-charcoal" htmlFor="message">
                  Additional comments
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="mt-1 sm:mt-2 min-h-[100px] sm:min-h-[120px] w-full rounded-lg sm:rounded-xl border border-brand-natural/30 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                  placeholder="Tell us if you need extra pickups, private schedules, etc."
                />
              </div>
              <Button type="submit" size="large" className="w-full bg-brand-natural/10 text-brand-natural hover:bg-brand-natural/20" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Send Information Request"}
              </Button>
              {submitted && (
                <p className="rounded-lg sm:rounded-xl bg-white/80 p-3 sm:p-4 text-center text-xs sm:text-sm font-semibold text-brand-natural">
                  Thank you! We will get in touch shortly with more information about your trip.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-base sm:text-lg font-semibold text-brand-charcoal mb-2 sm:mb-3">Need more information?</h3>
          <p className="text-xs sm:text-sm text-brand-charcoal/85 mb-3 sm:mb-4">
            Fill out the form above and our team will get back to you within 12 hours.
          </p>
          <ul className="list-disc space-y-1 sm:space-y-2 pl-4 sm:pl-5 text-xs sm:text-sm text-brand-charcoal/85 text-left max-w-md mx-auto">
            <li>Guaranteed response within 12 hours</li>
            <li>Free cancellation up to 24 hours in advance</li>
            <li>Custom group bookings available</li>
          </ul>
        </div>
      </div>
    </section>
  );
}