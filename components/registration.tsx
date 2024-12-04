'use client'; // Ensure this line is at the top

export default function Registration() {
  const handleRegister = () => {
    // Redirect to the external Google Forms link
    window.location.href = 'https://forms.gle/fkHVz8jin5jqgpYz6';
  };

  return (
    <section id="register" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Register For The Event Now
        </h2>
        <div className="flex justify-center">
          <button 
            onClick={handleRegister}
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
