import React from "react";

const clients = [
  {
    id: 1,
    name: "Michael",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },

  {
    id: 2,
    name: "James",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },

  {
    id: 3,
    name: "Emily",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "John",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center text-slate-800 py-16">

      {/* Heading */}
      <h2 className="text-4xl font-medium mb-10">
        Happy{" "}
        <span className="text-red-700 font-bold">
          Clients
        </span>
      </h2>

      {/* Images */}
      <div className="flex items-center -space-x-3">

        {clients.map((client) => (
          <div
            key={client.id}
            className="relative group flex flex-col items-center"
          >

            {/* Tooltip */}
            <p className="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-3 py-1 text-sm font-medium absolute -top-12 bg-white shadow-lg rounded-md">
              {client.name}
            </p>

            {/* Image */}
            <img
              src={client.image}
              alt={client.name}
              className={`w-20 h-20 object-cover rounded-full border-4 
                
                ${
                  client.id % 2 === 0
                    ? "border-red-700"
                    : "border-white"
                }

                hover:-translate-y-2 transition duration-300 hover:scale-110 shadow-lg`}
            />

          </div>
        ))}

      </div>

      {/* Lines */}
      <div className="flex items-center gap-3 mt-10">

        <div className="w-20 h-[3px] bg-red-700 rounded-full"></div>

        <div className="w-10 h-[3px] bg-gray-300 rounded-full"></div>

        <div className="w-20 h-[3px] bg-red-700 rounded-full"></div>

      </div>

      {/* Extra Text */}
      <p className="text-gray-500 mt-6 text-center max-w-lg leading-relaxed">
        Trusted by creators, developers and modern businesses worldwide
        for building fast, elegant and scalable user experiences.
      </p>

    </div>
  );
};

export default Testimonial;