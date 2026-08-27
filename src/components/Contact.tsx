// Edit these two constants with your real contact details.
const EMAIL = 'nicholas@bigfriendlyfunction.com';
const WHATSAPP_HANDLE = 'bigfriendlyfunction'; // WhatsApp username, without the leading @
// Alternative deep-link options — swap WHATSAPP_HREF for one of these if you prefer:
//   Telegram:  `https://t.me/yourhandle`
//   WhatsApp by number:  `https://wa.me/15555555555`
//   SMS:       `sms:+15555555555`
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_HANDLE}`;

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-steel">03 / contact</p>
      <h2 className="mb-4 font-display text-3xl font-semibold text-paper">
        Say hello.
      </h2>
      <p className="mb-8 max-w-lg text-lg text-paper/75">
        Fastest way to reach me is WhatsApp — message{' '}
        <span className="text-paper">@{WHATSAPP_HANDLE}</span> and it opens
        right in the app. Prefer email? That works too.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl2 bg-rose px-6 py-3 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Message me on WhatsApp
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-xl2 border border-white/15 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:border-rose hover:text-rose"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
