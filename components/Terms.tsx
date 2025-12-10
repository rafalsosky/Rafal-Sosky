
import React from 'react';
import Button from './ui/Button';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
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

        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Regulamin świadczenia usług cyfrowych sosky.pl</h1>

        <div className="prose prose-lg prose-slate max-w-none font-sans text-slate-700">
          <h3 className="text-xl font-bold text-black mt-8 mb-4">§ 1. Postanowienia ogólne</h3>
          <p>
            Niniejszy Regulamin określa zasady korzystania ze strony internetowej sosky.pl oraz zasady świadczenia przez Sprzedawcę Usług Cyfrowych, w tym Kursów Online, Usług Mentoringowych i Szkoleń Strategicznych.
          </p>
          <p>Właścicielem Serwisu oraz Sprzedawcą jest:<br/>
          <strong>Sosky Rafał Sobieszyński</strong><br/>
          NIP: 7132875070<br/>
          Adres: ul. Wielicka 42/B3, 30-552 Kraków<br/>
          Adres e-mail: hey@sosky.pl</p>
          <p>Regulamin stanowi integralną część umowy zawieranej z Klientem. Klient ma obowiązek zapoznać się z treścią Regulaminu przed złożeniem zamówienia.</p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">§ 2. Definicje</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Serwis</strong> – strona internetowa prowadzona przez Sprzedawcę pod adresem sosky.pl.</li>
            <li><strong>Sprzedawca</strong> – Sosky Rafał Sobieszyński.</li>
            <li><strong>Klient</strong> – osoba fizyczna, osoba prawna lub jednostka organizacyjna dokonująca zakupu Usługi Cyfrowej.</li>
            <li><strong>Usługa Cyfrowa</strong> – dostarczany przez Sprzedawcę Kurs Online lub Usługa Mentoringu/Szkolenia Strategicznego.</li>
            <li><strong>Kurs Online</strong> – cyfrowy produkt w postaci materiałów szkoleniowych dostępny na platformie edukacyjnej lub w inny sposób elektroniczny.</li>
            <li><strong>Usługa Mentoringu/Szkolenia Strategicznego</strong> – usługa szkoleniowa, strategiczna lub konsultacyjna świadczona zdalnie.</li>
          </ul>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">§ 3. Zasady zakupu, płatności i dostawa</h3>
          <p>Zakup Usługi Cyfrowej następuje poprzez złożenie zamówienia za pomocą formularza dostępnego w Serwisie. Do dokonania zakupu nie jest wymagane zakładanie konta.</p>
          <p>Ceny Usług Cyfrowych podane w Serwisie są cenami brutto (zawierają podatek VAT, jeśli jest on wymagany) i są wyrażone w złotych polskich (PLN).</p>
          <p>Płatności są realizowane za pośrednictwem zewnętrznych operatorów płatności: PayU, Stripe lub TubaPay. Realizacja zamówienia następuje po zaksięgowaniu pełnej kwoty.</p>
          <p><strong>Dostawa Usług Cyfrowych ma charakter elektroniczny:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Kurs Online:</strong> Klient otrzymuje dostęp do Kursu Online (np. linki lub dane logowania) na adres e-mail podany w formularzu, niezwłocznie po zaksięgowaniu płatności.</li>
            <li><strong>Mentoring/Szkolenia:</strong> Klient zobowiązuje się do uczestnictwa w ustalonych spotkaniach. Nieobecność bez uprzedzenia co najmniej 24 godzin przed terminem oznacza utratę danego spotkania, bez możliwości jego odrobienia lub zwrotu środków. Sprzedawca zobowiązuje się do odpowiedzi na korespondencję Klienta w terminie wskazanym w opisie usługi lub w terminie do 3 dni roboczych.</li>
          </ul>
          <p>Sprzedawca zastrzega możliwość krótkotrwałych przerw technicznych związanych z utrzymaniem Serwisu lub aktualizacją materiałów.</p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">§ 4. Odstąpienie od umowy i reklamacje</h3>
          <p><strong>Odstąpienie od umowy (Zwroty dla usług cyfrowych):</strong></p>
          <p>Klient będący konsumentem, kupując Kurs Online (treść cyfrową niedostarczaną na nośniku materialnym), traci prawo do odstąpienia od umowy, jeżeli wyraził wyraźną zgodę na rozpoczęcie świadczenia usługi przed upływem 14-dniowego terminu na odstąpienie od umowy i został poinformowany o utracie tego prawa.</p>
          <p>W przypadku Usług Mentoringu/Szkolenia Strategicznego, zwrot nie przysługuje również w przypadku częściowego wykorzystania Usługi, jeżeli świadczenie rozpoczęto zgodnie z wolą Klienta.</p>
          <p>Wszelkie wnioski dotyczące zwrotów i odstąpienia należy kierować drogą mailową na adres: hey@sosky.pl.</p>
          <p><strong>Reklamacje:</strong></p>
          <p>Reklamacje dotyczące funkcjonowania Usług Cyfrowych lub procesu zakupu można składać drogą elektroniczną na adres: hey@sosky.pl. Reklamacje będą rozpatrywane w terminie 14 dni kalendarzowych od ich otrzymania.</p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">§ 5. Prawa autorskie i warunki użytkowania</h3>
          <p>Wszelkie treści udostępniane w ramach Usług Cyfrowych stanowią utwory w rozumieniu ustawy o prawie autorskim i prawach pokrewnych i są chronione prawem.</p>
          <p>Klient może korzystać z tych treści wyłącznie na własny użytek. Dostęp do Kursu/Mentoringu jest imienny, nieprzenoszalny i nie może być odsprzedawany, wypożyczany ani przekazywany osobom trzecim w jakiejkolwiek formie.</p>
          <p>Klient nie ma prawa udostępniać danych logowania, linków dostępowych ani materiałów Kursu/Mentoringu osobom trzecim. Sprzedawca ma prawo zablokować dostęp do Usługi w przypadku naruszenia Regulaminu (np. udostępnianie dostępu osobom trzecim), bez konieczności zwrotu uiszczonej opłaty.</p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">§ 6. Odpowiedzialność i Postanowienia Dodatkowe</h3>
          <p><strong>Brak Gwarancji Efektów:</strong> Sprzedawca nie gwarantuje osiągnięcia określonych wyników finansowych, sprzedażowych ani biznesowych przez Klienta. Rezultaty zależą wyłącznie od indywidualnego zaangażowania Klienta, sumienności we wdrażaniu zaleceń oraz czynników zewnętrznych.</p>
          <p>Brak realizacji zadań przez Klienta nie stanowi podstawy do reklamacji, przedłużenia programu ani zwrotu środków.</p>
          <p>Wszelka korespondencja formalna odbywa się wyłącznie przez e-mail: hey@sosky.pl.</p>
          <p>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
