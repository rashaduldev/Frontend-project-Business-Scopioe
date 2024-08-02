const testimonials = [
  {
    id: 1,
    text: "Healing Bodywork by Cort Cort's healing bodywork massage was amazing! Loved the intuitive touch and deep understanding.",
    name: "John Doe",
    location: "123 Elm Street, New York",
    img:"http://assets.com/assets/com/john"
  },
  {
    id: 2,
    text: "Great experience, will recommend to others!",
    name: "Jane Smith",
    location: "456 Pine Street, San Francisco",
    img:"http://assets.com/assets/com/john"
  },
];

function TestimonialList() {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <ul className="space-y-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="border p-4 rounded">
            <div className="flex text-left items-center space-x-7">
                <div>
                  <img src= {testimonial.img} alt="" className="h-[141px] w-32" />
                   
                </div>
                <div>
                  <p className="text-sm mb-2">{testimonial.text}</p>
                  <p className="text-sm text-gray-500">
                    <strong>{testimonial.name}</strong> - {testimonial.location}
                  </p>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestimonialList;
