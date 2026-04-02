import { useState } from 'react';
import Icon from './Icon';

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="section-shell pt-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border-[1.5px] border-[#de6d96] bg-[#fb7da5] px-5 py-3 text-center text-sm font-medium text-[#261c2f] shadow-[0_18px_40px_-32px_rgba(25,21,32,0.25)]">
        <span className="flex-1">
          Open to internships, hackathons, and AI product collaborations.
        </span>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2234]/20 bg-[#231d2d] text-white transition hover:scale-105"
          aria-label="Close announcement"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;

