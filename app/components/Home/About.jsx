export default function AboutMe() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      {/* Title */}
      <h1 className="text-6xl font-serif text-center mb-12 tracking-wide border-b border-gray-700 pb-4">
        <span className="inline-block">ABOUT</span> <span className="inline-block">ME</span>
      </h1>

      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 border-b border-gray-700 pb-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328d2f87"
            alt="Profile smiling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center  p-6">
          <p className="leading-relaxed text-lg">
            Award-winning designer that won the awwward prize in October 2021 for an IDE website that also focuses on UX to make the product more human-like and build it on a design system.
            <br />
            <br />
            My goal before 30 is to impact 1,000,000 persons positively where I can make a change in their life.
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid md:grid-cols-2 gap-8 border-b border-gray-700 pb-8">
        <div className="flex items-center  p-6">
          <p className="leading-relaxed text-lg">
            If you see me not online or designing then you should know that I’m building something or ideating about a new startup that I have in mind.
            <br />
            <br />
            I truly want to leave something good in this life to be remembered by.
            <br />
            <br />
            Currently, I’m making this post just so that I step away a bit from work and my problems to remember where I have come from.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Profile smiling and looking up"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Full-width image */}
      <div className="mt-8 border border-gray-700">
        <img
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
          alt="Profile thinking"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
