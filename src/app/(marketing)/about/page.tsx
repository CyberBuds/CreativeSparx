import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    bio: 'Alex is a passionate entrepreneur with a vision to empower freelancers worldwide. He believes in the power of technology to revolutionize the future of work.',
  },
  {
    name: 'Samantha Lee',
    role: 'Head of Product',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    bio: 'Samantha is a product visionary with a knack for creating intuitive and user-friendly experiences. She is dedicated to building a platform that freelancers love to use.',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Engineer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    bio: 'Michael is a coding virtuoso who loves to tackle complex challenges. He is the mastermind behind the robust and scalable architecture of CreativeSparx.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="bg-card shadow-soft">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-h1 text-transparent bg-clip-text bg-primary-gradient">
            Our Mission: Empowering Freelancers
          </h1>
          <p className="text-body text-text-secondary mt-4 max-w-3xl mx-auto">
            CreativeSparx is dedicated to building a future where freelancers can thrive. We provide the tools and resources to help you manage your business, so you can focus on what you do best: creating.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-h2">The CreativeSparx Story</h2>
              <p>
                Founded in 2023, CreativeSparx was born from a simple observation: freelancers are the backbone of the modern economy, yet they often lack the tools to manage their businesses effectively. We set out to change that.
              </p>
              <p>
                Our platform is designed to be a one-stop shop for all your freelance needs, from invoicing and payments to client management and project tracking. We believe that by simplifying the business side of freelancing, we can help you unlock your full creative potential.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-glow">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A group of people collaborating"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-card shadow-soft py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-background rounded-xl p-8 text-center shadow-soft transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden shadow-glow">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-h3 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-h2 mb-4">Ready to Join the Revolution?</h2>
          <p className="text-body text-text-secondary max-w-xl mx-auto mb-8">
            Sign up for CreativeSparx today and take your freelance business to the next level.
          </p>
          <a href="/signup" className="bg-primary-gradient text-white font-bold py-3 px-8 rounded-full shadow-glow hover:scale-105 transition-transform duration-300">
            Get Started for Free
          </a>
        </div>
      </section>
    </div>
  );
}
