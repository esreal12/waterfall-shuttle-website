export function DestinationSection() {
  return (
    <section id="destino" className="bg-white py-20">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="section-eyebrow">Destino</p>
          <h2 className="section-title">Catarata Nauyaca: el tesoro escondido del Pacífico Sur</h2>
          <p className="lead">
            La cascada doble más famosa de Costa Rica, rodeada de selva tropical y pozas naturales perfectas para nadar. Nuestro shuttle te lleva hasta el punto de ingreso oficial y coordina tu regreso.
          </p>
          <ul className="space-y-3 text-sm text-brand-charcoal/85">
            <li>• Altura de 45 metros y caudal ideal durante todo el año.</li>
            <li>• Senderos mantenidos, servicios básicos y guía local disponible.</li>
            <li>• Opción de tour a caballo o caminata, según tu preferencia.</li>
          </ul>
          <a
            href="#reservas"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-natural hover:text-brand-deep"
          >
            Reserva tu transporte ahora →
          </a>
        </div>
        <div className="placeholder-media h-[360px]">
          Aquí irá una foto panorámica de Catarata Nauyaca al atardecer.
        </div>
      </div>
    </section>
  );
}
