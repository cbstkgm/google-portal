# Google Portal

🚀 **Canlı Demo:** [https://cbstkgm.github.io/google-portal/](https://cbstkgm.github.io/google-portal/)

Google Portal, Google'ın sunduğu ürünleri, hizmetleri ve donanımları tek bir çatı altında toplayan, modern, hızlı ve kullanıcı dostu bir entegrasyon arayüzüdür.

## 🎯 Özellikler

- **🌟 Modern Arayüz:** Google'ın Material Design 3 prensiplerine (Material Symbols Rounded) ve renk paletine uygun şık tasarım.
- **🎙️ Ücretsiz Sesli Arama:** Web Speech API altyapısıyla klavye kullanmadan, sadece konuşarak ürün araması yapabilme.
- **🌓 Dark/Light Mode:** Göz yormayan, işletim sisteminizle tam uyumlu çalışan karanlık ve aydınlık tema desteği.
- **🕸️ Zihin Haritası (Mindmap):** Vis.js kullanılarak oluşturulan dinamik zihin haritası ile Google ürünlerinin birbiriyle olan entegrasyonlarını ve iş ortaklıklarını görselleştirme.
- **📱 Responsive Tasarım:** Mobilden masaüstüne her ekranda kusursuz görünen esnek yapı (Grid ve Liste görünümleri arasında anında geçiş).
- **🚀 Üstün Performans:** Optimize edilmiş DOM yönetimi (Vanilla JS) sayesinde yüzlerce ürün arasında anında filtreleme ve takılmasız arama deneyimi.
- **✨ Animasyonlu Arkaplan:** HTML5 Canvas ile tasarlanmış, Google renklerinde dinamik olarak dönen partikül uzay animasyonu.

## 🛠️ Kullanılan Teknolojiler

- **HTML5 & CSS3**
- **Vanilla JavaScript** (Herhangi bir framework kullanılmadan maksimum performans)
- **Tailwind CSS** (Hızlı ve modern stil yönetimi)
- **Vis.js** (Zihin Haritası / Network görselleştirmesi için)
- **Web Speech API** (Sesli arama / Google Asistan deneyimi için)

## 🚀 Kurulum ve Çalıştırma

Bu proje tamamen statik dosyalardan oluşur (HTML, CSS, JS). Herhangi bir derlemeye veya arka uç (backend) sunucusuna ihtiyaç duymaz.

Projeyi yerel bilgisayarınızda çalıştırmak için:

1. Projeyi bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/cbstkgm/google-portal.git
   ```
2. Klasörün içine girin:
   ```bash
   cd google-portal
   ```
3. Klasörde bir statik sunucu başlatın. Örneğin Python ile:
   ```bash
   python3 -m http.server 8000
   ```
   veya Node.js / npx ile:
   ```bash
   npx serve .
   ```
4. Tarayıcınızda sunucunun verdiği adrese (örneğin `http://localhost:8000`) gidin.
