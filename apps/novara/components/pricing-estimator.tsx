"use client";
import { useMemo, useState } from "react";
const rates: Record<string, number> = { landing: 450, business: 950, corporate: 1800, commerce: 2400, platform: 3800 };
const extrasList = ["Copywriting", "Booking or enquiry workflow", "Advanced motion", "Multilingual support"];
export default function PricingEstimator() {
  const [kind, setKind] = useState("business");
  const [pages, setPages] = useState(6);
  const [extras, setExtras] = useState<string[]>([]);
  const estimate = useMemo(() => { const base = rates[kind] + Math.max(0, pages - 5) * 85 + extras.length * 220; return [Math.round(base * .9 / 50) * 50, Math.round(base * 1.25 / 50) * 50]; }, [kind, pages, extras]);
  return <div className="estimator"><div className="estimator-controls">
    <label>Project type<select value={kind} onChange={e => setKind(e.target.value)}><option value="landing">Landing page</option><option value="business">Business website</option><option value="corporate">Corporate website</option><option value="commerce">E-commerce</option><option value="platform">Custom platform</option></select></label>
    <label>Approximate pages <strong>{pages}</strong><input type="range" min="1" max="20" value={pages} onChange={e => setPages(Number(e.target.value))} /></label>
    <fieldset><legend>Additional requirements</legend>{extrasList.map(x => <label className="check" key={x}><input type="checkbox" checked={extras.includes(x)} onChange={() => setExtras(old => old.includes(x) ? old.filter(v => v !== x) : [...old, x])} />{x}</label>)}</fieldset>
  </div><div className="estimate-result"><span>Indicative project range</span><strong>US${estimate[0].toLocaleString()} – US${estimate[1].toLocaleString()}</strong><p>Illustrative planning estimate only. A confirmed quotation follows discovery and an agreed scope.</p><a className="button button-light" href="#contact">Discuss your project ↗</a></div></div>;
}
