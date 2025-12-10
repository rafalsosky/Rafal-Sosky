
import React from 'react';
import Button from './ui/Button';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 hover:text-yellow-600 transition-colors"
        >
          <div className="p-2 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000]">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Wróć
        </button>

        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Polityka Prywatności sosky.pl</h1>

        <div className="prose prose-lg prose-slate max-w-none font-sans text-slate-700">
          <h3 className="text-xl font-bold text-black mt-8 mb-4">I. Administrator Danych Osobowych i Bezpieczeństwo</h3>
          <p>Administratorem danych osobowych Użytkowników Serwisu sosky.pl jest:</p>
          <p><strong>Sosky Rafał Sobieszyński</strong><br/>
          ul. Wielicka 42/B3, 30-552 Kraków<br/>
          NIP: 7132875070<br/>
          Adres e-mail: hey@sosky.pl</p>
          <p>Dane osobowe są chronione zgodnie z RODO. Serwis jest zabezpieczony protokołem SSL, co zapewnia szyfrowanie danych. Dane przechowywane są na serwerach dostawcy hostingu Hostinger International Ltd.</p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">II. Cel i Podstawy Prawne Przetwarzania Danych (RODO)</h3>
          <p>Dane osobowe są przetwarzane w następujących celach:</p>
          <div className="overflow-x-auto my-6 border-2 border-black">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 border-b-2 border-black text-black uppercase font-bold">
                <tr>
                  <th className="px-6 py-3 border-r border-black">Cel przetwarzania</th>
                  <th className="px-6 py-3 border-r border-black">Podstawa prawna (RODO)</th>
                  <th className="px-6 py-3">Czas przechowywania</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black">
                <tr>
                  <td className="px-6 py-4 border-r border-black font-medium">Realizacja umowy sprzedaży Usług Cyfrowych</td>
                  <td className="px-6 py-4 border-r border-black">Art. 6 ust. 1 lit. b (wykonanie umowy)</td>
                  <td className="px-6 py-4">Czas trwania umowy + 3 lata (dla celów roszczeń).</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r border-black font-medium">Wystawianie faktur i obowiązki księgowe</td>
                  <td className="px-6 py-4 border-r border-black">Art. 6 ust. 1 lit. c (obowiązek prawny)</td>
                  <td className="px-6 py-4">5 lat licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r border-black font-medium">Odpowiedź na zapytania (Formularz kontaktowy)</td>
                  <td className="px-6 py-4 border-r border-black">Art. 6 ust. 1 lit. f (uzasadniony interes)</td>
                  <td className="px-6 py-4">12 miesięcy od daty ostatniego kontaktu.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-r border-black font-medium">Prowadzenie newslettera</td>
                  <td className="px-6 py-4 border-r border-black">Art. 6 ust. 1 lit. a (zgoda Klienta)</td>
                  <td className="px-6 py-4">Do momentu wycofania zgody.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">III. Odbiorcy Danych Osobowych i Udostępnianie</h3>
          <p>Dane osobowe Klientów nie są sprzedawane, udostępniane ani przekazywane podmiotom nieuprawnionym.</p>
          <p>Dane mogą być przekazywane podmiotom przetwarzającym w imieniu Administratora w celu realizacji obowiązków, w szczególności:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Operatorom płatności: PayU, Stripe, TubaPay.</li>
            <li>Dostawcom usług mailingowych/platformy edukacyjnej: MailerLite.</li>
            <li>Podmiotom świadczącym usługi księgowe: Infakt.</li>
            <li>Dostawcom usług analitycznych i reklamowych: Google Analytics, Google Ads, Meta (Facebook) Ads.</li>
          </ul>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">IV. Pliki Cookies i Narzędzia Analityczne</h3>
          <p>Serwis wykorzystuje pliki cookies (ciasteczka) w celu prawidłowego działania, statystycznym i marketingowym. Serwis wykorzystuje narzędzia śledzące Meta (Facebook Pixel), Google Analytics i Google Ads.</p>
          <p>W Serwisie stosowany jest mechanizm zarządzania zgodami (Cookie Banner).</p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">V. Prawa Użytkownika</h3>
          <p>Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, a także prawo do cofnięcia zgody.</p>
          <p><strong>Prawo do sprzeciwu wobec profilowania:</strong> Użytkownik ma prawo wnieść sprzeciw wobec przetwarzania danych w celach marketingu bezpośredniego.</p>
          <p>Użytkownik ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
