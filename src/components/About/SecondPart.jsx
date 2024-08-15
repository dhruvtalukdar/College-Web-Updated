import React from "react";

function SecondPart() {
  const schoolPhotos = [
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+1",
      alt: "School Photo 1",
      description: "Photo 1 description about the history of the school.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+2",
      alt: "School Photo 2",
      description: "Photo 2 description about the history of the school.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=School+Photo+3",
      alt: "School Photo 3",
      description: "Photo 3 description about the history of the school.",
    },
  ];

  const headMistress = {
    src: "https://via.placeholder.com/600x400?text=Head+Mistress+Photo",
    alt: "Head Mistress Photo",
    message:
      "Dear Students, Parents, and Staff, Welcome to another exciting academic year at our school! Our commitment to providing a nurturing and inspiring environment remains unwavering. Together, we will continue to foster a love for learning, build strong character, and prepare our students to face the challenges of tomorrow with confidence and integrity.",
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl font-bold underline mb-12 text-center">
          
        </h1>

        <div className="flex flex-col space-y-8">
          {/* <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">SCHOOL</h2>
            <p className="text-gray-700 mb-4">
              Below are 1-3 photos with short descriptions about the history of
              the school.
            </p>
            {schoolPhotos.map((photo, index) => (
              <div key={index} className="mb-6">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-half rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-700">{photo.description}</p>
              </div>
            ))}
          </div> */}

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">Head mistress</h2>
            <div className="mb-6">
              <img
                src={headMistress.src}
                alt={headMistress.alt}
                className="w-half rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-700">
                <p className="block">Dear Students, Parents, and Staff,</p>

                <p className="mt-4">
                  Welcome to another exciting academic year at our school! Our commitment to providing a nurturing and inspiring environment remains unwavering. Together, we will continue to foster a love for learning, build strong character, and prepare our students to face the challenges of tomorrow with confidence and integrity.
                </p>

                <p className="mt-4">
                  Thank you for being a vital part of our vibrant school community. Let’s make this year a journey of growth, achievement, and joy.
                </p>

                <p className="mt-4">
                  Warm regards,
                  [Sister Roselina Toppo]
                </p>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">Aims & Objectives</h2>
            <p className="text-gray-700">
              <p><p className="text-2xl block mt-4">Aim:</p>To provide a nurturing and inclusive environment that fosters the intellectual, social, emotional, and physical development of each student, empowering them to become responsible, compassionate, and active citizens in an ever-changing global society.</p>

              <p><p className="text-2xl block mt-4">Objectives</p>Academic Excellence:
                To offer a rigorous and dynamic curriculum that challenges students to achieve their highest potential and promotes critical thinking, creativity, and lifelong learning.

                <p className="mt-4">
                  <p className="text-2xl block mt-4">Character Development:</p>
                  To instill values such as integrity, respect, responsibility, and empathy, encouraging students to develop strong moral character and positive behavior.
                </p>

                <p>
                  <p className="text-2xl block mt-4">Holistic Education:</p>
                  To support the overall development of students by offering a wide range of extracurricular activities, including sports, arts, and community service, that complement academic learning and promote physical health, creativity, and social responsibility.
                </p>

                {/*  */}

                <p>
                  <p className="text-2xl block mt-4">Holistic Education:</p>
                  To support the overall development of students by offering a wide range of extracurricular activities, including sports, arts, and community service, that complement academic learning and promote physical health, creativity, and social responsibility.
                </p>

                <p>
                  <p className="text-2xl block mt-4">Inclusivity and Diversity:</p>
                  <p>
                    To create an inclusive environment where all students, regardless of background, culture, or ability, feel valued and have equal opportunities to succeed.
                  </p>
                </p>

                <p>
                  <p className="text-2xl block mt-4">Technology Integration:</p>
                  <p>
                    To integrate technology into the learning process to enhance educational outcomes and prepare students for a technology-driven world.
                  </p>
                </p>

                <p>
                  <p className="text-2xl block mt-4">Community Engagement:</p>
                  <p>
                    To build strong partnerships with parents, local organizations, and the broader community to support the educational and social development of students.
                  </p>
                </p>

                <p>
                  <p className="text-2xl block mt-4">Global Awareness:</p>
                  <p>
                    To foster a global perspective by encouraging students to understand and appreciate different cultures, and to develop a sense of responsibility towards global issues and sustainable development.
                  </p>
                </p>

                <p>
                  <p className="text-2xl block mt-4">Continuous Improvement:</p>
                  <p>
                    To maintain a commitment to continuous improvement by regularly assessing and refining teaching methods, curriculum, and school policies based on feedback and best practices.
                  </p>
                </p>
              </p>

            
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">
               <span className="">Vision statement</span>
            </h2>
            <p className="text-gray-700">
            Our vision is to be a leading educational institution where every student is empowered to reach their full potential, equipped with the knowledge, skills, and values necessary to thrive in a rapidly changing world. We aspire to create a nurturing and inclusive environment that fosters a lifelong love of learning, cultivates responsible global citizens, and prepares our students to make meaningful contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
