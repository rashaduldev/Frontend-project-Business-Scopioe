const testimonials = [
  {
    id: 1,
    text: "Healing Bodywork by Cort Cort's healing bodywork massage was amazing! Loved the intuitive touch and deep understanding.",
    name: "John Doe",
    location: "123 Elm Street, New York",
  },
  {
    id: 2,
    text: "Great experience, will recommend to others!",
    name: "Jane Smith",
    location: "456 Pine Street, San Francisco",
  },
];

function TestimonialList() {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Featured Testimonial</h2>
      <ul className="space-y-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="border p-4 rounded">
            <p className="text-sm mb-2">{testimonial.text}</p>
            <p className="text-sm text-gray-500">
              <strong>{testimonial.name}</strong> - {testimonial.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestimonialList;
