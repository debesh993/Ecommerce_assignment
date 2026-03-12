import { useState } from "react";
import { Star, MessageCircle } from "lucide-react";
import Confetti from "react-confetti";

const initialReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Amazing product quality! Delivery was very fast."
  },
  {
    id: 2,
    name: "Priya Das",
    rating: 4,
    comment: "Very good experience shopping here. Highly recommended."
  },
  {
    id: 3,
    name: "Arjun Singh",
    rating: 5,
    comment: "Best ecommerce site I've used recently!"
  },
  {
    id: 4,
    name: "Sneha Roy",
    rating: 4,
    comment: "Products are affordable and quality is great."
  }
];

const Reviews = () => {

  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      id: Date.now(),
      ...newReview
    };

    setReviews([review, ...reviews]);

    setNewReview({
      name: "",
      rating: 5,
      comment: ""
    });

    setShowForm(false);

    // show celebration animation
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Confetti Celebration */}
      {showConfetti && (
        <Confetti
          numberOfPieces={250}
          recycle={false}
        />
      )}

      {/* Decorative background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            Real experiences from our happy customers around the world.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="mt-8 flex items-center gap-2 mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition"
          >
            <MessageCircle size={18} />
            Add Review
          </button>

        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <h3 className="font-semibold text-lg text-gray-800">
                {review.name}
              </h3>

              <div className="flex mt-2 text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {review.comment}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Review Modal */}
      {showForm && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl">

            <h2 className="text-2xl font-bold mb-6">
              Add Your Review
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                required
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                className="w-full border rounded-lg px-4 py-2"
              />

              <select
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({ ...newReview, rating: Number(e.target.value) })
                }
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="5">5 ⭐</option>
                <option value="4">4 ⭐</option>
                <option value="3">3 ⭐</option>
                <option value="2">2 ⭐</option>
                <option value="1">1 ⭐</option>
              </select>

              <textarea
                placeholder="Write your review..."
                required
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                className="w-full border rounded-lg px-4 py-2"
              />

              <div className="flex gap-4 pt-2">

                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border py-2 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </section>
  );
};

export default Reviews;