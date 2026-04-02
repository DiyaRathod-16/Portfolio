import { useEffect, useRef, useState } from 'react';
import { achievements, certifications } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';

function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);
  const previousOverflowRef = useRef('');

  useEffect(() => {
    if (selectedCert) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflowRef.current;
    }
    return () => {
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, [selectedCert]);

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <AnimatedSection
      id="achievements"
      className="light-section relative overflow-hidden section-space bg-[linear-gradient(180deg,#f8f2ee_0%,#f5eee8_100%)]"
    >
      <div className="absolute inset-0 dot-grid-light opacity-20" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            Achievements & Certifications
          </span>
          <h2 className="light-heading mt-8 font-display text-[clamp(4rem,10vw,7rem)] font-black leading-[0.92] tracking-[-0.01em]">
            Wins &amp; Learning
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[32px] border border-line bg-white p-7 shadow-panel sm:p-8"
            >
              <span className="inline-flex w-fit rounded-full bg-night px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                {item.year}
              </span>
              <h3 className="mt-8 text-4xl font-black leading-none tracking-[-0.03em] text-ink">
                {item.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <h3 className="mb-8 text-center text-3xl font-black tracking-[-0.03em] text-ink">
            Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {certifications.map((cert) => (
              <button
                key={cert.name}
                onClick={() => handleCertificateClick(cert)}
                className="group flex h-full cursor-pointer flex-col justify-between rounded-[24px] border border-line bg-white p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-night/20 hover:shadow-panel"
              >
                <div className="flex flex-1 flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ebe7] text-night transition group-hover:bg-[#efe5df]">
                    <Icon name="trophy" className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-ink" style={{ letterSpacing: '0.05em' }}>
                      {cert.label}
                    </p>
                    <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                    <p className="mt-2 text-xs text-muted/80">{cert.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted group-hover:text-ink transition">
                  <span>View Certificate</span>
                  <Icon name="arrowUpRight" className="h-3 w-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/80 px-4 pb-6 pt-24 backdrop-blur sm:pt-28"
          onClick={closeModal}
        >
          <div className="relative z-[91] mt-2 max-h-[calc(100vh-7rem)] max-w-4xl overflow-hidden rounded-[32px] border border-line bg-white shadow-panel" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-[92] font-bold text-2xl text-night/60 transition hover:text-night"
              aria-label="Close"
            >
              ✕
            </button>
            {selectedCert.image.endsWith('.pdf') ? (
              <div className="flex h-[80vh] items-center justify-center bg-surface p-8">
                <div className="text-center">
                  <p className="mb-4 text-ink" style={{ letterSpacing: '0.05em' }}>{selectedCert.label}</p>
                  <p className="mb-4 text-sm text-muted">PDF file - {selectedCert.issuer}</p>
                  <a
                    href={selectedCert.image}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-night transition hover:bg-white/90"
                  >
                    Download PDF
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ) : (
              <img
                src={selectedCert.image}
                alt={selectedCert.label}
                className="max-h-[calc(100vh-16rem)] w-full object-contain"
              />
            )}
            <div className="border-t border-line p-6 text-center text-muted">
              <p style={{ letterSpacing: '0.05em' }}>{selectedCert.label}</p>
              <p className="mt-2 text-sm">{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

export default Achievements;

