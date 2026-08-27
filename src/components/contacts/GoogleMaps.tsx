export default function GoogleMaps() {
  return (
    <div className="mt-20 overflow-hidden border border-[var(--border)]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.836060644751!2d25.380517284154255!3d54.69491250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd970d433629cf%3A0x44806bb9510a4f14!2sVAG%20Workshop%20-%20autoservisas!5e0!3m2!1sen!2slt!4v1787834144463!5m2!1sen!2slt"
        title="VAG Workshop - autoservisas"
        className="h-[350px] w-full md:h-[450px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
