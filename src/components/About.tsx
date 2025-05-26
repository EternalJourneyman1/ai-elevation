import React from 'react';
import { Brain, Users, TrendingUp } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:border-teal-500/30">
    <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="about">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Elevate With Us?</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          AI Elevation is a new, welcoming community dedicated to exploring the frontiers of Artificial Intelligence. 
          We bring together curious minds and innovators to learn, collaborate, and push boundaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Brain className="h-6 w-6 text-white" />}
          title="Learn"
          description="Discover and master new AI tools and techniques through workshops, discussions, and hands-on projects."
        />
        <FeatureCard
          icon={<Users className="h-6 w-6 text-white" />}
          title="Collaborate"
          description="Connect with peers on exciting AI projects and build meaningful relationships with fellow enthusiasts."
        />
        <FeatureCard
          icon={<TrendingUp className="h-6 w-6 text-white" />}
          title="Advance"
          description="Explore economic advancements and career opportunities driven by the latest developments in AI."
        />
      </div>
    </section>
  );
};

export default About;