export default function App() {
  return (
    <div style={{ background: '#111827', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Giriş */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#60a5fa' }}>SEKOMAR — Marine Automation</h1>
        <p>MARİNİX-100 sistemiyle teknenizin tüm kontrolü elinizin altında.</p>
      </section>

      {/* Projeler + Bilgilendirici */}
      <section id="projects" style={{ padding: '2rem', backgroundColor: '#1f2937' }}>
        <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}>Gerçekleştirdiğimiz Projeler</h2>
        <p style={{ color: '#9ca3af', textAlign: 'center', marginBottom: '2rem' }}>
          Şu anda devam eden ve tamamlanan projelerimizi web sitemizde yakında paylaşacağız.
        </p>
        <h3 style={{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Bilgilendirici Dökümanlar</h3>

        <details style={accordionStyle}><summary style={summaryStyle}>1. Solar Panel Nedir? Güç Hesaplama Rehberi</summary>
        <p style={textStyle}>Solar panel sistemleri, teknenizin enerji ihtiyacını doğadan karşılamanızı sağlar. Panel gücü, tüketim cihazlarının toplam amper değerine göre hesaplanır.</p></details>

        <details style={accordionStyle}><summary style={summaryStyle}>2. Teknenize Uygun Akü Seçimi</summary>
        <p style={textStyle}>15 satırlık örnek form üzerinden voltaj ve amper bilgilerini girerek teknenize uygun AGM, Jel veya Lithium akü çözümünü belirleyebilirsiniz.</p></details>

        <details style={accordionStyle}><summary style={summaryStyle}>3. Marinix-100 Otomasyon Sistemi Nedir?</summary>
        <p style={textStyle}>Marinix-100, PLC tabanlı profesyonel otomasyon sistemidir. Tüm MFD ekranlara entegre olabilir, tank, yakıt, alarm ve enerji yönetimini merkezi olarak sağlar.</p></details>

        <details style={accordionStyle}><summary style={summaryStyle}>4. Elektrik Refit Nedir, Neden Gereklidir?</summary>
        <p style={textStyle}>Eski teknelerde oluşan korozyon, voltaj kayıpları ve kaçak akım gibi riskleri gideren profesyonel refit işlemleri sistem ömrünü uzatır ve güvenliği artırır.</p></details>

        <details style={accordionStyle}><summary style={summaryStyle}>5. Navigasyon Sistemlerini Yenileyin</summary>
        <p style={textStyle}>Eski ekranlar yerini yeni nesil Garmin, Simrad, Raymarine sistemlere bırakıyor. Tüm dönüşüm işlemleri uzman ekibimiz tarafından yapılır.</p></details>

        <details style={accordionStyle}><summary style={summaryStyle}>6. Klima Sistemleri & Lithium Güç Entegrasyonu</summary>
        <p style={textStyle}>Uygun klima sistemine ek olarak Lithium akü ve inverter ile shore bağlantısı olmadan konfor sağlanabilir. Solar destekle bağımsız enerji mümkün!</p></details>
      </section>

      {/* İletişim */}
      <section id="contact" style={{ padding: '2rem', backgroundColor: '#111827', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.875rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>İletişim</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
          Projelerinizle ilgili tüm sorularınız ve teklif talepleriniz için bize ulaşın.
        </p>
        <form method="POST" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <input type="text" placeholder="Ad Soyad" name="name" required style={inputStyle} />
          <input type="text" placeholder="Firma" name="company" style={inputStyle} />
          <input type="tel" placeholder="Telefon Numarası" name="phone" required style={inputStyle} />
          <input type="email" placeholder="E-posta Adresi" name="email" required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Gönder</button>
        </form>
        <p style={{ marginTop: '2rem', color: '#9ca3af' }}>
          E-posta ile ulaşmak isterseniz: <a href="mailto:info@sekomar.com" style={{ color: '#3b82f6' }}>info@sekomar.com</a>
        </p>
      </section>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '1rem',
  backgroundColor: '#374151',
  color: '#fff',
  borderRadius: '6px',
  border: 'none'
};

const buttonStyle = {
  width: '100%',
  backgroundColor: '#fff',
  color: '#111827',
  fontWeight: '600',
  padding: '12px',
  borderRadius: '6px',
  cursor: 'pointer',
  border: 'none'
};

const accordionStyle = {
  marginBottom: '1.5rem',
  padding: '1rem',
  backgroundColor: '#1f2937',
  borderRadius: '6px'
};

const summaryStyle = {
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '600',
  color: '#3b82f6'
};

const textStyle = {
  color: '#d1d5db',
  marginTop: '0.75rem'
};