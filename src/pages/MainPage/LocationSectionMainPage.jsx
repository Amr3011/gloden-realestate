
export default function LocationSectionMainPage() {
  return (
    <section className="bg-gray-900 text-white py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Our Location</h2>
      <p className="text-lg mb-6">Find us at our office location below:</p>
      
      <div className="relative w-full max-w-4xl mx-auto h-96">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.3736984046373!2d31.007420175552923!3d30.026135074932792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAxJzM0LjEiTiAzMcKwMDAnMzYuMCJF!5e0!3m2!1sen!2seg!4v1729697499603!5m2!1sen!2seg"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  </section>
  )
}
