import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const CourseInquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full rounded-[24px] bg-[#fbf6ef] border border-[#f0ded0] p-6 sm:p-7 shadow-xs">
      <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#381c10] mb-5">
        Have questions about this course?
      </h3>

      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#e8be89]/40 text-[#a2531d] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-display text-lg font-bold text-[#381c10]">
            Thank You, {name}!
          </h4>
          <p className="text-xs text-[#6a4f40] leading-relaxed">
            Our course counselor will call you shortly on <strong>{phone}</strong> to guide you.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName('');
              setEmail('');
              setPhone('');
              setService('');
              setMessage('');
            }}
            className="text-xs text-[#a2531d] font-semibold underline hover:text-[#8c4516] pt-2"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-[13px]">
          {/* Full name & Email in 2 columns on small screens, stacked if narrow */}
          <div>
            <label className="block text-[#4a3429] font-medium mb-1.5">
              Full name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6] border border-transparent focus:border-[#a2531d] focus:bg-white text-[#2d1b11] placeholder-[#8c7465] text-xs focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[#4a3429] font-medium mb-1.5">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6] border border-transparent focus:border-[#a2531d] focus:bg-white text-[#2d1b11] placeholder-[#8c7465] text-xs focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[#4a3429] font-medium mb-1.5">
              Phone number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6] border border-transparent focus:border-[#a2531d] focus:bg-white text-[#2d1b11] placeholder-[#8c7465] text-xs focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[#4a3429] font-medium mb-1.5">
              Service
            </label>
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6] border border-transparent focus:border-[#a2531d] focus:bg-white text-[#2d1b11] text-xs focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Service</option>
                <option value="Vedic Astrology Course">Vedic Astrology Course</option>
                <option value="Kundli Consultation">Kundli Consultation</option>
                <option value="Career Prediction">Career Prediction</option>
                <option value="Match Making">Match Making</option>
                <option value="Astro Vastu">Astro Vastu</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8c7465]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#4a3429] font-medium mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6] border border-transparent focus:border-[#a2531d] focus:bg-white text-[#2d1b11] placeholder-[#8c7465] text-xs focus:outline-none resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#a45618] hover:bg-[#8c4516] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs cursor-pointer disabled:opacity-70 mt-2"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};
