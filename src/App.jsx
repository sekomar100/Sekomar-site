export default function App() {
  return (
    <div style={{ background: '#111827', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#60a5fa' }}>SEKOMAR — Marine Automation</h1>
        <p>MARİNİX-100 sistemiyle teknenizin tüm kontrolü elinizin altında.</p>
      </section>

      <section style={{ padding: '2rem', backgroundColor: '#1f2937', textAlign: 'center' }} id="contact">
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