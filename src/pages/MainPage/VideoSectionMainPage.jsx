export default function VideoSectionMainPage() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Our Project Video</h2>
      </div>
      <div className="relative mx-auto" style={{ maxWidth: '800px' }}> 
        <video
          className="w-full h-auto rounded-xl shadow-lg"
          controls
          poster="https://via.placeholder.com/800x450"
        >
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
