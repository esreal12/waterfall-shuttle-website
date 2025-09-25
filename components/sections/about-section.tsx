export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-white py-20">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-eyebrow">Sobre nosotros</p>
          <h2 className="section-title">Tu experiencia empieza desde que subes al shuttle</h2>
          <p className="lead">
            Somos un equipo local certificado que conecta a viajeros con la impresionante Catarata Nauyaca. Brindamos un servicio de transporte seguro, cómodo y amable para que disfrutes el trayecto tanto como el destino.
          </p>
          <ul className="space-y-4 text-brand-charcoal/90">
            <li>• Conductores bilingües y capacitados en atención al cliente.</li>
            <li>• Vehículos coaster con aire acondicionado y Wi-Fi a bordo.</li>
            <li>• Coordinación directa con la entrada oficial de la catarata.</li>
          </ul>
        </div>
        <div className="placeholder-media h-[320px]">
          Aquí irá una foto del shuttle Waterfall Shuttle CR con pasajeros felices.
        </div>
      </div>
    </section>
  );
}
