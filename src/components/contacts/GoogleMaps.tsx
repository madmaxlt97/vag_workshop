export default function GoogleMaps() {
  return (
    <div className="mt-20 overflow-hidden border border-[var(--border)]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3876.5314375647285!2d25.304997661704917!3d54.70963399163212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1788160889808!5m2!1sen!2slt"
        title="Mano autoservisas"
        className="h-[350px] w-full md:h-[450px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
