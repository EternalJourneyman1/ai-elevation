import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const EventSpotlight: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" id="event">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-semibold">
                  Inaugural Event
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Mark Your Calendar:
                <span className="block text-orange-400 mt-2">AI Elevation Meetup - June 8th!</span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-8">
                Don't miss our first official gathering! It's your chance to meet fellow members, 
                share ideas, and kickstart our community journey. We're excited to explore the future 
                of AI, together, on June 8th.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-slate-200">June 8th</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-slate-200">Time TBD</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-slate-200">Location TBD</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('signup')}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
              >
                Reserve Your Spot
              </button>
            </div>
            
            <div className="relative order-first md:order-last">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-teal-600/20 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/10 animate-pulse rounded-full blur-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl md:text-7xl font-bold text-orange-400">June 8th</div>
                    <div className="text-xl md:text-2xl font-semibold text-white mt-2">Time & Location TBD</div>
                    <div className="w-40 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
                    <div className="text-xl text-slate-300 mt-4">
                      Inaugural Meetup
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSpotlight;