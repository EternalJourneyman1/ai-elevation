import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

const SignupForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    submitted: false,
    submitting: false,
    error: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name || !formState.email) {
      setFormState(prev => ({
        ...prev,
        error: 'Please fill in all fields'
      }));
      return;
    }

    setFormState(prev => ({ ...prev, submitting: true, error: '' }));
    
    try {
      const { error } = await supabase
        .from('event_signups')
        .insert([
          { 
            name: formState.name,
            email: formState.email
          }
        ]);

      if (error) throw error;

      setFormState({
        name: '',
        email: '',
        submitted: true,
        submitting: false,
        error: ''
      });
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        submitting: false,
        error: error instanceof Error ? error.message : 'An error occurred during signup'
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
      error: ''
    }));
  };

  return (
    <section className="py-20 px-4 md:px-8" id="signup">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate? Sign Up Now!
          </h2>
          <p className="text-xl text-slate-300">
            Join us for our inaugural event on June 8th and be part of 
            shaping the future of AI together.
          </p>
        </div>

        {formState.submitted ? (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/30 shadow-lg shadow-teal-500/10 text-center">
            <div className="inline-flex items-center justify-center bg-teal-500/20 p-3 rounded-full mb-6">
              <Check className="h-8 w-8 text-teal-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Thank You for Signing Up!</h3>
            <p className="text-slate-300 mb-2">
              We're thrilled to have you join AI Elevation! 
            </p>
            <p className="text-slate-300">
              We'll email you with more details for our June 8th event soon.
            </p>
          </div>
        ) : (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white"
                    placeholder="you@example.com"
                  />
                </div>

                {formState.error && (
                  <div className="text-red-400 bg-red-500/10 px-4 py-3 rounded-lg">
                    {formState.error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className={`w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/20 ${
                    formState.submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formState.submitting ? 'Signing Up...' : 'Count Me In!'}
                </button>
                
                <p className="text-center text-sm text-slate-400 mt-4">
                  Your information is safe with us and will only be used for AI Elevation updates.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignupForm;