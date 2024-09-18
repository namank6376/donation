import React from 'react';
import qrCodeImg from '../assets/qr.jpeg'; // Adjust the path to your QR code image
import qrCodeImg2 from '../assets/qr2.jpeg'; // Adjust the path to your QR code image

const Home = () => {
  return (
    <div className="text-center py-16 px-8 bg-white">
      <h2 className="text-6xl text-red-600 font-bold mb-6" style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        Help us to save lives
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        We are transforming emergency healthcare with cloud-based technologies that synchronize real-time patient data between hospitals and ambulances, ensuring quicker medical response and saving lives.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        Your support can help us bring this life-saving technology to more communities. Learn more about our mission and how you can contribute to our innovative solutions.
      </p>
      
      {/* QR Code Section */}
      <div className='flex justify-center gap-8 mb-16'>
        <img src={qrCodeImg} alt="QR Code 1" className="w-32 h-32" />
        <img src={qrCodeImg2} alt="QR Code 2" className="w-32 h-32" />
      </div>

      <section className="py-16 bg-red-600 text-white">
        <h3 className="text-3xl font-bold mb-6" style={{ textShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}>
          Join Us in Making a Difference
        </h3>
        <p className="text-lg mb-6">Your support is crucial in advancing our mission. Together, we can enhance emergency healthcare services and save lives.</p>
        <a href="/donate" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
          Donate Now
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <h3 className="text-3xl text-red-600 font-bold mb-6" style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          Our Features
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4" style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              Real-Time Data Sync
            </h4>
            <p className="text-gray-600">Synchronize patient data instantly between ambulances and hospitals to ensure timely medical interventions.</p>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4" style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              Smart Hospital Management
            </h4>
            <p className="text-gray-600">Utilize advanced IoT devices for better management and monitoring of hospital equipment and patient vitals.</p>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4" style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              Emergency Alerts
            </h4>
            <p className="text-gray-600">Receive immediate alerts and updates about emergency cases for faster response and preparation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h3 className="text-3xl text-red-600 font-bold mb-6" style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          What People Are Saying
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/2 bg-gray-100 p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">"The technology provided by Scholity Technologies has revolutionized how we handle emergencies. The real-time data sync is a game-changer for us."</p>
            <p className="font-semibold text-gray-800">Dr. Smith, ER Specialist</p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 p-6 shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">"Scholity's smart hospital management tools have improved our operational efficiency and patient care. Highly recommend!"</p>
            <p className="font-semibold text-gray-800">Jane Doe, Hospital Administrator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
