"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

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
    <section id="reservas" className="bg-white py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <p className="section-eyebrow">Reserva</p>
          <h2 className="section-title">Reserva tu shuttle a Catarata Nauyaca</h2>
          <p className="lead">
            Completa el formulario y nuestro equipo te confirmará la disponibilidad por correo o WhatsApp. Próximamente conectaremos este formulario con EmailJS/Resend para automatizar la notificación.
          </p>
          <ul className="space-y-3 text-sm text-brand-charcoal/85">
            <li>• Respuesta garantizada en menos de 12 horas.</li>
            <li>• Pagos en efectivo, SINPE móvil o tarjeta al confirmar.</li>
            <li>• Cancelación gratuita hasta 24 horas antes.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-brand-natural/20 bg-brand-light p-6 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-brand-charcoal" htmlFor="name">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className="mt-2 w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                placeholder="Ej: Mariana Gómez"
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
                  placeholder="tuemail@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-charcoal" htmlFor="phone">
                  Teléfono / WhatsApp
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
                  Fecha de viaje
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
                  Pasajeros
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
                Comentarios adicionales
              </label>
              <textarea
                id="message"
                {...register("message")}
                className="mt-2 min-h-[120px] w-full rounded-xl border border-brand-natural/30 bg-white px-4 py-3 text-sm text-brand-charcoal focus:border-brand-natural focus:outline-none"
                placeholder="Indica si necesitas pickups adicionales, horarios especiales, etc."
              />
            </div>
            <Button type="submit" size="large" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando…" : "Confirmar reserva"}
            </Button>
            {submitted && (
              <p className="rounded-xl bg-white/80 p-4 text-center text-sm font-semibold text-brand-natural">
                ¡Gracias! Te contactaremos pronto para confirmar tu reserva.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
