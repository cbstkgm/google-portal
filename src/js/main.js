import '../../style.css';
import './particle_animation.js';

// --- VERİ TABANI (JSON/Array) ---
const urunler_verisi = [

    { id: "dev_seurat", name: "Seurat", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Mobil VR için 3D sahne optimizasyon aracı.", long_description: "Google tarafından geliştirilen ve son derece karmaşık 3D sahneleri (sinema kalitesindeki grafikleri), donanım kısıtlı cihazlarda ve VR başlıklarında çalışabilecek kadar hafifleten sahne basitleştirme teknolojisidir.", icon_name: "view_in_ar", link_url: "https://github.com/googlevr/seurat", tags: ["3d", "vr", "optimization"], fun_fact: "Seurat, yüz milyonlarca poligona sahip bir 3D odayı görsel kaliteyi hiç bozmadan yalnızca 70.000 poligona indirebilir." },
    { id: "dev_resonance", name: "Resonance Audio", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Açık kaynaklı 3D uzamsal (spatial) ses SDK'sı.", long_description: "Sanal gerçeklik, oyunlar ve 360 derece videolar için gerçekçi 3D sesler oluşturmanızı sağlayan ve sesi fiziksel ortama göre simüle edebilen Google ses motorudur.", icon_name: "360", link_url: "https://resonance-audio.github.io/resonance-audio/", tags: ["3d", "audio", "vr"], fun_fact: "Resonance Audio, bir sesin objelere ve duvarlara çarpıp nasıl yankılandığını gerçek zamanlı olarak hesaplayabilir." },
    { id: "dev_skia", name: "Skia", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Açık kaynaklı efsanevi 2D/3D grafik motoru.", long_description: "Android, Google Chrome, Chrome OS ve Flutter'ın ekranındaki hemen her şeyi çizen ve donanım hızlandırması kullanan ortak grafik oluşturma kütüphanesidir.", icon_name: "brush", link_url: "https://skia.org/", tags: ["rendering", "graphics", "c++"], fun_fact: "Telefonunuzda gördüğünüz herhangi bir Chrome sayfasının tüm renkleri ve şekilleri aslında doğrudan Skia motoru tarafından donanımsal olarak çizilir." },
    { id: "dev_blocks", name: "Google Blocks", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "VR ortamında kolay 3D modelleme aracı.", long_description: "Geliştiricilerin ve sanatçıların doğrudan sanal gerçeklik (VR) içinde, doğal el hareketleriyle düşük poligonlu 3D modeller üretmesini sağlayan araç.", icon_name: "category", link_url: "https://arvr.google.com/blocks/", tags: ["3d", "vr", "modeling"], fun_fact: "Blocks ile tasarladığınız modeller tek tuşla Unity veya Unreal Engine oyun motorlarına aktarılabilir." },
    { id: "dev_closure", name: "Closure Compiler", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Endüstri standardı JavaScript optimizasyon aracı.", long_description: "JavaScript kodunuzu analiz edip, ölü kodları silen ve dosya boyutunu dramatik şekilde küçülten, Google'ın kendi web uygulamalarında kullandığı derleyicidir.", icon_name: "compress", link_url: "https://developers.google.com/closure/compiler", tags: ["javascript", "optimization", "web"], fun_fact: "Gmail ve Google Haritalar'ın devasa kodları, tarayıcınıza hızlı yüklenebilmek için her zaman Closure Compiler'dan geçer." },
    { id: "dev_v8", name: "V8 Engine", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Yüksek performanslı JavaScript & WebAssembly motoru.", long_description: "Google'ın Chrome için C++ ile yazdığı, JavaScript'i anında makine diline derleyip inanılmaz hızlarda çalıştıran açık kaynaklı projesidir.", icon_name: "memory", link_url: "https://v8.dev/", tags: ["javascript", "engine", "c++"], fun_fact: "V8 motoru Google tarafından tamamen açık kaynak yapılmasaydı Node.js icat edilemezdi ve modern JavaScript asla bu kadar hızlı olamazdı." },
    { id: "dev_gwt", name: "Google Web Toolkit", pricing: "Ücretsiz", category: "IDE", short_description: "Java'dan JavaScript'e dönüştüren efsanevi IDE aracı.", long_description: "Geliştiricilerin backend için Java dilinde kod yazıp bunu doğrudan tarayıcılar için optimize edilmiş saf JavaScript'e derlemesini sağlayan köklü bir framework'tür.", icon_name: "code", link_url: "https://www.gwtproject.org/", tags: ["java", "javascript", "compiler"], fun_fact: "Google AdSense ve Google Blogger'ın ilk muazzam versiyonlarının arayüzleri tamamen GWT kullanılarak oluşturulmuştur." },

    { id: "dev_model_viewer", name: "Model Viewer", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Web siteleri için en kolay 3D/AR HTML bileşeni.", long_description: "Google tarafından geliştirilen ve web sitenize tek satır HTML koduyla (hiçbir WebGL bilgisi gerekmeden) interaktif 3D modeller ve Artırılmış Gerçeklik özellikleri eklemenizi sağlayan araçtır.", icon_name: "3d_rotation", link_url: "https://modelviewer.dev/", tags: ["3d", "webgl", "ar", "html"], fun_fact: "Arkada Three.js kullansa da, tüm karmaşık ayarları gizleyip tek bir basit Model Viewer etiketi olarak çalışır." },
    { id: "dev_filament", name: "Filament", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Fiziksel tabanlı (PBR) gerçek zamanlı 3D render motoru.", long_description: "Google'ın hem Android hem de WebGL/WebGPU tarayıcı ortamlarında çalışan, inanılmaz gerçekçi ışıklandırma ve materyal hesaplamaları yapan açık kaynaklı grafik motorudur.", icon_name: "view_in_ar", link_url: "https://google.github.io/filament/", tags: ["3d", "rendering", "webgl", "c++"], fun_fact: "Filament, cep telefonlarının tarayıcılarında bile konsol oyunları kalitesinde 3D grafikler çizebilecek kadar hafiftir." },
    { id: "dev_draco", name: "Draco 3D", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "3D ağ (mesh) veri sıkıştırma kütüphanesi.", long_description: "Google Chrome ekibinin oluşturduğu, web üzerindeki devasa 3D grafiklerin boyutunu görsel kaliteyi bozmadan çok ciddi şekilde küçülten efsanevi bir sıkıştırma aracıdır.", icon_name: "compress", link_url: "https://google.github.io/draco/", tags: ["3d", "compression", "webgl"], fun_fact: "Günümüzde çoğu modern 3D web oyunu (Three.js dahil), grafikleri internetten hızlı indirmek için standart olarak Draco kullanır." },

    { id: "ide_earth_engine", name: "Earth Engine Code Editor", pricing: "Ücretsiz & Ücretli", category: "IDE", short_description: "Jeo-uzamsal analizler için web tabanlı IDE.", long_description: "Bilim insanları ve araştırmacıların petabaytlarca uydu görüntüsünü analiz etmek için JavaScript API kullanarak anlık kod yazdığı özel bulut tabanlı IDE.", icon_name: "public", link_url: "https://code.earthengine.google.com/", tags: ["ide", "geospatial", "science"], fun_fact: "Earth Engine, 40 yılı aşkın uydu görüntülerini ve iklim verilerini milisaniyeler içinde işleyip haritaya dökebilir." },
    { id: "dev_bazel", name: "Bazel", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Google'ın ultra hızlı yazılım derleme (build) sistemi.", long_description: "Google'ın içeride kullandığı devasa 'Blaze' isimli derleme aracının açık kaynaklı versiyonudur. Devasa kod havuzlarının saniyeler içinde derlenmesini sağlar.", icon_name: "build", link_url: "https://bazel.build/", tags: ["build", "tool", "ci-cd"], fun_fact: "Bazel, sadece değişen kod parçalarını bellekte tutarak derleyip saatler sürecek takım işlemlerini saniyelere indirir." },
    { id: "dev_gerrit", name: "Gerrit", pricing: "Ücretsiz", category: "IDE", short_description: "Kod inceleme (Code Review) ve Git yönetim IDE'si.", long_description: "Google tarafından Android projesi için yaratılan, Git tabanlı projeler için geliştirilmiş dünyanın en popüler ve detaylı kod inceleme platformudur.", icon_name: "rate_review", link_url: "https://www.gerritcodereview.com/", tags: ["code-review", "git", "ide"], fun_fact: "Gerrit'in logosu bir gözlük takmış mavi bir kuştur ve Google'ın tüm açık kaynak Android kodları bu gözlüklerin altından geçer." },
    { id: "dev_puppeteer", name: "Puppeteer", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Headless Chrome otomasyon aracı.", long_description: "Google Chrome ekibi tarafından geliştirilen ve web sayfalarında otomatik testler, PDF oluşturma veya veri kazıma yapmanızı sağlayan Node.js aracıdır.", icon_name: "smart_toy", link_url: "https://pptr.dev/", tags: ["automation", "chrome", "testing"], fun_fact: "Puppeteer ile Chrome tarayıcısının ekranda gördüğü her şeyi kodla otomatize edebilir ve insan gibi davranan botlar yazabilirsiniz." },
    { id: "dev_arcore", name: "ARCore", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Artırılmış Gerçeklik (AR) geliştirme SDK'sı.", long_description: "Telefonunuzun kamerasını, hareket sensörlerini ve yapay zekayı kullanarak fiziksel dünyaya 3D dijital nesneler yerleştirmenizi sağlayan geliştirici ortamıdır.", icon_name: "view_in_ar", link_url: "https://developers.google.com/ar", tags: ["ar", "3d", "sdk"], fun_fact: "ARCore, yüz milyonlarca Android telefonda hiçbir ek donanım gerektirmeden artırılmış gerçeklik deneyimi sunar." },
    { id: "dev_lit", name: "Lit", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Hızlı ve çok hafif web bileşeni framework'ü.", long_description: "Web Components standardını kullanarak inanılmaz derecede hızlı, hafif ve yeniden kullanılabilir UI bileşenleri geliştirmenize olanak tanıyan modern Google aracıdır.", icon_name: "bolt", link_url: "https://lit.dev/", tags: ["framework", "frontend", "web"], fun_fact: "Lit, Angular'ın karmaşıklığından kaçınmak isteyenler için Google'ın geliştirdiği en 'hafif' web teknolojisidir." },
    { id: "dev_mediapipe", name: "MediaPipe", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Cihaz üzeri (On-Device) hızlı makine öğrenimi araçları.", long_description: "Cihaz üzerinde anlık yüz, el, vücut ve poz takibi gibi gelişmiş AI modellerini sadece birkaç satır kodla projelerinize entegre etmenizi sağlayan araçtır.", icon_name: "animation", link_url: "https://mediapipe.dev/", tags: ["ai", "machine-learning", "vision"], fun_fact: "Snapchat veya Instagram'daki anlık ve gecikmesiz yüz filtrelerinin arkasındaki donanım optimizasyon teknolojisi MediaPipe ile aynı mantıktadır." },

    { id: "dev_chrome_devtools", name: "Chrome DevTools", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Chrome içine gömülü devasa web geliştirme ve hata ayıklama (debug) ortamı.", long_description: "Web sayfalarını anlık olarak düzenlemenize, hataları ayıklamanıza ve performans analizi yapmanıza olanak tanıyan, dünyanın en çok kullanılan geliştirici aracıdır.", icon_name: "bug_report", link_url: "https://developer.chrome.com/docs/devtools/", tags: ["ide", "debug", "frontend"], fun_fact: "DevTools ile bir web sitesinin mobil cihazlarda nasıl görüneceğini veya yavaş bir internet bağlantısında nasıl davranacağını simüle edebilirsiniz." },
    { id: "dev_kaggle", name: "Kaggle", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Google'ın sahip olduğu dev veri bilimi geliştirme platformu.", long_description: "Veri bilimcilerin modeller eğittiği, veri setleri paylaştığı ve bulut tabanlı Python Notebook'larında kod yazdığı (Kaggle Kernels) dünyanın en büyük yapay zeka topluluğudur.", icon_name: "analytics", link_url: "https://www.kaggle.com/", tags: ["data-science", "ai", "notebook"], fun_fact: "Google, Kaggle platformunu 2017'de satın almıştır ve platformda günümüzde bile ödülü 1 Milyon Doları bulan ML yarışmaları düzenlenmektedir." },
    { id: "dev_cloud_code", name: "Cloud Code", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Favori IDE'nize Google Cloud gücünü getiren akıllı geliştirme aracı.", long_description: "VS Code ve IntelliJ gibi popüler IDE'lerin içine entegre edilerek; Kubernetes, Cloud Run uygulamalarını doğrudan kendi editörünüzden yazıp hata ayıklamanızı (debug) sağlar.", icon_name: "code", link_url: "https://cloud.google.com/code", tags: ["ide-plugin", "cloud", "kubernetes"], fun_fact: "Cloud Code, 'Gemini Code Assist' ile doğrudan entegre çalışarak siz kod yazarken arka planda bulut sunucuları üzerinden akıllı kod tamamlama sunar." },

    { id: "dev_cloud_workstations", name: "Cloud Workstations", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Google Cloud üzerinde yönetilen güvenli geliştirme ortamı.", long_description: "Geliştiriciler için güvenlik ve hızı birleştiren, bulut tabanlı ve yönetilen geliştirme ortamlarıdır. VS Code, IntelliJ gibi favori IDE'lerinizi bulutta çalıştırmanızı sağlar.", icon_name: "computer", link_url: "https://cloud.google.com/workstations", tags: ["ide", "cloud", "security"], fun_fact: "Cloud Workstations, kodunuzun geliştirici bilgisayarında değil, Google'ın güvenli ağında kalmasını sağlayarak veri sızıntılarını önler." },
    { id: "dev_cloud_shell_editor", name: "Cloud Shell Editor", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Tarayıcı tabanlı online kod düzenleyici (IDE).", long_description: "Google Cloud kaynaklarını yönetmek ve uygulamalar geliştirmek için doğrudan tarayıcınızda çalışan, kurulum gerektirmeyen entegre geliştirme ortamıdır.", icon_name: "terminal", link_url: "https://cloud.google.com/shell", tags: ["editor", "ide", "cloud"], fun_fact: "Cloud Shell Editor, her oturum açtığınızda size özel 5 GB kalıcı depolama alanına sahip geçici bir sanal makine (VM) tahsis eder." },
    { id: "dev_web_designer", name: "Google Web Designer", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Etkileşimli HTML5 web içerikleri için profesyonel IDE.", long_description: "Geliştirici ve tasarımcıların kod yazmadan veya doğrudan kod düzenleyiciyi kullanarak modern, etkileşimli HTML5 reklamlar ve web sayfaları oluşturmasına olanak tanıyan bir masaüstü uygulamasıdır.", icon_name: "web", link_url: "https://webdesigner.withgoogle.com/", tags: ["ide", "html5", "design"], fun_fact: "Web Designer, 3D CSS desteği ile doğrudan tarayıcı içinde çalışabilen üç boyutlu ortamlar tasarlamanızı sağlar." },
    { id: "dev_blockly", name: "Blockly", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Görsel, sürükle-bırak blok tabanlı programlama kütüphanesi.", long_description: "Kod yazmayı oyunlaştıran ve görsel blokları birleştirerek JavaScript, Python, PHP gibi dillerde gerçek kod üretilmesini sağlayan açık kaynaklı eğitim aracıdır.", icon_name: "extension", link_url: "https://developers.google.com/blockly", tags: ["education", "visual-coding", "ide"], fun_fact: "Blockly, popüler MIT Scratch platformunun altyapısında da kullanılan görsel programlama motorunun ta kendisidir." },

    { id: "dev_antigravity_2_0", name: "Antigravity 2.0", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Yeni nesil otonom ajan (agent) platformu.", long_description: "Antigravity 2.0, kodlama ve yazılım geliştirme süreçlerini yapay zeka ajanlarıyla uçtan uca otomatize eden en gelişmiş Google DeepMind otonom sistemidir.", icon_name: "architecture", link_url: "https://deepmind.google/", tags: ["agent", "ai", "platform"], fun_fact: "Antigravity 2.0, devasa projeleri kendi kendine planlayıp haftalar sürecek işleri dakikalar içinde otonom olarak tamamlayabilir." },
    { id: "dev_antigravity_cli", name: "Antigravity CLI", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Yapay zeka asistanı için komut satırı arayüzü.", long_description: "Antigravity ajanlarını ve yapay zeka komutlarını doğrudan terminalinizden çalıştırmanızı, yerel dosyalarınızda değişiklik yaptırmanızı sağlayan güçlü CLI aracıdır.", icon_name: "terminal", link_url: "https://deepmind.google/", tags: ["cli", "terminal", "ai-coding"], fun_fact: "Antigravity CLI sayesinde terminalden çıkmadan doğal dille projenize yeni özellikler ekleyebilirsiniz." },
    { id: "dev_antigravity_ide", name: "Antigravity IDE", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "DeepMind destekli otonom AI kodlama platformu.", long_description: "Google DeepMind tarafından geliştirilen ve yapay zeka ile doğrudan pair programming yapmanıza, otonom görevler atamanıza olanak tanıyan yeni nesil bulut tabanlı bir geliştirme ortamıdır.", icon_name: "code", link_url: "https://deepmind.google/", tags: ["ide", "ai-coding", "agent"], fun_fact: "Antigravity IDE, kod yazan yapay zekalara 'sıfır müdahale' ile otonom görevler verebileceğiniz eşsiz bir altyapıya sahiptir." },
    { id: "dev_antigravity_sdk", name: "Antigravity SDK", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Otonom yapay zeka entegrasyon kütüphanesi.", long_description: "Kendi uygulamalarınıza veya araçlarınıza Antigravity'nin gelişmiş akıl yürütme (reasoning) ve kodlama yeteneklerini entegre etmenizi sağlayan geliştirici kitidir.", icon_name: "integration_instructions", link_url: "https://deepmind.google/", tags: ["sdk", "api", "integration"], fun_fact: "Bu SDK ile kendi yazdığınız sıradan bir arayüzü, saniyeler içinde otonom kararlar verebilen bir ajana dönüştürebilirsiniz." },
    { id: "dev_idx", name: "Project IDX", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Tarayıcı tabanlı yapay zeka destekli full-stack IDE.", long_description: "Project IDX, Google'ın Firebase, Google Cloud ve Gemini yapay zekasını tek bir tarayıcı penceresinde birleştiren tam donanımlı bulut geliştirme çalışma alanıdır.", icon_name: "terminal", link_url: "https://idx.dev", tags: ["ide", "full-stack", "firebase"], fun_fact: "Project IDX tamamen bulut üzerinde çalışır, yani herhangi bir ortam kurmadan doğrudan tarayıcınızdan uygulamanızı derleyebilirsiniz." },
    { id: "ai_colab", name: "Google Colab", pricing: "Ücretsiz", category: "Yapay Zeka", short_description: "Bulut tabanlı ücretsiz Jupyter notebook ortamı.", long_description: "Veri bilimi, makine öğrenimi ve yapay zeka projeleri için hiçbir kurulum gerektirmeden tarayıcı üzerinden Python kodu yazıp çalıştırmanızı sağlayan platformdur.", icon_name: "science", link_url: "https://colab.research.google.com/", tags: ["python", "machine-learning", "notebook"], fun_fact: "Colab, öğrencilere ve araştırmacılara tamamen ücretsiz olarak yapay zeka model eğitiminde kullanılan güçlü GPU ve TPU donanımları sağlar." },
    { id: "ws_vids", name: "Google Vids", pricing: "Ücretli", category: "Workspace / Üretkenlik", short_description: "Yapay zeka destekli profesyonel video oluşturucu.", long_description: "Workspace ekosistemine entegre çalışan Vids, bir doküman yazar gibi kolayca profesyonel iş videoları oluşturmanızı, seslendirmenizi ve kurgulamanızı sağlayan araçtır.", icon_name: "movie_creation", link_url: "https://workspace.google.com/products/vids/", tags: ["video", "üretkenlik", "ai"], fun_fact: "Google Vids, metin komutlarınızdan saniyeler içinde senaryolar, taslak sahneler ve hatta profesyonel seslendirmeler üretebilir." },
    { id: "cloud_dataform", name: "Dataform", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "BigQuery için veri dönüştürme ve ELT hattı aracı.", long_description: "Dataform, bulut veri ambarlarında SQL tabanlı veri ardışık düzenlerini derlemenize, test etmenize ve yönetmenize olanak tanıyan gelişmiş bir veri analizi aracıdır.", icon_name: "schema", link_url: "https://cloud.google.com/dataform", tags: ["sql", "bigquery", "elt"], fun_fact: "Dataform, yüzlerce SQL sorgusunun bağımlılıklarını saniyeler içinde otomatik algılayıp sıralı olarak çalıştırabilir." },
    // --- 0. GOOGLE ANA PORTAL ---
    { id: "main-portal", name: "Tüm Google Ürünleri", pricing: "Ücretsiz", category: "Google Hakkında", short_description: "Google'ın sunduğu tüm ürünlerin ve servislerin resmi listesi.", long_description: "Bu sayfa, Google'ın bireyler, işletmeler ve geliştiriciler için sunduğu yüzlerce uygulamanın, donanımın ve servisin resmi vitrinidir. Aradığınız her şeyi burada toplu halde bulabilirsiniz.", icon_name: "language", link_url: "https://about.google/products/", tags: ["resmi", "tümü", "hakkında", "portal"], fun_fact: "Google, ürünlerini listelerken onları 'Herkes İçin', 'İşletmeler İçin' ve 'Geliştiriciler İçin' olmak üzere üç ana grupta toplar." },

    // --- 1. Günlük Kullanım (Workspace, Profil & Üretkenlik) ---
    { id: "g16", name: "Hesap", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Tüm Google verilerinizin kontrol merkezi.", long_description: "Kişisel bilgilerinizi, gizlilik tercihlerinizi, güvenlik ayarlarınızı ve tüm Google servislerindeki aboneliklerinizi yönettiğiniz ana merkez.", icon_name: "account_circle", link_url: "https://myaccount.google.com/", tags: ["hesap", "profil", "gizlilik", "güvenlik"], fun_fact: "Google Hesabınız üzerinden tek bir tuşla internette sizin hakkınızda toplanan tüm reklam verilerini silebilirsiniz." },
    { id: "g1", name: "Gmail", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Güvenli, akıllı ve kullanımı kolay e-posta.", long_description: "Gmail, dünyanın en popüler e-posta hizmetidir. Gelişmiş spam filtreleme, akıllı yanıtlar ve Google Drive entegrasyonu sunar.", icon_name: "mail", link_url: "https://mail.google.com", tags: ["email", "iletişim", "workspace"], fun_fact: "Gmail, 1 Nisan 2004'te duyurulduğunda kapasitesi nedeniyle bir şaka sanılmıştı." },
    { id: "g2", name: "Drive", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Güvenli bulut depolama alanı.", long_description: "Dosyalarınızı bulutta depolamanıza, cihazlar arasında senkronize etmenize ve başkalarıyla paylaşmanıza olanak tanır.", icon_name: "cloud", link_url: "https://drive.google.com", tags: ["depolama", "bulut", "dosya", "workspace"], fun_fact: "Drive, Google'ın milyarlarca kullanıcıya sahip 15 servisinden biridir." },
    { id: "g3", name: "Dokümanlar", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Gerçek zamanlı işbirliği sunan kelime işlemci.", long_description: "Tarayıcınız üzerinden metin belgeleri oluşturmanıza olanak tanır. Aynı belge üzerinde birden fazla kişi çalışabilir.", icon_name: "description", link_url: "https://docs.google.com", tags: ["ofis", "belge", "yazı", "işbirliği"], fun_fact: "Google Docs, Writely adlı bir projenin satın alınmasıyla ortaya çıkmıştır." },
    { id: "g3a", name: "E-Tablolar", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Veri analizi için güçlü e-tablo yazılımı.", long_description: "Verilerinizi analiz etmeniz, grafikler oluşturmanız ve formüllerle çalışmanız için tasarlanmış çevrimiçi Excel alternatifidir.", icon_name: "table_chart", link_url: "https://sheets.google.com", tags: ["excel", "tablo", "veri", "analiz"], fun_fact: "=GOOGLEFINANCE() formülü sayesinde dünya borsalarındaki hisse senedi verilerini canlı olarak çekebilirsiniz." },
    { id: "g3b", name: "Slaytlar", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Etkileyici sunumlar hazırlayın.", long_description: "Görsel olarak zengin sunumlar tasarlayabilir, şablonlar kullanabilir ve ekibinizle eş zamanlı düzenleyebilirsiniz.", icon_name: "slideshow", link_url: "https://slides.google.com", tags: ["sunum", "powerpoint", "slayt"], fun_fact: "Slaytlar üzerinden canlı sunum yaparken, izleyicilere soru sorma ekranı açıp anlık cevaplar toplayabilirsiniz." },
    { id: "g3c", name: "Formlar", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Anket ve form oluşturucu.", long_description: "Sürükle bırak yöntemiyle hızlıca anketler hazırlayıp veri toplayın ve sonuçları anında e-tablolarda görün.", icon_name: "list_alt", link_url: "https://forms.google.com", tags: ["anket", "soru", "form", "veri"], fun_fact: "Başlangıçta Google E-Tablolar'ın basit bir özelliğiydi, sonradan bağımsız bir ürün oldu." },
    { id: "g3d", name: "Sites", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Kod yazmadan web sitesi yapın.", long_description: "Ekibiniz, projeniz veya etkinliğiniz için kod yazmaya gerek kalmadan hızlıca ve kolayca web siteleri oluşturun.", icon_name: "web_asset", link_url: "https://sites.google.com", tags: ["web", "site", "tasarım", "nocode"], fun_fact: "Google Sites, JotSpot adlı bir girişimin satın alınmasıyla ortaya çıkmıştır." },
    { id: "g4", name: "Takvim", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Zaman yönetimi ve programlama takvimi.", long_description: "Google Takvim, zamanınızı düzenlemenizi, toplantılar ayarlamanızı ve etkinlikleri paylaşmanızı sağlayan bir zaman yönetimi aracıdır.", icon_name: "calendar_month", link_url: "https://calendar.google.com", tags: ["takvim", "planlama", "toplantı", "workspace"], fun_fact: "Takvim, makine öğrenimi kullanarak e-postalarınızdaki uçuş ve otel rezervasyonlarını otomatik olarak ekler." },
    { id: "g5", name: "Meet", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Güvenli premium video toplantıları.", long_description: "Google Meet, yüksek kaliteli görüntülü toplantılar yapmanızı sağlayan kurumsal düzeyde bir iletişim platformudur.", icon_name: "video_camera_front", link_url: "https://meet.google.com", tags: ["video", "toplantı", "iletişim", "konferans"], fun_fact: "Pandemi döneminde Google Meet kullanımı günde 30 kat artmıştır." },
    { id: "g5a", name: "Sohbet (Chat)", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Ekipler için mesajlaşma.", long_description: "Proje odaları (spaces) oluşturup ekibinizle veya arkadaşlarınızla doğrudan sohbet edebileceğiniz mesajlaşma platformu.", icon_name: "chat", link_url: "https://chat.google.com", tags: ["mesaj", "sohbet", "ekip"], fun_fact: "Eskiden Google Hangouts olarak biliniyordu." },
    { id: "g5b", name: "Mesajlar", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Android için varsayılan SMS ve RCS uygulaması.", long_description: "Metin mesajları göndermenizi ve uçtan uca şifrelemeli RCS (Zengin İletişim Servisleri) özellikleri ile sohbet etmenizi sağlar.", icon_name: "sms", link_url: "https://messages.google.com/", tags: ["sms", "mesaj", "android", "iletişim"], fun_fact: "Google Mesajlar ile bilgisayarınızdan tarayıcı üzerinden de SMS gönderebilirsiniz." },
    { id: "g5c", name: "Kişiler", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Tüm rehberiniz bulutta güvende.", long_description: "Tüm cihazlarınızda senkronize olan, kişilerinizi buluta yedekleyen ve Workspace ile entegre çalışan akıllı rehber.", icon_name: "contacts", link_url: "https://contacts.google.com", tags: ["rehber", "kişiler", "telefon", "yedekleme"], fun_fact: "Aynı numaraya veya isme sahip mükerrer kişileri tek bir tuşla birleştirebilirsiniz." },
    { id: "g6", name: "Fotoğraflar", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Tüm fotoğraf ve videolarınız için akıllı galeri.", long_description: "Google Fotoğraflar, görsellerinizi bulutta yedekler ve yapay zeka ile kişilere, yerlere veya nesnelere göre otomatik organize eder.", icon_name: "photo_library", link_url: "https://photos.google.com", tags: ["fotoğraf", "yedekleme", "galeri", "ai"], fun_fact: "Arama çubuğuna 'köpek' yazarak galerinizdeki tüm köpek fotoğraflarını anında bulabilirsiniz." },
    { id: "g7", name: "Keep", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Not alın ve listeler oluşturun.", long_description: "Google Keep, düşüncelerinizi yakalamanıza, sesli notları metne dönüştürmenize ve alışveriş listeleri oluşturmanıza olanak tanıyan not alma uygulamasıdır.", icon_name: "lightbulb", link_url: "https://keep.google.com", tags: ["not", "liste", "hatırlatıcı", "üretkenlik"], fun_fact: "Keep, notları renklendirerek dijital yapışkan notlar hissi vermek üzere tasarlanmıştır." },
    { id: "g8", name: "Çeviri", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "100'den fazla dilde anında çeviri.", long_description: "Google Çeviri; metinleri, konuşmaları, görsellerdeki yazıları ve web sitelerini anında bir dilden diğerine çeviren bir hizmettir.", icon_name: "translate", link_url: "https://translate.google.com", tags: ["çeviri", "dil", "iletişim", "seyahat"], fun_fact: "Translate'in kamerası, çevrimdışı çalışarak sokak tabelalarını anında gerçek zamanlı olarak kendi dilinize çevirebilir." },
    { id: "g9c", name: "One", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Genişletilmiş bulut depolama alanı aboneliği.", long_description: "Drive, Gmail ve Fotoğraflar için ekstra depolama alanı, özel destek ve yapay zeka araçları sunan üyelik planı.", icon_name: "cloud_sync", link_url: "https://one.google.com/", tags: ["depolama", "yedekleme", "abonelik", "premium"], fun_fact: "Google One aboneleri, Fotoğraflar uygulamasındaki Sihirli Silgi (Magic Eraser) gibi özel özelliklere erişebilir." },
    { id: "g9d", name: "Cüzdan (Pay)", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "Dijital cüzdan ve ödeme sistemi.", long_description: "Kredi kartlarınızı, uçak biletlerinizi, aşı kartlarınızı ve etkinlik biletlerinizi telefonunuzda güvenle taşıyabileceğiniz dijital cüzdan.", icon_name: "account_balance_wallet", link_url: "https://wallet.google/", tags: ["ödeme", "cüzdan", "finans", "kart"], fun_fact: "Google Pay ve Google Wallet birleştirilerek tek ve devasa bir dijital kasaya dönüştürüldü." },
    { id: "g10", name: "Görevler", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Günlük işlerinizi takip edin.", long_description: "Yapılacaklar listenizi oluşturun, yönetin ve Gmail ile Takvim üzerinden senkronize ederek hiçbir işi kaçırmayın.", icon_name: "task_alt", link_url: "https://tasksboard.com/", tags: ["görev", "todo", "iş", "üretkenlik"], fun_fact: "Görevleriniz doğrudan Gmail yan panelinde ve Google Takviminizde tarihleriyle beraber görünür." },
    { id: "g11", name: "Files by Google", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Telefonunuzda yer açan dosya yöneticisi.", long_description: "Android cihazınızdaki gereksiz dosyaları temizleyen, dosyalarınızı düzenleyen ve çevrimdışı hızlı paylaşım sağlayan akıllı uygulama.", icon_name: "folder", link_url: "https://files.google.com/", tags: ["dosya", "temizlik", "depolama", "android"], fun_fact: "Uygulama içi 'Yakındakilerle Paylaş' özelliği sayesinde internet olmadan devasa dosyaları saniyeler içinde gönderebilirsiniz." },
    { id: "g12", name: "Gboard", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Google'ın akıllı klavyesi.", long_description: "Hızlı yazma (kaydırma), anında çeviri, GIF ve çıkartma arama özellikleriyle donatılmış gelişmiş akıllı telefon klavyesi.", icon_name: "keyboard", link_url: "https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin", tags: ["klavye", "yazı", "android", "araç"], fun_fact: "Gboard'da yazarken Google Çeviri ikonuna basarsanız, yazdığınız her kelime anında karşı dile çevrilerek gönderilir." },
    { id: "g13", name: "Voice", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Arama, kısa mesaj ve sesli posta için telefon numarası.", long_description: "Kişisel ve iş aramalarınızı tek bir numaradan yönetmenizi, sesli mesajlarınızı metne dönüştürmenizi sağlayan telekomünikasyon hizmeti.", icon_name: "call", link_url: "https://voice.google.com/", tags: ["telefon", "numara", "iletişim", "voip"], fun_fact: "ABD'de ücretsiz telefon numarası almanızı ve cihaz fark etmeksizin aynı numaradan çağrı yanıtlamanızı sağlar." },
    { id: "g15", name: "Authenticator", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "İki adımlı doğrulama (2FA) uygulaması.", long_description: "Hesaplarınızı güvence altına almak için zamana duyarlı şifreler (OTP) üreten güvenilir kimlik doğrulayıcı.", icon_name: "password", link_url: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2", tags: ["güvenlik", "şifre", "2fa", "koruma"], fun_fact: "Artık Google Hesabınızla senkronize olarak çalıştığı için, telefonunuzu kaybetseniz bile kodlarınıza diğer cihazdan ulaşabilirsiniz." },
    { id: "g17", name: "Şifre Yöneticisi", pricing: "Ücretsiz", category: "Günlük Kullanım", short_description: "Tüm parolalarınız güvende.", long_description: "Tüm cihazlarınızda Chrome ve Android ile senkronize çalışan, güçlü şifreler üreten ve zayıf şifrelerinizi denetleyen kasa.", icon_name: "key", link_url: "https://passwords.google.com/", tags: ["şifre", "parola", "kasa", "güvenlik"], fun_fact: "Şifre yöneticisi, parolanızın bir veri ihlalinde çalınıp çalınmadığını otomatik olarak kontrol eder." },
    { id: "g18", name: "Kaydedildi (Koleksiyonlar)", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", short_description: "İnternette beğendiğiniz her şeyi biriktirin.", long_description: "Google Arama, Haritalar ve Görseller'de kaydettiğiniz bağlantıları, yerleri ve fotoğrafları kategoriler halinde saklayan merkez.", icon_name: "bookmark", link_url: "https://www.google.com/save", tags: ["kayıt", "koleksiyon", "yer imi", "favori"], fun_fact: "Kaydettiğiniz mekanları arkadaşlarınızla ortak bir koleksiyon haline getirip birlikte seyahat planı yapabilirsiniz." },

    // --- 2. Harita & Konum (2D, 3D, CBS) ---
    { id: "map1", name: "Haritalar", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "Navigasyon ve yerel rehber uygulaması.", long_description: "Yaya, araba, bisiklet veya toplu taşıma ile dünyanın her yerinde yolunuzu bulmanızı sağlayan 2D ve 3D destekli harita uygulaması.", icon_name: "map", link_url: "https://maps.google.com", tags: ["harita", "navigasyon", "rota", "2d", "3d"], fun_fact: "Sokak Görünümü kameraları develerin sırtında bile çöl görüntüleri çekmiştir." },
    { id: "map2", name: "Earth", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "Tüm dünyayı 3 boyutlu olarak keşfedin.", long_description: "Uydu görüntüleri ve 3D topografya verilerini birleştirerek Dünya'yı sanal bir küre üzerinde gösteren sistem.", icon_name: "public", link_url: "https://earth.google.com/", tags: ["dünya", "3d", "uydu", "cbs"], fun_fact: "Orijinal adı 'EarthViewer 3D' idi ve Keyhole şirketi tarafından CIA destekli olarak kurulmuştu." },
    { id: "map3", name: "Earth Engine", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "Gezegen ölçeğinde CBS ve veri analizi platformu.", long_description: "Çevre bilimciler ve araştırmacılar için devasa petabaytlık uydu görüntüsü ve coğrafi bilgi sistemi (CBS/GIS) veri kataloğu ve bulut analiz aracı.", icon_name: "satellite_alt", link_url: "https://earthengine.google.com/", tags: ["cbs", "gis", "uydu", "iklim", "analiz"], fun_fact: "Araştırmacılar, Amazon ormanlarındaki yasadışı kesimleri tespit etmek için Earth Engine verilerini kullanır." },
    { id: "map4", name: "Haritalarım (My Maps)", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "Kendi özel haritalarınızı oluşturun.", long_description: "Noktalar ekleyerek, rotalar çizerek ve verileri (Excel/CSV) haritaya aktararak tamamen size özel CBS tabanlı haritalar hazırlayın.", icon_name: "edit_location", link_url: "https://mymaps.google.com/", tags: ["kendi haritan", "cbs", "çizim", "rota"], fun_fact: "Şirketler şube konumlarını Excel'den direkt içeri aktararak anında görsel haritaya çevirebilirler." },
    { id: "map5", name: "Haritalar Platformu", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "Geliştiriciler için Harita API'leri.", long_description: "Uygulamalarınıza ve web sitelerinize Google Haritalar, Rota planlama ve Yer (Places) verilerini gömmenizi sağlayan geliştirici platformu.", icon_name: "api", link_url: "https://mapsplatform.google.com/", tags: ["api", "harita", "geliştirici", "yazılım"], fun_fact: "Uber, Airbnb ve Yemeksepeti gibi binlerce dev şirket konum altyapısını Google Maps API üzerine kurmuştur." },
    { id: "map6", name: "Street View", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "360 derece sokak ve mekan görüntüleri.", long_description: "Dünyanın sokaklarında sanal olarak yürüyün veya kendi 360 derecelik fotoğraflarınızı oluşturup haritaya katkıda bulunun.", icon_name: "streetview", link_url: "https://www.google.com/streetview/", tags: ["360", "sokak", "panorama", "3d"], fun_fact: "Eskiden sokaklarda sadece araba ile çekim yapılırken artık 'Trekker' adı verilen sırt çantalarıyla dağların zirvesi bile çekiliyor." },
    { id: "map7", name: "Waze", pricing: "Ücretsiz & Ücretli", category: "Harita & Konum", short_description: "Topluluk tabanlı interaktif navigasyon.", long_description: "Kullanıcıların anlık trafik durumu, kaza veya radar bilgilerini canlı olarak paylaştığı navigasyon uygulaması.", icon_name: "directions_car", link_url: "https://www.waze.com/", tags: ["navigasyon", "trafik", "sürüş", "radar"], fun_fact: "Waze, Google tarafından satın alınmasına rağmen Google Haritalar'dan bağımsız bir ürün olarak varlığını sürdürmektedir." },

    // --- 3. Eğitim & Araştırma ---
    { id: "edu1", name: "Classroom", pricing: "Ücretsiz & Ücretli", category: "Eğitim & Araştırma", short_description: "Eğitimciler için dijital sınıf yönetimi.", long_description: "Öğretmenlerin ödev oluşturmasını, duyuru yapmasını ve ders materyallerini dijital ortamda düzenlemesini sağlayan platform.", icon_name: "school", link_url: "https://classroom.google.com", tags: ["okul", "ödev", "ders", "eğitim"], fun_fact: "Uzaktan eğitim sürecinde dünya çapında 150 milyondan fazla öğrenci ve öğretmen tarafından kullanılmıştır." },
    { id: "edu2", name: "Akademik", pricing: "Ücretsiz & Ücretli", category: "Eğitim & Araştırma", short_description: "Bilimsel makaleler ve tez araması.", long_description: "Google Scholar, üniversite tezleri, akademik makaleler, kitaplar ve mahkeme kararlarında arama yapmanızı sağlar.", icon_name: "history_edu", link_url: "https://scholar.google.com", tags: ["akademik", "okul", "üniversite", "tez", "makale"], fun_fact: "Sloganı 'Devlerin omuzlarında yüksel' şeklindedir (Isaac Newton'un sözü)." },
    { id: "edu3", name: "Socratic by Google", pricing: "Ücretsiz & Ücretli", category: "Eğitim & Araştırma", short_description: "Yapay zeka destekli ödev yardımcısı.", long_description: "Öğrencilerin çözemedikleri matematik veya fen problemlerinin fotoğrafını çekerek yapay zekadan adım adım çözüm öğrenebildiği uygulama.", icon_name: "calculate", link_url: "https://socratic.org/", tags: ["ödev", "matematik", "lise", "okul", "ai"], fun_fact: "Socratic sadece cevap vermekle kalmaz, konuyu anlamanız için açıklayıcı videolar da bulur." },
    { id: "edu4", name: "Read Along", pricing: "Ücretsiz & Ücretli", category: "Eğitim & Araştırma", short_description: "Çocuklar için AI destekli okuma uygulaması.", long_description: "Diya adındaki sesli okuma asistanı ile çocukların kendi başlarına sesli okuma pratiği yapmalarını sağlayan Android uygulaması.", icon_name: "record_voice_over", link_url: "https://readalong.google.com/", tags: ["okuma", "çocuk", "kitap", "öğrenme"], fun_fact: "İnternet bağlantısı olmadan da çevrimdışı çalışarak kırsal bölgelerdeki çocuklara okuma öğretir." },
    { id: "edu5", name: "CS First", pricing: "Ücretsiz & Ücretli", category: "Eğitim & Araştırma", short_description: "Bilgisayar bilimleri eğitim müfredatı.", long_description: "Öğretmenler için tasarlanmış, çocuklara Scratch üzerinden kodlama öğretmeyi amaçlayan ücretsiz eğitim programı.", icon_name: "terminal", link_url: "https://csfirst.withgoogle.com/", tags: ["kodlama", "çocuk", "bilişim", "müfredat"], fun_fact: "CS First, tamamen gönüllüler tarafından başlatılmış bir Google girişimidir." },

    // --- 4. Sağlık & Yaşam ---
    { id: "hlth1", name: "Health", pricing: "Ücretsiz & Ücretli", category: "Sağlık & Yaşam", short_description: "Geleceğin sağlık teknolojileri platformu.", long_description: "Klinik araştırmalar, sağlık verisi analizi ve doktorlar için teşhis asistanı geliştiren Google'ın sağlık teknolojileri bölümü.", icon_name: "health_and_safety", link_url: "https://health.google/", tags: ["sağlık", "hastane", "tıp", "araştırma"], fun_fact: "Google Health yapay zekası, bazı durumlarda göğüs röntgenlerini tarayarak kanseri uzman radyologlardan daha hızlı tespit edebilmiştir." },
    { id: "hlth2", name: "Fit", pricing: "Ücretsiz & Ücretli", category: "Sağlık & Yaşam", short_description: "Adım ve aktivite takip uygulaması.", long_description: "Dünya Sağlık Örgütü (WHO) ile birlikte geliştirilen, kalp puanları ve hareket dakikalarınızı ölçen sağlık asistanı.", icon_name: "monitor_heart", link_url: "https://www.google.com/fit/", tags: ["spor", "fitness", "adım", "kalori"], fun_fact: "Telefonunuzun kamerasını kullanarak kalp atış hızınızı ve nefes alışverişinizi ölçebilir." },
    { id: "hlth3", name: "Fitbit", pricing: "Ücretsiz & Ücretli", category: "Sağlık & Yaşam", short_description: "Akıllı bileklikler ve fitness takip donanımları.", long_description: "Google tarafından satın alınan Fitbit, adımlarınızı, uyku kalitenizi ve stres seviyenizi takip eden giyilebilir sağlık teknolojisidir.", icon_name: "watch", link_url: "https://www.fitbit.com/", tags: ["bileklik", "saat", "sağlık", "donanım"], fun_fact: "Fitbit, kalp ritmi bozukluklarını (AFib) tespit edip uyarı verebilen onaylı sensörlere sahiptir." },
    { id: "hlth4", name: "DermAssist (Deneysel)", pricing: "Ücretsiz & Ücretli", category: "Sağlık & Yaşam", short_description: "AI tabanlı cilt rahatsızlığı tanıma aracı.", long_description: "Cildinizdeki benlerin, kızarıklıkların veya lekelerin fotoğrafını yükleyerek yapay zekadan benzer vakalar hakkında bilgi almanızı sağlayan web aracı.", icon_name: "dermatology", link_url: "https://health.google/health-conditions/dermatology/", tags: ["cilt", "deri", "doktor", "ai", "deneysel"], fun_fact: "DermAssist AI modeli, milyonlarca klinik fotoğrafla dermatologlar tarafından eğitilmiştir." },
    { id: "hlth5", name: "Dijital Denge", pricing: "Ücretsiz & Ücretli", category: "Sağlık & Yaşam", short_description: "Ekran sürenizi sağlıklı yönetin.", long_description: "Android cihazınızda hangi uygulamada ne kadar zaman geçirdiğinizi görmenizi ve yatma zamanı modları ayarlamanızı sağlar.", icon_name: "spa", link_url: "https://wellbeing.google/", tags: ["denge", "sağlık", "odak", "zaman"], fun_fact: "Odak modu sayesinde, ders çalışırken veya çalışırken sadece belirlediğiniz uygulamaların bildirim göndermesine izin verebilirsiniz." },

    // --- 5. Yapay Zeka & Gelecek ---
    { id: "ai_dm", name: "DeepMind", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Google'ın yapay zeka araştırma laboratuvarı.", long_description: "Yapay zeka (AGI) geliştirme ve zekayı çözme amacıyla çalışan, AlphaGo ve AlphaFold gibi çığır açan keşiflere imza atan Google'ın devasa laboratuvarı.", icon_name: "science", link_url: "https://deepmind.google/", tags: ["araştırma", "agi", "laboratuvar", "deepmind"], fun_fact: "DeepMind, tarihte ilk defa Go oyununda dünya şampiyonunu yenen AlphaGo'yu geliştirmiştir." },
    { id: "ai_waymo", name: "Waymo", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Otonom (sürücüsüz) araç teknolojisi.", long_description: "Alphabet (Google) çatısı altındaki Waymo, tamamen insansız ve yapay zeka destekli taksiler (Robotaksi) geliştiren öncü şirkettir.", icon_name: "directions_car", link_url: "https://waymo.com/", tags: ["araba", "otonom", "sürücüsüz", "robotaksi"], fun_fact: "Waymo, dünyada tamamen sürücüsüz ticari taksi hizmeti başlatan ilk şirkettir (Waymo One)." },
    { id: "ai_astra", name: "Project Astra", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Evrensel yapay zeka ajanı.", long_description: "Telefonunuzun veya akıllı gözlüğünüzün kamerasını kullanarak gerçek zamanlı olarak çevreyi gören, konuşan ve anlayan gelecek nesil AI asistanı.", icon_name: "visibility", link_url: "https://deepmind.google/technologies/gemini/project-astra/", tags: ["ajan", "asistan", "görüş", "gerçek zamanlı"], fun_fact: "Astra, etrafına baktığında masada unuttuğunuz gözlüğünüzün nerede olduğunu bile hatırlayabilir." },
    { id: "ai_veo", name: "Veo", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Yüksek çözünürlüklü video üreten AI.", long_description: "Sadece metin komutları girerek sinematik kalitede 1080p çözünürlüğünde ve bir dakikadan uzun videolar üretebilen çığır açan yapay zeka modeli.", icon_name: "movie", link_url: "https://deepmind.google/technologies/veo/", tags: ["video", "üretken", "film", "deepmind"], fun_fact: "Veo, sinemacılık terimlerini (örneğin 'timelapse', 'havadan çekim') anlayarak tam olarak o tarzda videolar çizer." },
    { id: "ai_gemma", name: "Gemma", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Açık ağırlıklı hafif AI modelleri.", long_description: "Gemini modellerini oluşturan aynı araştırma ve teknolojiyle tasarlanmış, geliştiriciler ve araştırmacılar için açık ağırlıklı, son teknoloji hafif modeller ailesi.", icon_name: "memory", link_url: "https://ai.google.dev/gemma", tags: ["açık kaynak", "llm", "geliştirici", "model"], fun_fact: "Gemma adı, Latince 'kıymetli taş' anlamına gelen kelimeden türetilmiştir." },
    { id: "ai_synth", name: "SynthID", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Yapay zeka içeriklerine dijital filigran.", long_description: "Yapay zeka ile üretilmiş görsellere, videolara ve seslere insan gözüyle görülemeyen ancak bilgisayarlarca tespit edilebilen dijital filigranlar (watermark) ekleyen araç.", icon_name: "fingerprint", link_url: "https://deepmind.google/technologies/synthid/", tags: ["güvenlik", "filigran", "deepfake", "tespit"], fun_fact: "SynthID filigranları, bir fotoğraf kırpılsa veya renkleri değiştirilse bile bozulmadan kalır." },
    { id: "ai_graph", name: "GraphCast", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Küresel hava durumu tahmin modeli.", long_description: "Makine öğrenimi kullanarak dünya genelindeki hava durumunu benzeri görülmemiş bir doğrulukla ve sadece saniyeler içinde 10 güne kadar tahmin edebilen AI.", icon_name: "storm", link_url: "https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/", tags: ["hava durumu", "iklim", "bilim", "tahmin"], fun_fact: "GraphCast, süper bilgisayarların saatlerce uğraştığı hava tahminlerini tek bir masaüstü bilgisayarda bir dakikadan kısa sürede çözer." },
    { id: "ai_music", name: "MusicFX / MusicLM", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Metinden müzik üreten AI.", long_description: "Yazdığınız kelimeleri ve enstrümanları temel alarak yüksek kalitede yepyeni müzik parçaları ve ritimler üreten üretken yapay zeka aracı.", icon_name: "music_note", link_url: "https://aitestkitchen.withgoogle.com/tools/music-fx", tags: ["müzik", "ses", "üretken", "laboratuvar"], fun_fact: "Müziği üretirken '90'lar hip hop' veya 'Klasik piyano ve tekno karışımı' gibi sınır tanımayan isteklerde bulunabilirsiniz." },
    { id: "ai_code", name: "AlphaCode", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Rekabetçi programlama yazay zekası.", long_description: "Google DeepMind tarafından geliştirilen, karmaşık yazılım problemlerini anlayıp insan düzeyinde rekabetçi kod (C++, Python vb.) yazabilen sistem.", icon_name: "terminal", link_url: "https://deepmind.google/discover/blog/competitive-programming-with-alphacode/", tags: ["kodlama", "yazılım", "algoritma", "deepmind"], fun_fact: "AlphaCode, dünyanın en zorlu kodlama yarışmalarında katılan insanların %54'ünden daha iyi bir sıralama elde etmiştir." },
    { id: "ai0", name: "Asistan", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Günlük akıllı sesli asistanınız.", long_description: "Telefonunuzda ve ev aletlerinizde bulunan; sorularınızı yanıtlayan, alarmlar kuran ve akıllı evinizi yöneten kişisel asistanınız.", icon_name: "mic", link_url: "https://assistant.google.com/", tags: ["ses", "asistan", "ai", "yardımcı"], fun_fact: "Asistan'a 'Bana bir fıkra anlat' diyerek binlerce farklı espriyi dinleyebilirsiniz." },
    { id: "ai1", name: "Gemini", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Google'ın en yetenekli çok modlu yapay zeka modeli.", long_description: "Metin, kod, ses, görüntü ve videoyu aynı anda anlayabilen, mantıksal akıl yürütme konusunda devrim yaratan AI modelidir.", icon_name: "spark", link_url: "https://gemini.google.com/", tags: ["ai", "llm", "chatbot"], fun_fact: "Gemini adı, NASA'nın Project Gemini programından esinlenilmiştir." },
    { id: "ai1b", name: "NotebookLM", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Yapay zeka destekli kişisel araştırma asistanı.", long_description: "Kendi belgelerinizi yüklediğinizde o belgelere uzmanlaşan, özet çıkartan ve sorularınızı yanıtlayan inanılmaz bir AI aracı.", icon_name: "menu_book", link_url: "https://notebooklm.google.com/", tags: ["araştırma", "not", "yapay zeka", "okuma"], fun_fact: "NotebookLM, yüklediğiniz metinlerden adeta gerçek bir radyo programı (podcast) sunucusu gibi sesli sohbetler üretebilir." },
    { id: "ai2", name: "AI Studio", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Gemini modelleri ile prototip oluşturun.", long_description: "Geliştiricilerin Gemini API'sini kullanarak kendi yapay zeka uygulamalarını hızlıca test edip geliştirebildikleri ortamdır.", icon_name: "draw", link_url: "https://aistudio.google.com/", tags: ["ai", "geliştirici", "prototip", "api"], fun_fact: "AI Studio sayesinde tek bir satır kod bile yazmadan çok modlu prompt'lar tasarlayabilirsiniz." },
    { id: "ai3", name: "Vertex AI", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Kurumsal makine öğrenimi platformu.", long_description: "Google Cloud üzerinde makine öğrenimi modellerini oluşturmak, dağıtmak ve yönetmek için kullanılan birleşik platformdur.", icon_name: "model_training", link_url: "https://cloud.google.com/vertex-ai", tags: ["ml", "model", "eğitim", "gcp"], fun_fact: "Vertex AI, Google'ın kendi servislerinde kullandığı yapay zeka altyapısını dış müşterilere sunar." },
    { id: "ai4", name: "TensorFlow", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Açık kaynaklı derin öğrenme kütüphanesi.", long_description: "Makine öğrenimi ve yapay sinir ağları oluşturmak için Google Brain tarafından geliştirilen endüstri standardı açık kaynak platformudur.", icon_name: "account_tree", link_url: "https://www.tensorflow.org/", tags: ["açık kaynak", "ml", "python", "framework"], fun_fact: "Dünyadaki çoğu büyük yapay zeka atılımı TensorFlow altyapısı kullanılarak yapılmıştır." },
    { id: "ai5", name: "Kaggle", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Veri bilimi ve makine öğrenimi topluluğu.", long_description: "Google bünyesinde yer alan Kaggle, veri bilimcilerin veri setleri bulduğu, kod paylaştığı ve yarışmalara katıldığı topluluktur.", icon_name: "leaderboard", link_url: "https://www.kaggle.com/", tags: ["veri", "veri bilimi", "topluluk", "yarışma"], fun_fact: "Bugüne kadar Kaggle üzerinde düzenlenen yarışmalarda şirketler milyonlarca dolar ödül dağıtmıştır." },
    { id: "ai6", name: "Lens", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Gördüğünüz her şeyi arayın.", long_description: "Kameranızı kullanarak metin çevirin, eşyaları tanıyın, matematik problemlerini çözün veya gördüklerinizi satın alın.", icon_name: "document_scanner", link_url: "https://lens.google/", tags: ["kamera", "görsel", "arama", "ai"], fun_fact: "Lens sadece fotoğraftaki metni okumakla kalmaz, onu doğrudan kopyalamanızı da sağlar." },
    { id: "ai7", name: "AlphaFold (DeepMind)", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Protein yapısı tahmin eden yapay zeka.", long_description: "Google DeepMind tarafından geliştirilen ve biyolojinin 50 yıllık en büyük problemlerinden biri olan protein katlanmasını çözen devrimsel yapay zeka.", icon_name: "biotech", link_url: "https://deepmind.google/technologies/alphafold/", tags: ["biyoloji", "bilim", "protein", "deepmind"], fun_fact: "AlphaFold'un keşifleri, bilim insanlarına kanser araştırmalarından yeni enzimlerin icadına kadar yıllarca zaman kazandırdı." },
    { id: "ai8", name: "Imagen", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Metinden görsel üreten (Text-to-Image) model.", long_description: "Sadece yazdığınız kelimeleri kullanarak inanılmaz derecede gerçekçi fotoğraflar ve sanatsal illüstrasyonlar çizen AI modeli.", icon_name: "imagesearch_roller", link_url: "https://imagen.research.google/", tags: ["görsel", "çizim", "resim", "üretken ai"], fun_fact: "Imagen, resimlerin üzerine 'gerçek metinler' (örneğin tabelaya yazılmış yazılar) yazma konusunda diğer modellerden çok daha üstündür." },
    { id: "ai9", name: "Dialogflow", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Sohbet botu (Chatbot) ve sesli asistan geliştirme.", long_description: "Müşteri hizmetleri için web sitelerine, telefon hatlarına veya mesajlaşma uygulamalarına doğal dil anlayan botlar ekleme platformu.", icon_name: "forum", link_url: "https://cloud.google.com/dialogflow", tags: ["chatbot", "destek", "bot", "nlp"], fun_fact: "Eğer bir şirketi aradığınızda sizi insana benzeyen zeki bir sesli yanıt sistemi karşılıyorsa, arkasında yüksek ihtimalle Dialogflow çalışıyordur." },
    { id: "ai10", name: "Teachable Machine", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", short_description: "Tarayıcıda kod yazmadan AI eğitin.", long_description: "Web kameranızı veya mikrofonunuzu kullanarak bilgisayarınıza sadece saniyeler içinde yeni şeyler tanımayı öğretebileceğiniz eğlenceli bir araç.", icon_name: "model_training", link_url: "https://teachablemachine.withgoogle.com/", tags: ["eğitim", "model", "kamera", "nocode"], fun_fact: "Bilgisayarınıza kahve fincanını kameraya gösterdiğinizde müziği durdurmasını öğretebilirsiniz." },

    // --- 6. Geliştirici Araçları (Yazılım) ---
    { id: "d1", name: "Cloud", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Bulut bilişim hizmetleri paketi.", long_description: "Hesaplama, veri depolama ve analitik sunan geniş çaplı kurumsal bulut altyapısı.", icon_name: "cloud_done", link_url: "https://cloud.google.com/", tags: ["bulut", "altyapı", "sunucu", "hosting"], fun_fact: "Spotify ve Snapchat altyapılarını büyük ölçüde Google Cloud üzerinde barındırır." },
    { id: "d2", name: "Firebase", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Kapsamlı mobil uygulama backend platformu.", long_description: "Uygulamalar oluşturmak ve büyütmek için gerçek zamanlı veritabanı, kimlik doğrulama ve hosting sunan platformdur.", icon_name: "local_fire_department", link_url: "https://firebase.google.com/", tags: ["backend", "veritabanı", "hosting", "auth"], fun_fact: "Firebase başlangıçta 'Envolve' adında web sitelerine sohbet ekleyen bir girişimdi." },
    { id: "d3", name: "Flutter", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Çapraz platform UI geliştirme kiti.", long_description: "Tek bir Dart kod tabanından iOS, Android, Web ve Masaüstü için güzel uygulamalar geliştirmeyi sağlar.", icon_name: "flutter_dash", link_url: "https://flutter.dev/", tags: ["ui", "framework", "mobil", "dart"], fun_fact: "BMW ve Alibaba gibi dev şirketler uygulamalarını Flutter ile geliştirmiştir." },
    { id: "d4", name: "Android Studio", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Resmi Android IDE'si.", long_description: "Android uygulamaları geliştirmek için Intellij tabanlı resmi Entegre Geliştirme Ortamı (IDE).", icon_name: "developer_mode", link_url: "https://developer.android.com/studio", tags: ["ide", "android", "yazılım", "kodlama"], fun_fact: "Farklı ekran boyutlarındaki cihazları sanal olarak test edebilmek için gelişmiş simülatörlere sahiptir." },
    { id: "d12", name: "Geliştiriciler İçin Google", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Tüm geliştirici kaynakları tek yerde.", long_description: "Yazılımcılar için Google'ın sunduğu tüm API'ler, SDK'lar, eğitim materyalleri ve topluluk etkinliklerinin toplandığı merkez portal (Google for Developers).", icon_name: "code_blocks", link_url: "https://developers.google.com/", tags: ["geliştirici", "api", "doküman", "rehber"], fun_fact: "Dünya çapındaki Google Developer Groups (GDG) etkinlikleri bu portal üzerinden yönetilir." },
    { id: "d13", name: "Identity Platform", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Uygulamalarınız için kimlik doğrulama.", long_description: "Kullanıcıların 'Google ile Giriş Yap' düğmesi veya diğer OAuth yöntemleriyle uygulamalarınıza güvenli şekilde kayıt olmasını sağlayan kimlik altyapısı.", icon_name: "badge", link_url: "https://developers.google.com/identity", tags: ["giriş", "login", "kimlik", "oauth"], fun_fact: "Web'de gördüğünüz her 'Google ile Giriş Yap' butonu arka planda bu mimariyi kullanır." },
    { id: "d14", name: "Web / Chrome Dev", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Modern web geliştirme kaynakları.", long_description: "Web.dev ve Chrome Developers platformları üzerinden daha hızlı, güvenli ve erişilebilir web siteleri kurmak için standartlar ve araçlar sunar.", icon_name: "web_stories", link_url: "https://web.dev/", tags: ["web", "html", "css", "optimizasyon"], fun_fact: "Lighthouse performans ölçüm aracı bu platformun web'e kazandırdığı en önemli standartlardan biridir." },
    { id: "d5", name: "Go (Golang)", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Basit, hızlı ve güvenilir programlama dili.", long_description: "Google tarafından geliştirilen; açık kaynaklı, sistem programlama ve bulut altyapısı için ideal dildir.", icon_name: "terminal", link_url: "https://go.dev/", tags: ["dil", "programlama", "backend", "go"], fun_fact: "Docker ve Kubernetes gibi devasa açık kaynak projeleri Go dili ile yazılmıştır." },
    { id: "d6", name: "Angular", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Web uygulamaları için geliştirme platformu.", long_description: "Google ekibi tarafından desteklenen, TypeScript tabanlı güçlü bir açık kaynaklı frontend web uygulama çerçevesidir.", icon_name: "code_blocks", link_url: "https://angular.io/", tags: ["frontend", "javascript", "framework", "web"], fun_fact: "Angular'ın ilk versiyonu 2010 yılında yayınlanmıştır ve modern web'in çehresini değiştirmiştir." },
    { id: "d6a", name: "Kubernetes (K8s)", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Konteyner orkestrasyon sistemi.", long_description: "Google'ın kendi içinde kullandığı 'Borg' sisteminden esinlenerek açık kaynak haline getirdiği, modern yazılım dağıtımının kalbi olan sistem.", icon_name: "grid_view", link_url: "https://kubernetes.io/", tags: ["devops", "konteyner", "sunucu", "bulut"], fun_fact: "Logosunun 7 kollu bir dümen olmasının sebebi, orijinal projenin adının 'Project 7 of Nine' (Uzay Yolu karakteri) olmasıdır." },
    { id: "d6b", name: "Material Design", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Açık kaynaklı tasarım sistemi.", long_description: "Google'ın dijital arayüzler için oluşturduğu; ışık, gölge ve kağıt mantığına dayanan tüm dünyada kullanılan tasarım dili kılavuzu.", icon_name: "design_services", link_url: "https://m3.material.io/", tags: ["tasarım", "ui", "ux", "arayüz"], fun_fact: "Android cihazlardaki o tatlı dalgalanma (ripple) tıklama efekti Material Design'ın imza dokunuşudur." },
    { id: "d7", name: "Search Console", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Sitenizin arama performansını artırın.", long_description: "Web sitenizin Google Arama'daki durumunu izlemenize ve sorunları gidermenize yardımcı olan araçtır.", icon_name: "bar_chart", link_url: "https://search.google.com/search-console", tags: ["seo", "webmaster", "site", "analiz"], fun_fact: "Eskiden 'Google Webmaster Tools' (GWT) adıyla bilinirdi." },
    { id: "d8", name: "Fonts", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Açık kaynaklı ve ücretsiz yazı tipleri.", long_description: "Web sitelerinizde ve projelerinizde kullanabileceğiniz binlerce yüksek kaliteli font koleksiyonu.", icon_name: "font_download", link_url: "https://fonts.google.com/", tags: ["font", "tasarım", "tipografi", "web"], fun_fact: "Roboto ve Open Sans fontları milyarlarca cihazda yer almaktadır." },
    { id: "d9", name: "reCAPTCHA", pricing: "Ücretsiz", category: "Geliştirici Araçları", short_description: "Sitelerinizi spam ve botlardan koruyun.", long_description: "Kullanıcıların insan mı yoksa bot mu olduğunu analiz eden ücretsiz güvenlik hizmeti.", icon_name: "security", link_url: "https://www.google.com/recaptcha/", tags: ["güvenlik", "bot", "spam", "koruma"], fun_fact: "Eskiden çözdüğünüz reCAPTCHA kelimeleri, eski kitapların dijitalleştirilmesine (OCR) yardımcı oluyordu." },
    { id: "d10", name: "Puppeteer", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Chrome'u kod ile kontrol etme kütüphanesi.", long_description: "Web kazıma (scraping), otomatik test yapma ve PDF oluşturma işlemleri için Chrome tarayıcısını arka planda çalıştıran Node.js kütüphanesi.", icon_name: "pest_control", link_url: "https://pptr.dev/", tags: ["test", "otomasyon", "scraping", "node"], fun_fact: "Logosunda Chrome amblemini yöneten ipler vardır (Kukla Ustası)." },
    { id: "d11", name: "Play Protect", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Kötü amaçlı yazılımlara karşı koruma.", long_description: "Android cihazınızdaki uygulamaları ve cihazın güvenliğini sürekli olarak tarayan, zararlı yazılımları engelleyen yerleşik güvenlik sistemi.", icon_name: "security_update_good", link_url: "https://support.google.com/googleplay/answer/2812853", tags: ["güvenlik", "antivirüs", "android", "koruma"], fun_fact: "Play Protect, Google Play dışında dışarıdan (APK) kurduğunuz uygulamaları da tarar." },
    { id: "mp2", name: "Apps Script", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Google uygulamalarını otomatikleştiren dil.", long_description: "JavaScript tabanlı bu platform sayesinde E-Tablolar ve Gmail gibi araçlarınızı konuşturup otomasyonlar yazabilirsiniz.", icon_name: "integration_instructions", link_url: "https://script.google.com/", tags: ["kodlama", "otomasyon", "javascript", "script"], fun_fact: "Kodlarınız Google'ın sunucularında çalıştığı için PC'niz kapalıyken bile işlem yapabilir." },
    { id: "mp3", name: "AppSheet", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", short_description: "Kod yazmadan uygulama geliştirme platformu.", long_description: "E-Tablolar veya veritabanlarındaki verilerinizi kullanarak tek satır kod yazmadan mobil iş uygulamaları yapmanızı sağlar.", icon_name: "build_circle", link_url: "https://about.appsheet.com/", tags: ["nocode", "uygulama", "geliştirme", "iş"], fun_fact: "Google, No-Code trendinin yükselmesiyle AppSheet'i kendi ekosistemine kattı." },

    // --- 7. İş & Pazarlama ---
    { id: "b1", name: "Ads", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Çevrimiçi reklam platformu.", long_description: "İşletmelerin Google Arama, YouTube ve web sitelerinde reklam vermesini sağlar. Arama Ağı ve Alışveriş reklamları gibi ağları içerir.", icon_name: "campaign", link_url: "https://ads.google.com/", tags: ["reklam", "pazarlama", "ticaret", "seo", "arama ağı"], fun_fact: "Google'ın gelirlerinin büyük bir çoğunluğu hâlâ Ads platformundan gelmektedir." },
    { id: "b2", name: "Analytics", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Detaylı web sitesi ve uygulama istatistikleri.", long_description: "Web sitenize veya uygulamanıza gelen ziyaretçilerin davranışlarını analiz etmek, trafiği izlemek için kullanılan araçtır.", icon_name: "monitoring", link_url: "https://analytics.google.com/", tags: ["analitik", "veri", "rapor", "istatistik"], fun_fact: "2005 yılında Urchin Software şirketinin satın alınmasıyla temelleri atılmıştır." },
    { id: "b3", name: "Workspace", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "İşletmeler için kurumsal üretkenlik paketi.", long_description: "Gmail, Docs, Drive gibi araçların şirket alan adı ve gelişmiş güvenlik kontrolleriyle kullanılabildiği platformdur.", icon_name: "business_center", link_url: "https://workspace.google.com/", tags: ["kurumsal", "ofis", "iş", "şirket"], fun_fact: "Workspace'in eski adı G Suite'ti." },
    { id: "b4", name: "AdSense", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Web sitenizden para kazanın.", long_description: "İçerik üreticilerinin web sitelerinde otomatik reklamlar yayınlayarak gelir elde etmelerini sağlar.", icon_name: "monetization_on", link_url: "https://adsense.google.com/", tags: ["para kazanma", "reklam", "gelir", "webmaster"], fun_fact: "AdSense algoritması, reklamları sayfanızın içeriğine göre seçer." },
    { id: "b5", name: "İşletme Profili", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Google Haritalar'da bulunun.", long_description: "Fiziksel mağazanızın veya yerel hizmetinizin Google Arama ve Haritalar'da nasıl görüneceğini yönetmenizi sağlar.", icon_name: "store", link_url: "https://www.google.com/business/", tags: ["işletme", "harita", "lokal", "mağaza"], fun_fact: "Eskiden Google My Business (GMB) adıyla anılıyordu." },
    { id: "b6", name: "Looker Studio", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "İnteraktif raporlar ve gösterge tabloları.", long_description: "Verilerinizi, okunması ve paylaşılması kolay bilgilendirici raporlar ve dashboard'lar haline getirir.", icon_name: "query_stats", link_url: "https://lookerstudio.google.com/", tags: ["veri", "rapor", "dashboard", "görselleştirme"], fun_fact: "Uzun süre Google Data Studio adıyla anıldı." },
    { id: "b7", name: "Trendler", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Dünyanın ne aradığını keşfedin.", long_description: "Anahtar kelimelerin arama hacimlerini ve zaman içindeki trend değişikliklerini analiz etmenizi sağlar.", icon_name: "trending_up", link_url: "https://trends.google.com/", tags: ["trend", "istatistik", "arama", "analiz"], fun_fact: "Pazarlamacılar ve gazeteciler tarafından gündemi takip etmek için yoğun olarak kullanılır." },
    { id: "b8", name: "Etiket Yöneticisi (Tag Manager)", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Etiket ve takip kodlarını tek yerden yönetin.", long_description: "Pazarlamacıların web sitelerindeki analiz ve pazarlama etiketlerini yazılımcıya ihtiyaç duymadan yönetmesini sağlar.", icon_name: "code", link_url: "https://tagmanager.google.com/", tags: ["tag", "etiket", "analitik", "kod"], fun_fact: "Sitedeki sayısız kod karmaşasını önleyerek sitelerin hızlı açılmasına katkı sağlar." },
    { id: "b10", name: "AdMob", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Mobil uygulamalarınızdan para kazanın.", long_description: "Geliştiricilerin Android ve iOS uygulamaları içerisine reklam yerleştirerek gelir elde etmelerini sağlayan mobil reklam ağı.", icon_name: "ad_units", link_url: "https://admob.google.com/", tags: ["reklam", "mobil", "uygulama", "gelir"], fun_fact: "AdMob, 'Advertising on Mobile' kelimelerinden türetilmiştir." },
    { id: "b11", name: "Ad Manager", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Büyük yayıncılar için reklam yönetimi.", long_description: "Büyük web siteleri ve yayıncıların reklam envanterlerini doğrudan satmaları ve yönetmeleri için kapsamlı platform.", icon_name: "manage_accounts", link_url: "https://admanager.google.com/", tags: ["reklam", "yayıncı", "envanter", "satış"], fun_fact: "Doubleclick platformunun Google tarafından satın alınıp geliştirilmiş halidir." },
    { id: "b12", name: "Marketing Platform", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Kurumsal pazarlama çözümleri.", long_description: "Daha akıllı pazarlama yapmanız için reklam ve analiz araçlarını (Analytics 360 vb.) tek çatı altında toplayan kurumsal platform.", icon_name: "ads_click", link_url: "https://marketingplatform.google.com/", tags: ["pazarlama", "kurumsal", "analitik", "kampanya"], fun_fact: "Büyük ajansların reklam kampanyalarını baştan uca yönetebileceği bir 'suite' (paket)tir." },
    { id: "b13", name: "Merchant Center", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Ürünlerinizi Google'da listeleyin.", long_description: "E-ticaret sitenizin ürün kataloğunu Google'a yükleyerek Google Alışveriş sekmesinde görünmesini sağlayan merkez.", icon_name: "store", link_url: "https://merchants.google.com/", tags: ["e-ticaret", "alışveriş", "mağaza", "ürün"], fun_fact: "Merchant Center'a eklediğiniz ürünler, arama sonuçlarında fotoğraflı ve fiyatlı olarak zengin snippet şeklinde çıkar." },
    { id: "b14", name: "Manufacturer Center", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Markanızın Google'daki sunumunu yönetin.", long_description: "Marka üreticilerinin, ürünlerinin Google üzerinde doğru görseller, açıklamalar ve özelliklerle listelenmesini sağladığı platform.", icon_name: "precision_manufacturing", link_url: "https://manufacturers.google.com/", tags: ["üretici", "marka", "katalog", "sunum"], fun_fact: "Perakendecilerin markanız hakkında yanlış bilgi vermesini engeller ve yetkiyi doğrudan üreticiye verir." },
    { id: "b15", name: "Android Enterprise", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "İşletmeler için güvenli Android cihaz yönetimi.", long_description: "Şirketlerin, çalışanlarına verdikleri Android telefonları ve tabletleri güvenli bir şekilde yönetmesine ve iş profilleri oluşturmasına olanak tanır.", icon_name: "corporate_fare", link_url: "https://www.android.com/enterprise/", tags: ["kurumsal", "mdm", "güvenlik", "cihaz"], fun_fact: "Kişisel profil ile İş profili birbirinden tamamen izole çalışarak çalışan gizliliğini korur." },
    { id: "b16", name: "Chrome Enterprise", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Şirketler için yönetilen tarayıcı ve cihazlar.", long_description: "IT departmanlarının Chrome tarayıcı politikalarını ve Chromebook filolarını merkezi bir noktadan yönetmesini sağlar.", icon_name: "domain", link_url: "https://chromeenterprise.google/", tags: ["kurumsal", "tarayıcı", "it", "yönetim"], fun_fact: "Çalışanlarınızın tarayıcı üzerinden zararlı eklentiler kurmasını tek tuşla şirket genelinde yasaklayabilirsiniz." },
    { id: "b17", name: "Etkileşimli Medya Reklamları (IMA)", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Yayıncılar için video reklam SDK'sı.", long_description: "Yayıncıların kendi video oynatıcılarında ve oyunlarında (HTML5, Android, iOS) Google reklamlarını göstermesini sağlayan SDK.", icon_name: "slow_motion_video", link_url: "https://developers.google.com/interactive-media-ads", tags: ["video", "reklam", "sdk", "yayın"], fun_fact: "YouTube'daki video öncesi atlanabilir reklam formatları bu teknolojinin temelini oluşturur." },
    { id: "mp1", name: "Workspace Marketplace", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", short_description: "Workspace için eklenti mağazası.", long_description: "Google Workspace uygulamalarına özellik katan üçüncü taraf ve Google yapımı binlerce entegrasyonun bulunduğu mağaza.", icon_name: "local_mall", link_url: "https://workspace.google.com/marketplace", tags: ["mağaza", "eklenti", "uygulama", "workspace"], fun_fact: "Asana, Zoom, Trello gibi binlerce farklı şirketin Google ekosistemine bağlanmasını sağlar." },

    // --- 8. Donanım & OS ---
    { id: "h1", name: "Pixel", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Google'ın yapay zeka destekli akıllı telefonu.", long_description: "Gelişmiş Tensor çipi ve olağanüstü kamera yetenekleri ile donatılmış saf Android akıllı telefondur.", icon_name: "smartphone", link_url: "https://store.google.com/category/phones", tags: ["telefon", "android", "mobil"], fun_fact: "Fotoğraf işleme alanında akıllı telefon pazarına yeni bir standart getirmiştir." },
    { id: "h11", name: "Pixel Buds", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Google'ın akıllı kablosuz kulaklıkları.", long_description: "Yüksek ses kalitesi, aktif gürültü engelleme (ANC) ve anında Google Asistan erişimi sunan TWS kulaklıklar.", icon_name: "headphones", link_url: "https://store.google.com/category/earbuds", tags: ["kulaklık", "ses", "müzik", "bluetooth"], fun_fact: "Pixel Buds, biriyle konuşurken gerçek zamanlı olarak dil çevirisi yapıp kulağınıza fısıldayabilir." },
    { id: "h12", name: "Pixel Tablet", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Ev için tasarlanmış akıllı Android tablet.", long_description: "Hem güçlü bir Android tablet hem de manyetik şarj istasyonuna oturduğunda akıllı bir ev ekranı olarak çalışan cihaz.", icon_name: "tablet_mac", link_url: "https://store.google.com/category/tablets", tags: ["tablet", "ekran", "android", "ev"], fun_fact: "Hoparlörlü şarj standı sayesinde tablet kullanmadığınız anlarda şık bir dijital çerçeveye dönüşür." },
    { id: "h13", name: "Pixel Watch", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Fitbit destekli Google akıllı saati.", long_description: "Şık dairesel tasarımı, Wear OS deneyimi ve entegre Fitbit sağlık takibi ile Google'ın premium akıllı saati.", icon_name: "watch", link_url: "https://store.google.com/category/watches", tags: ["saat", "giyilebilir", "sağlık", "aksesuar"], fun_fact: "Kordon bağlantı sistemi, kameradan ilham alan özel bir mekanizma ile çevir-tak şeklinde çalışır." },
    { id: "h2", name: "Android", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Dünyanın en popüler mobil işletim sistemi.", long_description: "Açık kaynak kodlu ve geniş bir özelleştirme ekosistemi sunan, milyarlarca cihazı güçlendiren mobil işletim sistemi.", icon_name: "android", link_url: "https://www.android.com/", tags: ["os", "mobil", "yazılım", "telefon"], fun_fact: "Sürümleri eskiden tatlı isimleriyle (Cupcake, Donut) adlandırılıyordu." },
    { id: "h3", name: "Chromebook ve ChromeOS", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Hızlı, basit ve güvenli işletim sistemi.", long_description: "Chromebook bilgisayarlarda bulut tabanlı uygulamalar çalıştırmak için tasarlanmış hafif bir işletim sistemidir.", icon_name: "laptop_chromebook", link_url: "https://www.google.com/chromebook/chrome-os/", tags: ["os", "bilgisayar", "işletim sistemi"], fun_fact: "Arka plan güncellemeleri sayesinde cihazınız kullandıkça yavaşlamak yerine hızlanır." },
    { id: "h4", name: "Wear OS by Google", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Akıllı saatler için Google işletim sistemi.", long_description: "Kalp atışınızı takip eden, mesajlarınıza yanıt vermenizi sağlayan ve Google Asistan ile entegre çalışan yazılımdır.", icon_name: "watch", link_url: "https://wearos.google.com/", tags: ["saat", "giyilebilir", "sağlık", "os"], fun_fact: "Google Pay ile temassız ödeme özelliklerini bileğinizden yapmanızı sağlar." },
    { id: "h4a", name: "Android Auto", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Akıllı sürüş asistanınız.", long_description: "Telefonunuzu aracınızın ekranına bağlayarak navigasyon, müzik ve mesajlaşma özelliklerini güvenli bir sürüş deneyimiyle sunar.", icon_name: "directions_car", link_url: "https://www.android.com/auto/", tags: ["araba", "navigasyon", "sürüş", "oto"], fun_fact: "Sürüş esnasında dikkatiniz dağılmasın diye mesajlarınızı Google Asistan aracılığıyla sesli olarak okur." },
    { id: "h14", name: "destekli arabalar", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Araçlara yerleşik Android (Automotive).", long_description: "Telefona ihtiyaç duymadan arabanın kendi beynine entegre edilmiş Google Haritalar, Asistan ve Play Store içeren işletim sistemi.", icon_name: "directions_car", link_url: "https://www.android.com/auto/built-in/", tags: ["araba", "işletim sistemi", "oto", "yerleşik"], fun_fact: "Klimayı açmak veya koltuk ısıtmasını ayarlamak için bile Google Asistan'ı kullanabilirsiniz." },
    { id: "h5", name: "Nest", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Akıllı ev asistanı ve cihazları.", long_description: "Akıllı hoparlörler, termostatlar, güvenlik kameraları ve ekranlardan oluşan Nest ailesi evinizi akıllı hale getirir.", icon_name: "nest_cam_iq", link_url: "https://store.google.com/category/connected_home", tags: ["akıllı ev", "iot", "hoparlör"], fun_fact: "Nest Termostatlar bugüne kadar milyonlarca kWh enerji tasarrufu sağlamıştır." },
    { id: "h9", name: "Home", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Akıllı ev yönetim merkeziniz.", long_description: "Evinizdeki ışıkları, kameraları, termostatları ve diğer tüm uyumlu akıllı cihazları tek bir ekrandan kontrol etmenizi sağlayan uygulama.", icon_name: "home", link_url: "https://home.google.com/", tags: ["ev", "akıllı ev", "iot", "yönetim"], fun_fact: "Rutinler oluşturarak 'Günaydın' dediğinizde ışıkların açılmasını, haberlerin okunmasını ve kahve makinesinin çalışmasını sağlayabilirsiniz." },
    { id: "h6", name: "Cihaz Takip Merkezi (Bul)", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Kayıp cihazlarınızı kolayca bulun.", long_description: "Kayıp Android telefonlarınızı, saatlerinizi veya kulaklıklarınızı harita üzerinde bulun ve uzaktan kilitleyin/sıfırlayın.", icon_name: "find_in_page", link_url: "https://www.google.com/android/find", tags: ["kayıp", "güvenlik", "cihaz", "takip"], fun_fact: "Eğer telefonunuz sessizdeyse bile bu servis sayesinde son ses çaldırabilirsiniz." },
    { id: "h7", name: "Android TV", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Televizyonlar için işletim sistemi.", long_description: "Binlerce uygulama, oyun ve yayın platformuna erişim sağlayan büyük ekranlar için optimize edilmiş Android sürümü.", icon_name: "tv", link_url: "https://www.android.com/tv/", tags: ["tv", "televizyon", "os", "yayın"], fun_fact: "Kumandanız olmasa bile akıllı telefonunuzu Android TV kumandasına dönüştürebilirsiniz." },
    { id: "h8", name: "Cast", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "İçeriklerinizi televizyona yansıtın.", long_description: "Telefonunuzdaki film, müzik veya sekmeleri doğrudan televizyonunuza veya hoparlörünüze kablosuz aktarmanızı sağlayan teknoloji (Chromecast).", icon_name: "cast", link_url: "https://store.google.com/product/chromecast", tags: ["yansıtma", "tv", "medya", "kablosuz"], fun_fact: "Ekranı aynalamak yerine sadece içeriğin linkini TV'ye gönderir, bu sayede telefonunuzu kullanmaya devam edebilirsiniz." },
    { id: "h10", name: "Fi Wireless", pricing: "Ücretsiz & Ücretli", category: "Donanım & OS", short_description: "Google'ın mobil operatör hizmeti.", long_description: "Uluslararası dolaşım (roaming) kolaylığı, esnek faturalandırma ve yüksek güvenlik sunan Google'a ait telekomünikasyon ağı.", icon_name: "wifi", link_url: "https://fi.google.com/", tags: ["mobil", "operatör", "hat", "internet"], fun_fact: "Hangi baz istasyonu daha güçlüyse, hatlar arasında otomatik ve kesintisiz geçiş yaparak hep en iyi sinyali sunar." },

    // --- 9. Keşif & Eğlence ---
    { id: "k1", name: "Chrome", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Hızlı, güvenli web tarayıcısı.", long_description: "Hızı, güvenliği ve binlerce uzantı desteği ile dünyanın en çok kullanılan web tarayıcısıdır.", icon_name: "web", link_url: "https://www.google.com/chrome/", tags: ["tarayıcı", "web", "internet", "browser"], fun_fact: "İnternet bağlantınız koptuğunda Chrome'da beliren Dinozor oyunu efsanevi bir gizli özelliktir." },
    { id: "k14", name: "Chrome Web Mağazası", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Tarayıcınız için uzantı ve temalar.", long_description: "Chrome tarayıcınıza reklam engelleyiciler, verimlilik araçları ve temalar ekleyebileceğiniz resmi uygulama mağazası.", icon_name: "extension", link_url: "https://chromewebstore.google.com/", tags: ["eklenti", "tarayıcı", "uzantı", "mağaza"], fun_fact: "Mağazada yer alan bazı eklentiler tek başlarına milyonlarca aktif kullanıcıya sahiptir." },
    { id: "k2", name: "Arama", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Dünyanın bilgisine açılan kapı.", long_description: "Milyarlarca web sayfasını saniyeler içinde tarayarak aradığınız bilgiye en doğru ve hızlı şekilde ulaşmanızı sağlar.", icon_name: "search", link_url: "https://www.google.com", tags: ["arama", "web", "bilgi"], fun_fact: "1998'deki ilk Google sunucu kasaları Legolardan yapılmıştı." },
    { id: "k6", name: "Haberler", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Özel haber derleyiciniz.", long_description: "Dünyadan ve yerel kaynaklardan haberleri ilgi alanlarınıza göre yapay zeka ile kişiselleştiren medya okuyucu.", icon_name: "article", link_url: "https://news.google.com", tags: ["haber", "gazete", "gündem", "medya"], fun_fact: "Bir olayın farklı haber sitelerinde nasıl yansıtıldığını gösteren özel 'tam kapsam' özelliği sunar." },
    { id: "k10", name: "Finans", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Borsa ve piyasa verileri.", long_description: "Hisse senedi fiyatlarını, kripto paraları, dünya borsalarını ve ekonomi haberlerini anlık olarak takip edebileceğiniz portal.", icon_name: "trending_up", link_url: "https://www.google.com/finance/", tags: ["finans", "borsa", "para", "ekonomi"], fun_fact: "Kendi portföyünüzü oluşturarak yatırımlarınızın değer değişimlerini tek ekranda izleyebilirsiniz." },
    { id: "k11", name: "Alışveriş (Shopping)", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Farklı mağazalardan ürün arayın.", long_description: "Aradığınız bir ürünün farklı mağazalardaki fiyatlarını tek bir ekranda karşılaştırmanızı sağlayan arama motoru özelliği.", icon_name: "shopping_bag", link_url: "https://shopping.google.com/", tags: ["alışveriş", "ürün", "fiyat", "karşılaştırma"], fun_fact: "Fiyat izleme özelliği sayesinde bir ürün indirime girdiğinde anında bildirim alabilirsiniz." },
    { id: "k12", name: "Seyahat", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Tatilinizi planlamaya başlayın.", long_description: "Uçak biletleri, otel rezervasyonları ve gezilecek yerleri tek bir arayüzde birleştirip seyahat planları sunan platform.", icon_name: "luggage", link_url: "https://www.google.com/travel/", tags: ["seyahat", "tatil", "otel", "gezi"], fun_fact: "Gideceğiniz şehri yazdığınızda, oradaki popüler restoranlar ve turistik yerler için size hazır bir günlük plan bile çizer." },
    { id: "k7", name: "Uçuş Arama", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Uçak biletleri ve seyahat planlaması.", long_description: "Yüzlerce havayolu şirketinden uçak bileti fiyatlarını karşılaştırın ve fiyat grafiklerini analiz edin.", icon_name: "flight", link_url: "https://www.google.com/flights", tags: ["uçuş", "bilet", "seyahat", "tatil"], fun_fact: "Sizi gideceğiniz yerin fiyat geçmişi hakkında uyarır ve ucuzlama ihtimalini söyler." },
    { id: "k13", name: "Reklam Merkezi", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Gördüğünüz reklamları siz seçin.", long_description: "Google servislerinde (Arama, YouTube, Keşfet) göreceğiniz reklam türlerini filtrelediğiniz ve kişiselleştirdiğiniz merkez.", icon_name: "tune", link_url: "https://myadcenter.google.com/", tags: ["reklam", "tercih", "gizlilik", "kontrol"], fun_fact: "Buradan 'Hassas konular' ayarını kapatarak istemediğiniz kategorideki (örneğin alkol veya kumar) reklamları tamamen gizleyebilirsiniz." },
    { id: "k9", name: "Arts & Culture", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Sanal müzeler ve sanat galerileri.", long_description: "Dünyanın en prestijli müzelerindeki binlerce sanat eserini yüksek çözünürlükle incelemenizi sağlar.", icon_name: "palette", link_url: "https://artsandculture.google.com/", tags: ["sanat", "müze", "tarih", "kültür"], fun_fact: "Kendi selfie'nizi yükleyerek dünyaca ünlü tablolardaki hangi yüzlere benzediğinizi bulabilirsiniz." },
    { id: "b9", name: "Blogger", pricing: "Ücretsiz & Ücretli", category: "Keşif", short_description: "Ücretsiz blog platformu.", long_description: "Kendi ücretsiz blog sitenizi açıp yazılarınızı dünya ile paylaşmanızı sağlayan efsanevi platform.", icon_name: "edit_document", link_url: "https://www.blogger.com/", tags: ["blog", "yazı", "içerik", "web"], fun_fact: "2003 yılında Google tarafından satın alınmış ve blog kültürünü yaygınlaştırmıştır." },
    { id: "ent1", name: "YouTube", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Dünyanın en büyük video platformu.", long_description: "Kullanıcıların video yüklemesine, izlemesine ve paylaşmasına olanak tanıyan çevrimiçi video platformudur.", icon_name: "play_circle", link_url: "https://www.youtube.com", tags: ["video", "medya", "yayın"], fun_fact: "YouTube'a yüklenen ilk video 'Me at the zoo' (Ben hayvanat bahçesinde) adındadır." },
    { id: "ent11", name: "YouTube TV", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Canlı TV kanalları için yayın servisi.", long_description: "Kablo TV'ye alternatif olarak sunulan, onlarca popüler canlı televizyon ağını internet üzerinden izleyebileceğiniz yayın platformu.", icon_name: "live_tv", link_url: "https://tv.youtube.com/", tags: ["tv", "canlı", "yayın", "televizyon"], fun_fact: "Sınırsız bulut DVR özelliği ile aynı anda yayınlanan onlarca programı kaydedebilirsiniz." },
    { id: "ent2", name: "Play", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Uygulamalar, oyunlar ve dijital içerik mağazası.", long_description: "Android işletim sistemi için resmi uygulama mağazasıdır. Milyonlarca uygulama ve oyun barındırır.", icon_name: "shop", link_url: "https://play.google.com", tags: ["uygulama", "oyun", "mağaza", "android"], fun_fact: "Eskiden Android Market olarak biliniyordu." },
    { id: "ent8", name: "Play Kitaplar", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "E-kitap ve sesli kitap mağazası.", long_description: "Milyonlarca dijital kitabı ve sesli kitabı satın alıp, tüm cihazlarınızda okuyabileceğiniz devasa kütüphane.", icon_name: "menu_book", link_url: "https://play.google.com/store/books", tags: ["kitap", "okuma", "e-kitap", "kütüphane"], fun_fact: "Kitap okurken bilmediğiniz bir kelimenin üzerine basılı tutarak anında sözlük anlamını veya çevirisini görebilirsiniz." },
    { id: "ent9", name: "Play Games", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Android oyun deneyiminizi geliştirin.", long_description: "Başarımlar kazandığınız, skor tablolarında yarıştığınız ve oynadığınız oyunların ilerlemesini buluta kaydeden profil merkezi.", icon_name: "sports_esports", link_url: "https://play.google.com/store/apps/details?id=com.google.android.play.games", tags: ["oyun", "espor", "eğlence", "başarım"], fun_fact: "Artık Android oyunlarınızı bilgisayarınızda (Windows) oynamanızı sağlayan PC Beta sürümü de mevcuttur." },
    { id: "ent10", name: "Play Pass", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Oyunlar ve uygulamalar için abonelik servisi.", long_description: "Aylık tek bir ödeme ile yüzlerce premium oyunu ve uygulamayı reklam veya uygulama içi satın alma olmadan kullanın.", icon_name: "local_play", link_url: "https://play.google.com/about/play-pass/", tags: ["abonelik", "oyun", "premium", "uygulama"], fun_fact: "Bu aboneliği aile grubunuzdaki 5 kişiyle daha paylaşabilirsiniz." },
    { id: "ent3", name: "YouTube Music", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Müzik dinleme ve akış hizmeti.", long_description: "Kullanıcıların türlere ve önerilere göre şarkılara ve müzik videolarına göz atmasını sağlayan müzik platformudur.", icon_name: "music_note", link_url: "https://music.youtube.com", tags: ["müzik", "şarkı", "akış", "dinle"], fun_fact: "Aradığınız şarkının adını bilmiyorsanız, sadece sözlerini yazarak bile bulabilirsiniz." },
    { id: "ent13", name: "Podcasts", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Dünyanın sesli içerikleri tek yerde.", long_description: "Binlerce farklı kategorideki favori radyo ve ses programlarınızı dinleyebileceğiniz klasik podcast uygulaması.", icon_name: "podcasts", link_url: "https://podcasts.google.com/", tags: ["ses", "radyo", "yayın", "dinle"], fun_fact: "Google, Podcast deneyimini zamanla YouTube Music altyapısına entegre etmeye karar vermiştir." },
    { id: "ent4", name: "YouTube Kids", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Çocuklar için güvenli video ortamı.", long_description: "Çocukların kendi başlarına gezinmeleri için tasarlanmış, aile dostu videoların yer aldığı özel YouTube uygulamasıdır.", icon_name: "child_care", link_url: "https://www.youtubekids.com/", tags: ["çocuk", "aile", "video", "güvenli"], fun_fact: "Ebeveynlere çocukların video izleyebileceği süreyi kısıtlayabilen bir zamanlayıcı sunar." },
    { id: "ent5", name: "TV", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Tüm yayın servisleriniz tek bir yerde.", long_description: "Netflix, Disney+ gibi farklı platformlardaki filmleri tek bir akıllı arayüzde toplayarak öneriler sunar.", icon_name: "tv", link_url: "https://tv.google/", tags: ["tv", "film", "dizi", "yayın", "sinema"], fun_fact: "Yapay zeka sayesinde 'Uzaylı filmleri bul' diyerek aboneliklerinizdeki filmleri tarayabilirsiniz." },
    { id: "ent12", name: "TV Streamer", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Yeni nesil eğlence ve akıllı ev merkezi.", long_description: "Chromecast'in yerini alan, daha hızlı işlemciye sahip, 4K HDR yayın cihazı ve akıllı ev (Thread) yönlendiricisi.", icon_name: "router", link_url: "https://store.google.com/product/google_tv_streamer", tags: ["tv", "stream", "cihaz", "medya"], fun_fact: "Televizyon izlerken akıllı ev kameralarınızın görüntüsünü ekranın köşesinde anlık olarak gösterebilir." },
    { id: "ent6", name: "YouTube Studio", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "İçerik üreticileri için kanal yönetimi.", long_description: "YouTube kanalınızı yönetebileceğiniz, videolarınızı analiz edip yorumlara yanıt verebileceğiniz kontrol panelidir.", icon_name: "video_settings", link_url: "https://studio.youtube.com/", tags: ["youtube", "üretici", "kanal", "video"], fun_fact: "Gelirlerinizin detaylı analizini sadece buradan görebilirsiniz." },
    { id: "ent7", name: "Snapseed", pricing: "Ücretsiz & Ücretli", category: "Eğlence", short_description: "Gelişmiş fotoğraf düzenleme aracı.", long_description: "Google tarafından geliştirilen profesyonel seviyede, ancak kullanımı kolay güçlü bir fotoğraf düzenleme mobil uygulaması.", icon_name: "tune", link_url: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed", tags: ["fotoğraf", "düzenleme", "filtre", "kamera"], fun_fact: "Snapseed aslen Nik Software tarafından geliştirildi ve sonrasında Google bu şirketi satın aldı." },

    // --- 10. Deneysel ---
    { id: "exp1", name: "Project Starline", pricing: "Ücretsiz & Ücretli", category: "Deneysel", short_description: "Sihirli bir pencere gibi video görüşme.", long_description: "Fiziksel olarak bir arada olmadığınızda bile karşınızdaki kişiyi 3 boyutlu olarak aynı odadaymış gibi hissetmenizi sağlayan proje.", icon_name: "videocam", link_url: "https://blog.google/technology/research/project-starline/", tags: ["ar", "3d", "iletişim", "gelecek"], fun_fact: "Kişiyi 3 boyutlu taramak için onlarca kamera ve sensör kullanır." },
    { id: "exp2", name: "Quantum AI", pricing: "Ücretsiz & Ücretli", category: "Deneysel", short_description: "Kuantum bilgisayarlar geliştirme laboratuvarı.", long_description: "Evrenin en zor problemlerini çözmek için süper iletken kuantum işlemciler ve yazılım araçları geliştirir.", icon_name: "memory", link_url: "https://quantumai.google/", tags: ["kuantum", "bilgisayar", "araştırma", "fizik"], fun_fact: "Google'ın Sycamore işlemcisi geleneksel bir süper bilgisayarın 10.000 yıl sürecek hesaplamasını saniyeler içinde çözmüştür." },
    { id: "exp3", name: "Labs", pricing: "Ücretsiz & Ücretli", category: "Deneysel", short_description: "Google'ın en yeni deneylerini test edin.", long_description: "Kullanıcıların yapay zeka araçlarını ve projeleri genel kullanıma sunulmadan önce test etmelerine olanak tanır.", icon_name: "science", link_url: "https://labs.google/", tags: ["beta", "deney", "erken erişim", "ai"], fun_fact: "Gmail de dahil olmak üzere Google'ın efsanevi servislerinin çoğu hayatına Labs'ta başlamıştır." },

    // --- 11. İş Ortakları ---
    { id: "partner_slack", name: "Slack", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Ekipler için işbirliği ve mesajlaşma merkezi.", long_description: "Google Workspace ürünleriyle derinden entegre çalışan; Drive dosyalarını paylaşmanızı ve Meet çağrıları başlatmanızı sağlayan platform.", icon_name: "chat", link_url: "https://slack.com", tags: ["mesaj", "iletişim", "ekip"], fun_fact: "Slack içinden /meet komutunu yazarak anında Google Meet başlatabilirsiniz." },
    { id: "partner_github", name: "GitHub", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", is_partner: true, short_description: "Dünyanın en büyük yazılım geliştirme platformu.", long_description: "Google Cloud Build ve Android Studio ile yerleşik entegrasyona sahip olan, kod barındırma ve versiyon kontrol sistemi.", icon_name: "code", link_url: "https://github.com", tags: ["kod", "git", "geliştirici"], fun_fact: "Google, GitHub üzerindeki en çok açık kaynak projeye katkı sağlayan şirketlerden biridir." },
    { id: "partner_salesforce", name: "Salesforce", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Lider müşteri ilişkileri yönetimi (CRM).", long_description: "Google Cloud ve Google Workspace ile doğrudan entegre çalışarak verilerinizi senkronize eden dev CRM platformu.", icon_name: "store", link_url: "https://salesforce.com", tags: ["crm", "satış", "işletme"], fun_fact: "Salesforce, Google ile stratejik bulut ortaklığı sayesinde altyapısının bir kısmını Google Cloud'da barındırmaktadır." },
    { id: "partner_zoom", name: "Zoom", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Popüler video konferans uygulaması.", long_description: "Google Takvim eklentisi sayesinde toplantılarınızı anında planlamanızı ve Gmail üzerinden bağlantı paylaşmanızı sağlar.", icon_name: "videocam", link_url: "https://zoom.us", tags: ["video", "toplantı", "iletişim"], fun_fact: "Google Takvim üzerinde bir etkinlik oluştururken tek tıkla Zoom linki oluşturabilirsiniz." },
    { id: "partner_spotify", name: "Spotify", pricing: "Ücretsiz & Ücretli", category: "Eğlence", is_partner: true, short_description: "Dijital müzik dinleme platformu.", long_description: "Google Asistan, Google Home, Android Auto ve WearOS ile entegre çalışarak sesle komutla müzik çalmanızı sağlar.", icon_name: "music_note", link_url: "https://spotify.com", tags: ["müzik", "ses", "eğlence"], fun_fact: "Android telefonunuzdaki Saat (Alarm) uygulamasında uyanma sesi olarak Spotify'daki herhangi bir şarkıyı seçebilirsiniz." },
    { id: "partner_canva", name: "Canva", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Grafik tasarım platformu.", long_description: "Google Drive ve Fotoğraflar ile entegre çalışarak tasarımlarınıza içerik aktarmanızı sağlar.", icon_name: "palette", link_url: "https://canva.com", tags: ["tasarım", "grafik", "sunum"], fun_fact: "Google Drive'daki dosyalarınızı doğrudan Canva içinde açıp düzenleyebilirsiniz." },
    { id: "partner_miro", name: "Miro", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Çevrimiçi işbirliği panosu.", long_description: "Google Meet entegrasyonu sayesinde toplantı sırasında interaktif beyaz tahta deneyimi sunar.", icon_name: "architecture", link_url: "https://miro.com", tags: ["beyaz tahta", "işbirliği", "planlama"], fun_fact: "Miro, Google Workspace Marketplace'te en çok indirilen işbirliği araçlarından biridir." },
    { id: "partner_figma", name: "Figma", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", is_partner: true, short_description: "Arayüz tasarımı ve prototipleme.", long_description: "Ekiplerin eşzamanlı olarak ürün tasarımı yapmasını sağlayan, bulut tabanlı UI/UX aracı.", icon_name: "design_services", link_url: "https://figma.com", tags: ["tasarım", "ui", "ux"], fun_fact: "Eğitim amaçlı kullanımı sayesinde dünya çapında birçok öğrenci Figma'yı ücretsiz kullanmaktadır." },
    { id: "partner_asana", name: "Asana", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Görev ve proje yönetimi.", long_description: "Google Chat ve Gmail eklentileriyle görevlerinizi doğrudan Google uygulamalarından yönetmenizi sağlar.", icon_name: "task_alt", link_url: "https://asana.com", tags: ["proje", "görev", "yönetim"], fun_fact: "Gmail'deki bir e-postayı tek tıklamayla Asana görevine dönüştürebilirsiniz." },
    { id: "partner_jira", name: "Jira", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", is_partner: true, short_description: "Yazılım geliştirme ve sorun takibi.", long_description: "Atlassian'ın popüler çevik proje yönetim aracı, Google Chat ve Workspace ile sorunsuz entegre çalışır.", icon_name: "fact_check", link_url: "https://atlassian.com/software/jira", tags: ["agile", "yazılım", "takip"], fun_fact: "Jira for Google Chat uygulaması ile bildirimleri doğrudan chat üzerinden alabilirsiniz." },
    { id: "partner_tableau", name: "Tableau", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "İş zekası ve veri görselleştirme.", long_description: "Salesforce bünyesindeki Tableau, Google BigQuery ve Sheets'ten doğrudan veri çekerek görsel analizler oluşturur.", icon_name: "bar_chart", link_url: "https://tableau.com", tags: ["veri", "analiz", "grafik"], fun_fact: "Google Cloud veritabanlarındaki devasa verileri canlı olarak sorgulayabilir." },
    { id: "partner_hubspot", name: "HubSpot", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Inbound pazarlama ve CRM.", long_description: "Gmail uzantısı ve Google Takvim senkronizasyonu ile satış süreçlerini hızlandıran platform.", icon_name: "hub", link_url: "https://hubspot.com", tags: ["crm", "pazarlama", "satış"], fun_fact: "Gmail içinden müşterilerin email açma oranlarını HubSpot ile takip edebilirsiniz." },
    { id: "partner_zapier", name: "Zapier", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Uygulamalar arası otomasyon.", long_description: "Google servisleri de dahil olmak üzere binlerce uygulamayı birbirine bağlayan iş akışı motoru.", icon_name: "bolt", link_url: "https://zapier.com", tags: ["otomasyon", "entegrasyon", "bağlantı"], fun_fact: "Zapier ile Google Formlar'a gelen bir yanıtı anında Google Chat mesajına dönüştürebilirsiniz." },
    { id: "partner_zendesk", name: "Zendesk", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Müşteri hizmetleri ve destek.", long_description: "Müşteri taleplerini yöneten, Google Workspace ile güçlü entegrasyona sahip destek platformu.", icon_name: "support_agent", link_url: "https://zendesk.com", tags: ["destek", "müşteri", "bilet"], fun_fact: "Google Chat üzerinden doğrudan Zendesk biletleri (ticket) oluşturabilir ve güncelleyebilirsiniz." },
    { id: "partner_workday", name: "Workday", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Kurumsal finans ve İK yazılımı.", long_description: "Büyük işletmelerin insan kaynakları ve finans süreçlerini yöneten, Google Workspace ile entegre bulut platformu.", icon_name: "work", link_url: "https://workday.com", tags: ["ik", "finans", "kurumsal"], fun_fact: "Google Sheets üzerinden Workday verilerini doğrudan raporlayabilirsiniz." },
    { id: "partner_zoho", name: "Zoho", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "İşletim sistemi ve CRM.", long_description: "Zoho CRM, Desk ve Projects uygulamaları Google Chat ve Gmail ile doğrudan bağlantılıdır.", icon_name: "domain", link_url: "https://zoho.com", tags: ["işletme", "crm", "üretkenlik"], fun_fact: "Zoho, iş dünyası için 50'den fazla farklı bulut uygulaması sunar." },
    { id: "partner_pagerduty", name: "PagerDuty", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", is_partner: true, short_description: "Olay müdahale yönetimi.", long_description: "Google Cloud monitoring alarmlarını anında doğru kişilere ileten nöbet ve uyarı sistemi.", icon_name: "notifications_active", link_url: "https://pagerduty.com", tags: ["devops", "uyarı", "sistem"], fun_fact: "Sisteminiz çöktüğünde PagerDuty, belirlenen sıraya göre mühendisleri telefonla arayarak uyarabilir." },
    { id: "partner_mailchimp", name: "Mailchimp", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "E-posta pazarlama platformu.", long_description: "Intuit bünyesindeki Mailchimp, Google Workspace ile müşteri iletişimini kolaylaştıran entegrasyonlar sunar.", icon_name: "mail", link_url: "https://mailchimp.com", tags: ["pazarlama", "eposta", "kampanya"], fun_fact: "Küçük işletmeler için en popüler e-posta bülteni yönetim araçlarından biridir." },
    { id: "partner_lucidchart", name: "Lucidchart", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Akıllı diyagram uygulaması.", long_description: "Google Dokümanlar, E-Tablolar ve Slaytlar içine doğrudan eklenebilen güçlü akış şeması çizim aracı.", icon_name: "schema", link_url: "https://lucidchart.com", tags: ["diyagram", "çizim", "şema"], fun_fact: "Lucidchart ile çizdiğiniz bir diyagramı, eklentisi sayesinde tek tıkla Google Slaytlar sunumunuza ekleyebilirsiniz." },
    { id: "partner_notion", name: "Notion", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Hepsi bir arada çalışma alanı.", long_description: "Notlar, dokümanlar, wiki'ler ve projeleri tek bir platformda birleştiren üretkenlik uygulaması.", icon_name: "edit_document", link_url: "https://notion.so", tags: ["not", "proje", "doküman"], fun_fact: "Notion sayfalarınıza Google Drive dosyalarını doğrudan gömebilirsiniz." },
    { id: "partner_whatsapp", name: "WhatsApp", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Popüler mesajlaşma uygulaması.", long_description: "WhatsApp Notifications entegrasyonu sayesinde sistem bildirimlerini anlık olarak alabilirsiniz.", icon_name: "chat", link_url: "https://whatsapp.com", tags: ["mesaj", "bildirim", "iletişim"], fun_fact: "WhatsApp Business API ile kurumsal bildirimleri doğrudan müşterilerinize gönderebilirsiniz." },
    { id: "partner_airtable", name: "Airtable", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Esnek veritabanı ve e-tablo platformu.", long_description: "Google E-Tablolar'ın basitliği ile ilişkisel veritabanının gücünü birleştiren işbirliği aracı.", icon_name: "table_view", link_url: "https://airtable.com", tags: ["veritabanı", "tablo", "işbirliği"], fun_fact: "Airtable, her hücreye dosya veya onay kutusu gibi zengin veri tipleri eklemenizi sağlar." },
    { id: "partner_outlook", name: "Microsoft Outlook", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "E-posta ve takvim uygulaması.", long_description: "Microsoft'un popüler e-posta istemcisi; Google Workspace ile senkronize çalışabilir.", icon_name: "mail", link_url: "https://outlook.com", tags: ["eposta", "takvim", "microsoft"], fun_fact: "Outlook, Google Takvim ile çift yönlü senkronizasyon desteği sunar." },
    { id: "partner_clickup", name: "ClickUp", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Kapsamlı proje yönetim aracı.", long_description: "Tüm işleri tek bir yerde toplayan, görev takibi ve doküman yönetim platformu.", icon_name: "check_circle", link_url: "https://clickup.com", tags: ["proje", "görev", "üretkenlik"], fun_fact: "ClickUp, Google Takvim ile anında iki yönlü senkronizasyon kurabilir." },
    { id: "partner_monday", name: "monday.com", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "İşletim sistemi (Work OS).", long_description: "Ekiplerin süreçleri oluşturmasına, yönetmesine ve görselleştirmesine olanak tanıyan araç.", icon_name: "calendar_view_week", link_url: "https://monday.com", tags: ["işletme", "yönetim", "proje"], fun_fact: "monday.com, Gmail üzerinden doğrudan görev oluşturmayı destekler." },
    { id: "partner_trello", name: "Trello", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Kanban proje yönetim uygulaması.", long_description: "Kartlar ve panolar aracılığıyla görsel olarak iş takibi yapmanızı sağlayan araç.", icon_name: "view_kanban", link_url: "https://trello.com", tags: ["kanban", "görev", "proje"], fun_fact: "Trello kartlarına doğrudan Google Drive dosyalarını ekleyebilirsiniz." },
    { id: "partner_excel", name: "Microsoft Excel", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Elektronik tablo programı.", long_description: "Gelişmiş veri analizi ve makrolar sunan Microsoft e-tablo uygulaması.", icon_name: "grid_on", link_url: "https://office.com", tags: ["tablo", "veri", "microsoft"], fun_fact: "Google E-Tablolar, Excel (.xlsx) dosyalarını doğrudan tarayıcı içinde düzenlemenizi sağlar." },
    { id: "partner_chatgpt", name: "ChatGPT (OpenAI)", pricing: "Ücretsiz & Ücretli", category: "Yapay Zeka", is_partner: true, short_description: "Gelişmiş yapay zeka botu.", long_description: "OpenAI tarafından geliştirilen, doğal dil işleme odaklı popüler yapay zeka asistanı.", icon_name: "smart_toy", link_url: "https://chatgpt.com", tags: ["yapay zeka", "sohbet", "ai"], fun_fact: "ChatGPT, birçok Google eklentisi aracılığıyla Dokümanlar veya E-Tablolar'da kullanılabilir." },
    { id: "partner_discord", name: "Discord", pricing: "Ücretsiz & Ücretli", category: "Eğlence", is_partner: true, short_description: "İletişim platformu.", long_description: "Özellikle topluluklar için tasarlanmış geniş çaplı mesajlaşma ve sesli sohbet uygulaması.", icon_name: "headphones", link_url: "https://discord.com", tags: ["sohbet", "ses", "topluluk"], fun_fact: "Discord web kancaları, Google Formlar'dan anlık veri çekmek için kullanılabilir." },
    { id: "partner_typeform", name: "Typeform", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "İnteraktif anket oluşturucu.", long_description: "Diyalog tabanlı tasarımıyla kullanıcıların ilgisini çeken dinamik veri toplama aracı.", icon_name: "dynamic_form", link_url: "https://typeform.com", tags: ["form", "anket", "veri"], fun_fact: "Typeform yanıtları anında Google E-Tablolar'a aktarılabilir." },
    { id: "partner_jotform", name: "Jotform", pricing: "Ücretsiz & Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Çevrimiçi form oluşturucu.", long_description: "Kolay kullanımı ve ödeme altyapısıyla öne çıkan güçlü form tasarlama uygulaması.", icon_name: "list_alt", link_url: "https://jotform.com", tags: ["form", "ödeme", "araç"], fun_fact: "Jotform, yanıtları PDF olarak doğrudan Google Drive'a kaydedebilir." },
    { id: "partner_activecampaign", name: "ActiveCampaign", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Müşteri deneyimi otomasyonu.", long_description: "E-posta pazarlama, CRM ve pazarlama otomasyonunu birleştiren platform.", icon_name: "campaign", link_url: "https://activecampaign.com", tags: ["pazarlama", "otomasyon", "crm"], fun_fact: "ActiveCampaign, Google Analytics ile derinlemesine kampanya takibi yapabilir." },
    { id: "partner_todo", name: "Microsoft To Do", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Kişisel görev aracı.", long_description: "Günlük işleri listelemek ve takip etmek için sade bir görev uygulaması.", icon_name: "checklist", link_url: "https://todo.microsoft.com", tags: ["görev", "liste", "microsoft"], fun_fact: "Wunderlist'in altyapısı kullanılarak geliştirilmiştir." },
    { id: "partner_tldv", name: "tl;dv", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Toplantı kaydedici.", long_description: "Google Meet çağrılarını kaydeden ve yapay zeka ile özet çıkaran eklenti.", icon_name: "video_camera_front", link_url: "https://tldv.io", tags: ["toplantı", "video", "ai"], fun_fact: "tl;dv, konuşmaları deşifre edip belirli anları vurgulamanızı sağlar." },
    { id: "partner_motion", name: "Motion", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Yapay zeka takvimi.", long_description: "Görevlerinizi ve takviminizi yapay zeka ile otomatik olarak planlayan üretkenlik aracı.", icon_name: "calendar_month", link_url: "https://usemotion.com", tags: ["takvim", "planlama", "ai"], fun_fact: "Motion, takviminizdeki boşluklara en acil görevleri otomatik yerleştirir." },
    { id: "partner_calendly", name: "Calendly", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Randevu planlama platformu.", long_description: "Toplantı planlamayı kolaylaştıran, Google Takvim ile doğrudan senkronize çalışan uygulama.", icon_name: "event_available", link_url: "https://calendly.com", tags: ["randevu", "toplantı", "takvim"], fun_fact: "Calendly sayesinde e-posta trafiğine girmeden doğrudan Google Takviminize randevu yazdırabilirsiniz." },
    { id: "partner_telegram", name: "Telegram", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Güvenli mesajlaşma.", long_description: "Hızlı, bulut tabanlı, bot ekosistemiyle öne çıkan popüler iletişim platformu.", icon_name: "send", link_url: "https://telegram.org", tags: ["mesaj", "güvenlik", "bot"], fun_fact: "Telegram botları Google Sheets üzerinden basit veritabanı okumaları yapabilir." },
    { id: "partner_todoist", name: "Todoist", pricing: "Ücretsiz & Ücretli", category: "Günlük Kullanım", is_partner: true, short_description: "Görev düzenleyici.", long_description: "Hem kişisel hem de ekip görevlerini organize etmeyi sağlayan güçlü todo uygulaması.", icon_name: "format_list_bulleted", link_url: "https://todoist.com", tags: ["görev", "organizer", "üretkenlik"], fun_fact: "Todoist eklentisi ile Gmail üzerinden e-postaları anında görevlere çevirebilirsiniz." },
    { id: "partner_pipedrive", name: "Pipedrive", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Satış odaklı CRM.", long_description: "Satış süreçlerini boru hattı mantığıyla görselleştiren müşteri ilişkileri yönetimi.", icon_name: "trending_up", link_url: "https://pipedrive.com", tags: ["satış", "crm", "işletme"], fun_fact: "Pipedrive, Google Kişiler ve Takvim ile otomatik çift yönlü senkronizasyon sağlar." },
    { id: "partner_webflow", name: "Webflow", pricing: "Ücretsiz & Ücretli", category: "Geliştirici Araçları", is_partner: true, short_description: "No-code web tasarım.", long_description: "Görsel bir arayüzle profesyonel, duyarlı web siteleri geliştirmeyi sağlayan platform.", icon_name: "web", link_url: "https://webflow.com", tags: ["web", "tasarım", "nocode"], fun_fact: "Webflow ile kod yazmadan Google Haritalar gibi dış servisleri sitenize kolayca entegre edebilirsiniz." },
    { id: "partner_leadconnector", name: "LeadConnector", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "Müşteri yönetim sistemi.", long_description: "Pazarlama ajansları ve işletmeler için kapsamlı iletişim ve müşteri edinim aracı.", icon_name: "connect_without_contact", link_url: "https://leadconnector.com", tags: ["satış", "müşteri", "iletişim"], fun_fact: "LeadConnector ile Google Benim İşletmem incelemelerini doğrudan yanıtlayabilirsiniz." },
    { id: "partner_shopify", name: "Shopify", pricing: "Ücretli", category: "İş & Pazarlama", is_partner: true, short_description: "E-ticaret platformu.", long_description: "Kullanıcıların kendi çevrimiçi mağazalarını kurup ürünlerini satmalarını sağlayan altyapı.", icon_name: "shopping_cart", link_url: "https://shopify.com", tags: ["eticaret", "satış", "mağaza"], fun_fact: "Shopify mağazaları, Google Merchant Center entegrasyonuyla ürünleri Google Alışveriş'te kolayca listeleyebilir." }
];




const scraped_logos = {
    "Tüm Google Ürünleri": "https://www.gstatic.com/marketing-cms/assets/images/33/52/d31eb4894f69969b24d075e0d33c/favicon.png=s180",
    "Fotoğraflar": "https://storage.googleapis.com/gweb-mobius-cdn/photos/uploads/383ce0413fa82bcaf6de49fd7997678b21b9762e.svg",
    "Files by Google": "https://files.google.com/static/images/favicon-f3418a443e7d841097c714d69ec4bcb8.ico",
    "Cüzdan (Pay)": "https://www.gstatic.com/marketing-cms/assets/images/8b/0c/118c647e4cf49961b7379a1b99e7/favicon.png=s180",
    "Çeviri": "https://www.gstatic.com/translate/favicon.ico",
    "Earth": "https://www.gstatic.com/earth/00-favicon.ico",
    "One": "https://one.google.com/about/public/favicon-32x32.png",
    "Haritalar": "https://www.google.com/images/branding/product/ico/web_maps_icon_32dp.ico",
    "Street View": "https://www.gstatic.com/marketing-cms/assets/images/85/4e/78f4da1447078bec6fb4567c81aa/sv-fav.ico",
    "Haritalar Platformu": "https://mapsplatform.google.com/static/images/logo_maps_2025_color_1x_web_512dp.png",
    "Read Along": "https://www.gstatic.com/seekh/web/favicon/favicon_64.png",
    "Fit": "https://www.google.com/fit/static/images/fav/touch-icon-iphone.png",
    "Dijital Denge": "https://www.gstatic.com/marketing-cms/assets/images/33/52/d31eb4894f69969b24d075e0d33c/favicon.png=s180",
    "CS First": "https://csfirst.withgoogle.com/favicon.png",
    "Akademik": "https://scholar.google.com/favicon.ico",
    "Waymo": "https://waymo.com/favicon.png",
    "Fitbit": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Asistan": "https://assistant.google.com/static/img/favicon-180x180.png?cache=09547a0",
    "Kaggle": "https://www.kaggle.com/static/images/logos/kaggle-logo-opengraph.png",
    "AI Studio": "https://www.gstatic.com/images/branding/productlogos/ai_studio/v1/web-32dp/logo_ai_studio_color_1x_web_32dp.png",
    "TensorFlow": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/tensorflow/images/apple-touch-icon-180x180.png",
    "Teachable Machine": "https://teachablemachine.withgoogle.com/assets/img/favicon.png",
    "Flutter": "https://flutter.dev/assets/favicon.26abda3864324ef4ac32dd0d3ce28907.png",
    "Imagen": "https://research.google/static/images/favicon-6da5620880159634213e197fafca1dde0272153be3e4590818533fab8d040770.ico",
    "Go (Golang)": "https://go.dev/images/favicon-gopher-plain.png",
    "Material Design": "https://m3.material.io/static/assets/m3-favicon-apple-touch.png",
    "Identity Platform": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/developers/images/touchicon-180-new.png",
    "Geliştiriciler İçin Google": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/developers/images/touchicon-180-new.png",
    "Firebase": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/firebase/images/touchicon-180.png",
    "Web / Chrome Dev": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/web/images/touchicon-180.png",
    "Angular": "https://angular.io/assets/icons/apple-touch-icon.png",
    "Android Studio": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/android/images/touchicon-180.png",
    "Puppeteer": "https://pptr.dev/img/favicon.ico",
    "Play Protect": "https://support.google.com/favicon.png",
    "AppSheet": "https://www.gstatic.com/marketing-cms/assets/images/e8/b4/782aa43749ad83ac77c819166d5e/favicon.png=s180",
    "AdSense": "https://www.gstatic.com/images/branding/googleg_gradient/2x/googleg_gradient_standard_192dp.png",
    "Search Console": "https://www.gstatic.com/search-console/scfe/favicon.png",
    "İşletme Profili": "https://business.google.com/static/images/google-favicon-180.png",
    "Ads": "https://business.google.com/static/images/google-favicon-180.png",
    "Trendler": "https://www.gstatic.com/trends/favicon.ico",
    "Apps Script": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/developers/images/touchicon-180-new.png",
    "Looker Studio": "https://www.gstatic.com/analytics-lego/svg/favicon_data_studio.png",
    "Android Enterprise": "https://www.gstatic.com/marketing-cms/assets/images/65/32/2a1363494cb69d50cda684ffbd4a/favicon-android.png=s180",
    "Marketing Platform": "https://www.gstatic.com/images/branding/googleg_gradient/2x/googleg_gradient_standard_192dp.png",
    "Etkileşimli Medya Reklamları (IMA)": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/developers/images/touchicon-180-new.png",
    "Chrome Enterprise": "https://chromeenterprise.google/static/favicon.ico",
    "Chromebook ve ChromeOS": "https://www.google.com/chromebook/static/favicon.ico",
    "Pixel Buds": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Workspace Marketplace": "https://ssl.gstatic.com/apps/additnow/images/logo_marketplace_1x_48dp.png",
    "Pixel": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Pixel Tablet": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Pixel Watch": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Manufacturer Center": "https://business.google.com/static/images/google-favicon-180.png",
    "Merchant Center": "https://business.google.com/static/images/google-favicon-180.png",
    "Wear OS by Google": "https://www.gstatic.com/marketing-cms/assets/images/3d/de/d03486df469caecfb06a4eb2c4d9/favicon-180x180.png=s180",
    "Android TV": "https://www.gstatic.com/marketing-cms/assets/images/5e/e1/a13ba8444729957f4dde06d24d2f/favicon-icon-android-tv.png=s180",
    "Cast": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Nest": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Cihaz Takip Merkezi (Bul)": "https://www.gstatic.com/images/branding/productlogos/find_my_device/v9/web-96dp/logo_find_my_device_color_2x_web_96dp.png",
    "Chrome": "https://www.google.com/chrome/static/images/favicons/apple-icon-57x57.png",
    "Haberler": "https://www.gstatic.com/gnews/logo/google_news_192.png",
    "Home": "https://home.google.com/static/icons/favicon.ico?cache=2d8c4c1",
    "Finans": "https://www.gstatic.com/finance/favicon/favicon.png",
    "Fi Wireless": "https://www.gstatic.com/fi/web/fi_logo_v1.png",
    "YouTube Kids": "https://www.gstatic.com/ytkids/web/favicons/ytkids_favicon_2.ico",
    "YouTube Music": "https://music.youtube.com/img/favicon_96.png",
    "YouTube": "https://www.youtube.com/s/desktop/0084d708/img/favicon_96x96.png",
    "Podcasts": "https://music.youtube.com/img/favicon_96.png",
    "Play Kitaplar": "https://www.gstatic.com/android/market_images/web/favicon_v3.ico",
    "Seyahat": "https://www.gstatic.com/travel-trips-fe/travel_logo_32.png",
    "Arts & Culture": "https://www.gstatic.com/culturalinstitute/stella/apple-touch-icon-180x180-v1.png",
    "Play Pass": "https://www.gstatic.com/android/market_images/web/favicon_v3.ico",
    "Play": "https://www.gstatic.com/android/market_images/web/favicon_v3.ico",
    "Blogger": "favicon/apple-touch-icon-57x57.png",
    "YouTube TV": "https://www.youtube.com/yts/img/favicon_96-vflW9Ec0w.png",
    "Labs": "https://labs.google/assets/icons/apple-touch-icon.png",
    "TV Streamer": "https://www.gstatic.com/store/images/favicons/favicon_gstore_96px_new.png",
    "Quantum AI": "https://www.gstatic.com/devrel-devsite/prod/vfaab1c846319b03545a380628f94a5f2242cc1b4a1f651e46c0205139cef731f/quantum/images/touchicon-180.png",
    "Project Starline": "https://blog.google/static/blogv2/images/apple-touch-icon.png?version=pr20260729-1718"
};

const manual_svgs = {
"Arama": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Hesap": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Gmail": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    "Drive": "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    "Dokümanlar": "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg",
    "E-Tablolar": "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    "Slaytlar": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg",
    "Formlar": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Forms_2020_Logo.svg",
    "Takvim": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
    "Meet": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
    "Sohbet (Chat)": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Chat_icon_%282020%29.svg",
    "Mesajlar": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Messages_logo_%282022%29.svg",
    "Kişiler": "https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg",
    "Fotoğraflar": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Google_Photos_icon_%282020%29.svg",
    "Keep": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg",
    "Çeviri": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg",
    "One": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Google_One_logo.svg",
    "Cüzdan (Pay)": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Pay_Logo.svg",
    "Haritalar": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon_%282020%29.svg",
    "Earth": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Google_Earth_icon_%282020%29.svg",
    "Waze": "https://upload.wikimedia.org/wikipedia/commons/8/87/Waze_logo_2020.svg",
    "Classroom": "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.svg",
    "Fit": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_Fit_icon_%282018%29.svg",
    "Fitbit": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Fitbit_logo.svg",
    "Asistan": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Assistant_logo.svg",
    "Gemini": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    "Antigravity IDE": "https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepMind_logo.svg",
    "AI Studio": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    "Lens": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png",
    "Cloud": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "Firebase": "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    "Flutter": "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    "Go (Golang)": "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    "Angular": "https://angular.io/assets/images/logos/angular/angular.svg",
    "Ads": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
    "Analytics": "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
    "Workspace": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
    "AdSense": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Trendler": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "AdMob": "https://upload.wikimedia.org/wikipedia/commons/a/ab/AdMob_logo.svg",
    "Chrome": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    "Haberler": "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_News_icon.svg",
    "Seyahat": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Uçuş Arama": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Blogger": "https://upload.wikimedia.org/wikipedia/commons/3/31/Blogger.svg",
    "YouTube": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    "Play": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Google_Play_2022_icon.svg",
    "Authenticator": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Authenticator_for_Android_icon.svg",
    "Gboard": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Gboard_icon.svg",
    "Snapseed": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Snapseed_icon.png",
    "Voice": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Google_Voice_icon_%282020%29.svg",
    "Play Games": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Google_Play_Games_icon_%282023%29.svg",
    "Play Kitaplar": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Play_Books_icon_%282023%29.svg",
    "Play Pass": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Google_Play_Pass_icon_%282022%29.svg",
    "Play Protect": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Google_Play_Protect_icon_%282023%29.svg",
    "YouTube TV": "https://upload.wikimedia.org/wikipedia/commons/f/f7/YouTube_TV_Logo.svg",
    "YouTube Music": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg",
    "YouTube Kids": "https://upload.wikimedia.org/wikipedia/commons/2/23/YouTube_Kids_icon_%282020%29.svg",
    "YouTube Studio": "https://upload.wikimedia.org/wikipedia/commons/0/05/YouTube_Studio_icon_%282020%29.svg",
    "Chrome Web Mağazası": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    "Android Auto": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Android_Auto_icon_%282019%29.svg",
    "Android TV": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Android_TV_logo.svg",
    "Android Enterprise": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Android_Enterprise_logo.svg",
    "Android Studio": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Android_Studio_icon_%282023%29.svg",
    "Chrome Enterprise": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    "Etiket Yöneticisi (Tag Manager)": "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Tag_Manager_Logo.svg",
    "Looker Studio": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Looker_Studio_logo.svg",
    "Kaggle": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png",
    "TensorFlow": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    "Kubernetes (K8s)": "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    "DeepMind": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Waymo": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Waymo_logo_2.svg",
    "Pixel": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Pixel Buds": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Pixel Tablet": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Pixel Watch": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Android": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
    "Wear OS by Google": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Wear_OS_logo_2023.svg",

    "Play Console": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Google_Play_Console_logo.svg",
    "Akademik (Scholar)": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Google_Scholar_logo_2015.svg",
    "Geliştiriciler İçin Google": "https://upload.wikimedia.org/wikipedia/commons/9/90/Google_Developers_logo.svg",
    "Arts & Culture": "https://upload.wikimedia.org/wikipedia/commons/4/43/Google_Arts_%26_Culture_logo.svg",
    "Google Fi": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Google_Fi_logo.svg",
    "Google Fiber": "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Fiber_logo.svg",
    "Dialogflow": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Dialogflow_logo.svg",
    "Data Studio (Looker)": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Looker_Studio_logo.svg",
    "Gboard": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Gboard_icon.svg",
    "Google TV": "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_TV_logo.svg",
    "Find My Device": "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Find_My_Device_icon.svg",
    "Google Tasks": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Tasks_2021_icon.svg",
    "Google News": "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_News_icon.svg",
    "NotebookLM": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Search Console": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",

    "Google Colab": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
    "Project IDX": "https://idx.dev/images/favicon.ico",
    "Antigravity IDE": "https://storage.googleapis.com/gdm-deepmind-com-prod-public/icons/google_deepmind_2x_96dp.png",
    "Google Vids": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Dataform": "https://www.gstatic.com/cgc/super_cloud_gradient.png",

    "Cloud Workstations": "https://www.gstatic.com/cgc/super_cloud_gradient.png",
    "Cloud Shell Editor": "https://www.gstatic.com/cgc/super_cloud_gradient.png",
    "Google Web Designer": "https://upload.wikimedia.org/wikipedia/commons/2/23/Google_Web_Designer_icon.png",
    "Blockly": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Blockly_logo.svg",

    "Chrome DevTools": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    "Kaggle": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png",
    "Cloud Code": "https://www.gstatic.com/cgc/super_cloud_gradient.png",

    "Earth Engine Code Editor": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Google_Earth_icon.svg",
    "Bazel": "https://upload.wikimedia.org/wikipedia/commons/6/66/Bazel_logo.svg",
    "Gerrit": "https://upload.wikimedia.org/wikipedia/commons/5/52/Gerrit_icon.svg",
    "Lit": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Lit_Logo.svg",
    "Puppeteer": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "ARCore": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "MediaPipe": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",

    "Model Viewer": "https://www.gstatic.com/cgc/super_cloud_gradient.png",
    "Filament": "https://www.gstatic.com/cgc/super_cloud_gradient.png",
    "Draco 3D": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",

    "Skia": "https://upload.wikimedia.org/wikipedia/commons/7/77/Skia_logo.svg",
    "V8 Engine": "https://upload.wikimedia.org/wikipedia/commons/3/3f/V8_JavaScript_engine_logo_2.svg",
    "Google Web Toolkit": "https://upload.wikimedia.org/wikipedia/commons/4/4b/GWT_logo.png",
    "Seurat": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Resonance Audio": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Google Blocks": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Closure Compiler": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Slack": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    "GitHub": "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    "Salesforce": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    "Zoom": "https://upload.wikimedia.org/wikipedia/commons/2/22/Zoom_Logo.svg",
    "Spotify": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    "Canva": "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    "Miro": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Miro_logo.svg",
    "Figma": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "Asana": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg",
    "Jira": "https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg",
    "Tableau": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.svg",
    "HubSpot": "https://upload.wikimedia.org/wikipedia/commons/6/6f/HubSpot_Logo.svg",
    "Zapier": "https://upload.wikimedia.org/wikipedia/commons/9/91/Zapier_logo.svg",
    "Zendesk": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zendesk_logo.svg",
    "Workday": "https://upload.wikimedia.org/wikipedia/commons/5/51/Workday_logo.svg",
    "Zoho": "https://upload.wikimedia.org/wikipedia/commons/6/62/Zoho_logo.svg",
    "PagerDuty": "https://upload.wikimedia.org/wikipedia/commons/6/6f/PagerDuty_logo.svg",
    "Mailchimp": "https://upload.wikimedia.org/wikipedia/commons/2/29/Mailchimp_Logo.svg",
    "Lucidchart": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Lucidchart_logo.svg",
    "Notion": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    "WhatsApp": "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    "Airtable": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
    "Microsoft Outlook": "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg",
    "ClickUp": "https://upload.wikimedia.org/wikipedia/commons/f/fe/ClickUp_Logo.svg",
    "monday.com": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Monday_logo.svg",
    "Trello": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg",
    "Microsoft Excel": "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    "ChatGPT (OpenAI)": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    "Discord": "https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg",
    "Typeform": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Typeform_logo.svg",
    "Jotform": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "ActiveCampaign": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Microsoft To Do": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Microsoft_To-Do_icon.svg",
    "tl;dv": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Motion": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Calendly": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Telegram": "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    "Todoist": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Todoist_logo.svg",
    "Pipedrive": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Webflow": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "LeadConnector": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    "Shopify": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
    
};
const custom_logos = Object.assign({}, scraped_logos, manual_svgs); // Manuel SVG oncelikli
// --- DURUM YÖNETİMİ (State) ---
let arama_metni = '';
let aktif_kategori = 'Tümü';
let aktif_gorunum = localStorage.getItem('gorunum') || 'grid'; // Varsayılan görünüm localStorage'dan alınır

// --- DOM SEÇİCİLERİ ---
const el_kategori_listesi = document.getElementById('kategori_listesi');
const el_mobil_kategori_listesi = document.getElementById('mobil_kategori_listesi');
const el_urunler_grid = document.getElementById('urunler_grid');
const el_aktif_kategori_baslik = document.getElementById('aktif_kategori_baslik');
const el_urun_sayisi_etiketler = document.querySelectorAll('.urun_sayisi_etiket');
const el_bos_durum = document.getElementById('bos_durum');
const el_arama_kutusu = document.getElementById('arama_kutusu');
const el_mobil_arama_kutusu = document.getElementById('mobil_arama_kutusu');
const btn_arama_temizle = document.getElementById('btn_arama_temizle');
const btn_mobil_arama_temizle = document.getElementById('btn_mobil_arama_temizle');
const btn_temizle = document.getElementById('btn_temizle');
const btn_tema_degistir = document.getElementById('btn_tema_degistir');

// Mobil Menü Seçicileri
const btn_mobil_menu = document.getElementById('btn_mobil_menu');
const btn_mobil_kapat = document.getElementById('btn_mobil_kapat');
const btn_mobil_arama = document.getElementById('btn_mobil_arama');
const el_mobil_menu_icerik = document.getElementById('mobil_menu_icerik');
const el_mobil_menu_overlay = document.getElementById('mobil_menu_overlay');
const el_mobil_arama_alani = document.getElementById('mobil_arama_alani');

// Modal Seçicileri
const el_urun_modali = document.getElementById('urun_modali');
const el_modal_arkaplan = document.getElementById('modal_arkaplan');
const btn_modal_kapat = document.getElementById('btn_modal_kapat');
const el_modal_ikon = document.getElementById('modal_ikon');
const el_modal_baslik = document.getElementById('modal_baslik');
const el_modal_kategori = document.getElementById('modal_kategori');
const el_modal_aciklama = document.getElementById('modal_aciklama');
const el_modal_bilgi = document.getElementById('modal_bilgi');
const el_modal_link = document.getElementById('modal_link');

// --- FONKSİYONLAR ---

// 1. Kategorileri Çıkar ve Ekrana Bas
function kategorileri_yukle() {
    // Benzersiz kategorileri bul (Ayrıca sıralamayı garantiye alabiliriz)
    const kategoriler = [
        "Tümü", 
        "Deneysel",
        "Donanım & OS",
        "Eğitim & Araştırma",
        "Eğlence",
        "Geliştirici Araçları",
        "Google Hakkında",
        "Günlük Kullanım",
        "Harita & Konum",
        "İş & Pazarlama",
        "İş Ortakları",
        "Keşif",
        "Sağlık & Yaşam",
        "Yapay Zeka"
    ];
    
    // Sadece mevcut veri setindeki kategorileri filtrele ve "Tümü" nü başa ekle
    const veri_kategorileri = [...new Set(urunler_verisi.map(urun => urun.category))];
    if (urunler_verisi.some(u => u.is_partner)) veri_kategorileri.push("İş Ortakları");
    const nihai_kategoriler = kategoriler.filter(k => k === "Tümü" || veri_kategorileri.includes(k));

    // Sidebar ve Mobil menüyü temizle
    el_kategori_listesi.innerHTML = "";
    el_mobil_kategori_listesi.innerHTML = "";

    nihai_kategoriler.forEach(kategori => {
        const isSelected = kategori === aktif_kategori;
        const aktifClass = isSelected 
            ? "bg-google-blue/10 text-google-blue font-semibold border-r-4 border-google-blue" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100 border-r-4 border-transparent";
        
        // Ikon belirleme
        let ikonStr = "category";
        if(kategori === "Tümü") ikonStr = "grid_view";
        if(kategori === "Google Hakkında") ikonStr = "info";
        if(kategori === "Günlük Kullanım") ikonStr = "work";
        if(kategori === "Harita & Konum") ikonStr = "map";
        if(kategori === "Eğitim & Araştırma") ikonStr = "school";
        if(kategori === "Sağlık & Yaşam") ikonStr = "health_and_safety";
        if(kategori === "Donanım & OS") ikonStr = "devices";
        if(kategori === "Geliştirici Araçları") ikonStr = "code";
        if(kategori === "İş & Pazarlama") ikonStr = "storefront";
        if(kategori === "Yapay Zeka") ikonStr = "psychology";
        if(kategori === "Keşif") ikonStr = "explore";
        if(kategori === "Eğlence") ikonStr = "celebration";
        if(kategori === "Deneysel") ikonStr = "science";
        if(kategori === "İş Ortakları") ikonStr = "handshake";

        const html = `
            <li>
                <button onclick="kategori_degistir('${kategori}')" class="w-full flex items-center gap-3 px-4 py-3 rounded-l-xl transition-all ${aktifClass}">
                    <span class="material-symbols-rounded text-[20px]">${ikonStr}</span>
                    <span class="text-sm">${kategori}</span>
                </button>
            </li>
        `;
        
        el_kategori_listesi.innerHTML += html;
        el_mobil_kategori_listesi.innerHTML += html;
    });
}

// 2. Kategori Değiştirme
function kategori_degistir(yeni_kategori) {
    aktif_kategori = yeni_kategori;
    el_aktif_kategori_baslik.textContent = aktif_kategori;
    kategorileri_yukle(); // Menüdeki aktif stilini güncellemek için
    urunleri_filtrele_ve_ciz();
    mobil_menuyu_kapat(); // Mobildeyse menüyü kapat
}

// 3. Ürünleri Çiz (Grid)
function urunleri_ciz(urunler) {
    el_urunler_grid.innerHTML = "";
    el_urun_sayisi_etiketler.forEach(el => el.textContent = `${urunler.length} Ürün`);

    if (urunler.length === 0) {
        el_urunler_grid.classList.add('hidden');
        el_bos_durum.classList.remove('hidden');
        el_bos_durum.classList.add('flex');
    } else {
        el_urunler_grid.classList.remove('hidden');
        el_bos_durum.classList.add('hidden');
        el_bos_durum.classList.remove('flex');

        let htmlBuffer = "";

        urunler.forEach((urun, index) => {
            // Animasyon gecikmesi (stagger effect) -> kart sayısı çok olunca hızlı gelsin
            const delay = (index % 15) * 30; 
            
            // Etiketleri (tags) çiz
            const etiketHtml = urun.tags.slice(0, 3).map(tag => 
                `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">#${tag}</span>`
            ).join('');

            // Domain bulma ve Logo URL oluşturma
            let domain = "google.com";
            try {
                domain = new URL(urun.link_url).hostname;
            } catch(e) {}
            // about.google vb için düzeltme
            if (domain.includes('about.google')) domain = 'google.com';
            const logoUrl = custom_logos[urun.name] || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

            // Özel durum: Ana Portal (Vurgulu kart stili eklenebilir)
            const isMainPortal = urun.id === "main-portal";

            const pClass = urun.pricing === 'Ücretsiz' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800' :
                           urun.pricing === 'Ücretli' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800' :
                           'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800';

            const cardStyles = isMainPortal 
                ? "bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border-google-blue/30" 
                : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700";

            const kartHtml = `
                <div class="material-card group ${cardStyles} rounded-3xl p-6 border cursor-pointer animate-fade-in-up relative overflow-hidden" 
                     style="animation-delay: ${delay}ms; animation-fill-mode: both;"
                     onclick="modal_ac('${urun.id}')">
                    
                    <!-- ARKA PLAN WATERMARK -->
                    <img src="${logoUrl}" class="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.04] dark:opacity-[0.06] object-contain rotate-[-15deg] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" alt="" onerror="this.style.display='none'">

                    <div class="flex items-start justify-between mb-4 relative z-10">
                        <div class="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
                            <img src="${logoUrl}" class="w-8 h-8 object-contain drop-shadow-sm" alt="${urun.name}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';">
                            <span class="material-symbols-rounded text-3xl text-gray-400 hidden">${urun.icon_name}</span>
                        </div>
                        <span class="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">${urun.category}</span>
                        <span class="text-[10px] font-bold px-2 py-1 rounded-full border ${pClass}">${urun.pricing}</span>
                    </div>
                    
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10 ${isMainPortal ? 'text-google-blue dark:text-blue-400' : ''}">${urun.name}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 h-10 relative z-10">${urun.short_description}</p>
                    
                    <div class="flex flex-wrap gap-2 mt-auto relative z-10">
                        ${etiketHtml}
                    </div>
                </div>
            `;
            
            const listeHtml = `
                <div class="material-card group ${cardStyles} rounded-2xl p-4 border cursor-pointer animate-fade-in-up flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors" 
                     style="animation-delay: ${delay}ms; animation-fill-mode: both;"
                     onclick="modal_ac('${urun.id}')">
                    
                    <!-- İkon Kutusu -->
                    <div class="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 relative">
                        <span class="material-symbols-rounded text-2xl text-gray-300 dark:text-gray-600 absolute">${urun.icon_name}</span>
                        <img src="${logoUrl}" class="w-7 h-7 object-contain drop-shadow-sm relative z-10" alt="${urun.name}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'; this.style.opacity='1';">
                    </div>
                    
                    <!-- İçerik -->
                    <div class="flex-1 min-w-0 flex flex-col justify-center">
                        <div class="flex items-center gap-2 mb-0.5">
                            <h3 class="text-base font-bold text-gray-900 dark:text-white break-words whitespace-normal ${isMainPortal ? 'text-google-blue dark:text-blue-400' : ''}" title="${urun.name}">${urun.name}</h3>
                        </div>
                        <div class="flex items-center flex-wrap gap-2 mt-1">
                            <span class="inline-flex text-[10px] font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full whitespace-nowrap">${urun.category}</span>
                            <span class="inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full border ${pClass} whitespace-nowrap">${urun.pricing}</span>
                            <p class="text-sm text-gray-500 dark:text-gray-400 hidden sm:block w-full lg:w-auto flex-1 break-words whitespace-normal">${urun.short_description}</p>
                        </div>
                    </div>

                    <!-- Etiketler (Sadece masaüstünde) -->
                    <div class="hidden md:flex flex-wrap gap-1.5 ml-auto flex-shrink-0">
                        ${urun.tags.slice(0, 2).map(tag => `<span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md whitespace-nowrap">#${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            if (aktif_gorunum === 'grid') {
                htmlBuffer += kartHtml;
            } else {
                htmlBuffer += listeHtml;
            }

        });
        
        el_urunler_grid.innerHTML = htmlBuffer;
    }
}

// 4. Arama ve Filtreleme Mantığı
function urunleri_filtrele_ve_ciz() {
    let filtrelenmis_urunler = urunler_verisi;

    // Kategoriye göre filtrele
    if (aktif_kategori !== "Tümü") {
        if (aktif_kategori === "İş Ortakları") {
            filtrelenmis_urunler = filtrelenmis_urunler.filter(urun => urun.is_partner);
        } else {
            filtrelenmis_urunler = filtrelenmis_urunler.filter(urun => urun.category === aktif_kategori);
        }
    }

    // Arama metnine göre filtrele
    if (arama_metni.trim() !== "") {
        const arama_kucuk = arama_metni.toLowerCase();
        filtrelenmis_urunler = filtrelenmis_urunler.filter(urun => {
            return urun.name.toLowerCase().includes(arama_kucuk) ||
                   urun.short_description.toLowerCase().includes(arama_kucuk) ||
                   urun.tags.some(tag => tag.toLowerCase().includes(arama_kucuk));
        });
    }

    filtrelenmis_urunler.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            urunleri_ciz(filtrelenmis_urunler);
        });
    } else {
        urunleri_ciz(filtrelenmis_urunler);
    }
}

// 5. Arama Kutusu Event Listener
function arama_yap(event) {
    arama_metni = event.target.value;
    
    // Desktop ve Mobil arama kutularını senkronize et
    if(event.target.id === 'arama_kutusu') el_mobil_arama_kutusu.value = arama_metni;
    if(event.target.id === 'mobil_arama_kutusu') el_arama_kutusu.value = arama_metni;

    if (arama_metni.length > 0) {
        if(btn_arama_temizle) btn_arama_temizle.classList.remove('hidden');
        if(btn_mobil_arama_temizle) btn_mobil_arama_temizle.classList.remove('hidden');
    } else {
        if(btn_arama_temizle) btn_arama_temizle.classList.add('hidden');
        if(btn_mobil_arama_temizle) btn_mobil_arama_temizle.classList.add('hidden');
    }

    urunleri_filtrele_ve_ciz();
}

el_arama_kutusu.addEventListener('keyup', arama_yap);
el_mobil_arama_kutusu.addEventListener('keyup', arama_yap);

btn_temizle.addEventListener('click', () => {
    arama_metni = "";
    el_arama_kutusu.value = "";
    el_mobil_arama_kutusu.value = "";
    if(btn_arama_temizle) btn_arama_temizle.classList.add('hidden');
    if(btn_mobil_arama_temizle) btn_mobil_arama_temizle.classList.add('hidden');
    kategori_degistir("Tümü");
});

function hizli_temizle() {
    arama_metni = "";
    el_arama_kutusu.value = "";
    el_mobil_arama_kutusu.value = "";
    if(btn_arama_temizle) btn_arama_temizle.classList.add('hidden');
    if(btn_mobil_arama_temizle) btn_mobil_arama_temizle.classList.add('hidden');
    el_arama_kutusu.focus();
    urunleri_filtrele_ve_ciz();
}

if(btn_arama_temizle) btn_arama_temizle.addEventListener('click', hizli_temizle);
if(btn_mobil_arama_temizle) btn_mobil_arama_temizle.addEventListener('click', hizli_temizle);

// 6. Modal İşlemleri
function modal_ac(urun_id) {
    const urun = urunler_verisi.find(u => u.id === urun_id);
    if (!urun) return;

    // Modal İkonu / Logosu ayarlama
            let domain = "google.com";
            try { domain = new URL(urun.link_url).hostname; } catch(e) {}
            if (domain.includes('about.google')) domain = 'google.com';
            const logoUrl = custom_logos[urun.name] || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

    // İçeriği doldur
    el_modal_ikon.className = "flex items-center justify-center mb-4"; // İkon font classlarını siliyoruz
    el_modal_ikon.innerHTML = `<img src="${logoUrl}" class="w-16 h-16 object-contain drop-shadow-sm" alt="${urun.name}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';" /><span class="material-symbols-rounded text-4xl text-google-blue hidden">${urun.icon_name}</span>`;
    el_modal_baslik.textContent = urun.name;
    el_modal_kategori.textContent = urun.category;
    const mPClass = urun.pricing === 'Ücretsiz' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800' :
                    urun.pricing === 'Ücretli' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800' :
                    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800';
    if(document.getElementById('modal_pricing')) {
        document.getElementById('modal_pricing').textContent = urun.pricing;
        document.getElementById('modal_pricing').className = `inline-block px-3 py-1 text-sm font-bold rounded-full border ${mPClass}`;
    }
    el_modal_aciklama.textContent = urun.long_description;
    el_modal_bilgi.textContent = urun.fun_fact;
    el_modal_link.href = urun.link_url;
    const mzBtn = document.getElementById('modal_zihin_btn');
    if(mzBtn) mzBtn.setAttribute('data-id', urun.id);
    
    if(document.getElementById('modal_mindmap_btn')) { document.getElementById('modal_mindmap_btn').setAttribute('data-id', urun.id); }

    // Modalı göster
    el_urun_modali.classList.remove('hidden');
    // Animasyon için kısa gecikme
    setTimeout(() => {
        el_urun_modali.classList.remove('opacity-0');
        el_urun_modali.children[1].classList.remove('scale-95');
        el_urun_modali.children[1].classList.add('scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden'; // Arka plan kaydırmayı engelle
}

function modal_kapat() {
    el_urun_modali.classList.add('opacity-0');
    el_urun_modali.children[1].classList.remove('scale-100');
    el_urun_modali.children[1].classList.add('scale-95');
    
    setTimeout(() => {
        el_urun_modali.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

btn_modal_kapat.addEventListener('click', modal_kapat);
el_modal_arkaplan.addEventListener('click', modal_kapat);

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !el_urun_modali.classList.contains('hidden')) {
        modal_kapat();
    }
});

// 7. Mobil Menü İşlemleri
function mobil_menuyu_ac() {
    el_mobil_menu_overlay.classList.remove('hidden');
    el_mobil_menu_icerik.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden';
}

function mobil_menuyu_kapat() {
    el_mobil_menu_icerik.classList.add('-translate-x-full');
    setTimeout(() => {
        el_mobil_menu_overlay.classList.add('hidden');
        if(el_urun_modali.classList.contains('hidden')){
            document.body.style.overflow = '';
        }
    }, 300);
}

btn_mobil_menu.addEventListener('click', mobil_menuyu_ac);
btn_mobil_kapat.addEventListener('click', mobil_menuyu_kapat);
el_mobil_menu_overlay.addEventListener('click', mobil_menuyu_kapat);

// Mobil Arama Aç/Kapat
btn_mobil_arama.addEventListener('click', () => {
    el_mobil_arama_alani.classList.toggle('hidden');
    if (!el_mobil_arama_alani.classList.contains('hidden')) {
        el_mobil_arama_kutusu.focus();
    }
});

// 8. Dark Mode (Karanlık Mod) İşlemleri
function tema_degistir() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('tema', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('tema', 'dark');
    }
}

btn_tema_degistir.addEventListener('click', tema_degistir);

// Başlangıçta temayı kontrol et
function temayi_ayarla() {
    // Varsayılan olarak hep Dark Mode aç, sadece kullanıcı açıkça 'light' seçtiyse Light Mode yap
    if (localStorage.getItem('tema') === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('tema', 'dark');
    }
}

// --- UYGULAMAYI BAŞLAT ---
function baslat() {
    temayi_ayarla();
    gorunum_degistir(aktif_gorunum); // Kaydedilmiş görünümü uygula
    kategorileri_yukle();
    urunleri_filtrele_ve_ciz();
}

// DOM yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', baslat);

// Görünüm Değiştirici (Grid / List)
function gorunum_degistir(gorunum) {
    aktif_gorunum = gorunum;
    localStorage.setItem('gorunum', gorunum); // Kullanıcı seçimini kaydet
    
    const btnGrid = document.getElementById('btn_grid_view');
    const btnList = document.getElementById('btn_list_view');
    
    const seciliClass = "flex items-center justify-center w-10 h-10 rounded-xl transition-all border-2 border-google-blue bg-white dark:bg-gray-700 text-google-blue dark:border-blue-400 dark:text-blue-400 shadow-sm";
    const seciliOlmayanClass = "flex items-center justify-center w-10 h-10 rounded-xl transition-all text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700";
    
    if(gorunum === 'grid') {
        if(btnGrid) btnGrid.className = seciliClass;
        if(btnList) btnList.className = seciliOlmayanClass;
        if(typeof el_urunler_grid !== 'undefined') el_urunler_grid.className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6";
    } else {
        if(btnList) btnList.className = seciliClass;
        if(btnGrid) btnGrid.className = seciliOlmayanClass;
        if(typeof el_urunler_grid !== 'undefined') el_urunler_grid.className = "flex flex-col gap-3";
    }
    
    if(typeof urunleri_filtrele_ve_ciz === 'function') urunleri_filtrele_ve_ciz();
}


// --- ZİHİN HARİTASI (MINDMAP) MODÜLÜ ---
let mindmapNetwork = null;

// Ekstra ozel entegrasyon iliskileri (hardcoded)
const ozel_iliskiler = [
    // AI & DeepMind
    {from: 'Gemini', to: 'Drive', label: 'Dosya Analizi'},
    {from: 'Gemini', to: 'Dokümanlar', label: 'Akıllı Yazım'},
    {from: 'Gemini', to: 'Gmail', label: 'E-posta Özeti'},
    {from: 'Gemini', to: 'Android Studio', label: 'Kod Asistanı (Bot)'},
    {from: 'Gemini', to: 'Arama (Search)', label: 'Yapay Zeka Destekli Arama'},
    {from: 'DeepMind', to: 'Gemini', label: 'Çekirdek Model'},
    {from: 'DeepMind', to: 'Gemma', label: 'Açık Kaynak Model'},
    {from: 'DeepMind', to: 'Veo', label: 'Video Üretim Modeli'},
    {from: 'DeepMind', to: 'SynthID', label: 'AI Filigranlama'},
    {from: 'DeepMind', to: 'AlphaFold (DeepMind)', label: 'Protein Katlama'},
    {from: 'AI Studio', to: 'Gemini', label: 'Geliştirici API'},
    {from: 'TensorFlow', to: 'Vertex AI', label: 'Model Eğitimi'},
    
    // Workspace (Verimlilik Merkezi)
    {from: 'Workspace', to: 'Gmail', label: 'Merkezi İletişim'},
    {from: 'Workspace', to: 'Drive', label: 'Depolama Altyapısı'},
    {from: 'Drive', to: 'Dokümanlar', label: 'Belge Altyapısı'},
    {from: 'Drive', to: 'E-Tablolar', label: 'Tablo Altyapısı'},
    {from: 'Drive', to: 'Slaytlar', label: 'Sunum Altyapısı'},
    {from: 'Drive', to: 'Google Keep', label: 'Not Yedekleme'},
    {from: 'Drive', to: 'Google Forms', label: 'Anket Verisi Depolama'},
    {from: 'Gmail', to: 'Takvim', label: 'Etkinlik Davetleri'},
    {from: 'Gmail', to: 'Meet', label: 'Video Konferans Başlatma'},
    {from: 'Gmail', to: 'Görevler', label: 'Maili Görev Yapma'},
    {from: 'Takvim', to: 'Meet', label: 'Toplantı Linki'},
    {from: 'Google Kişiler', to: 'Gmail', label: 'Adres Defteri'},
    
    // Geliştirici & Cloud
    {from: 'Cloud', to: 'Firebase', label: 'BaaS Altyapısı'},
    {from: 'Cloud', to: 'Vertex AI', label: 'AI Platformu'},
    {from: 'Cloud', to: 'BigQuery', label: 'Veri Ambarı'},
    {from: 'Cloud', to: 'Kubernetes (K8s)', label: 'Konteyner Orkestrasyonu'},
    {from: 'Firebase', to: 'Flutter', label: 'Mobil Backend'},
    {from: 'Firebase', to: 'Android Studio', label: 'Entegre Backend'},
    {from: 'Android Studio', to: 'Android', label: 'Uygulama Geliştirme'},
    {from: 'Android Studio', to: 'Play Console', label: 'Uygulama Dağıtımı'},
    {from: 'Google Piper', to: 'Android Studio', label: 'Kod Kaynağı'},
    {from: 'Google Piper', to: 'Cloud', label: 'Bulut Kod Deposu'},
    {from: 'Apps Script', to: 'E-Tablolar', label: 'Tablo Makroları'},
    {from: 'AppSheet', to: 'E-Tablolar', label: 'Veritabanı'},
    
    // Reklam & Pazarlama & Veri
    {from: 'Ads', to: 'Analytics', label: 'Dönüşüm İzleme'},
    {from: 'Tag Manager', to: 'Analytics', label: 'Olay Etiketleri'},
    {from: 'Analytics', to: 'Looker Studio', label: 'Veri Görselleştirme'},
    {from: 'Search Console', to: 'Analytics', label: 'Organik SEO Verisi'},
    {from: 'AdSense', to: 'YouTube', label: 'Kanal Gelirleri'},
    {from: 'AdMob', to: 'Play Console', label: 'Uygulama İçi Reklam'},
    {from: 'İşletme Profili', to: 'Haritalar', label: 'Yerel İşletme Gösterimi'},
    
    // Medya & Cihazlar & OS
    {from: 'Android', to: 'Chrome', label: 'Varsayılan Tarayıcı'},
    {from: 'Android', to: 'Asistan', label: 'Sesli Asistan'},
    {from: 'YouTube', to: 'YouTube Music', label: 'Müzik Katalogu'},
    {from: 'YouTube', to: 'YouTube TV', label: 'TV Yayıncılığı'},
    {from: 'Pixel', to: 'Android', label: 'Saf Android OS'},
    {from: 'Pixel', to: 'Pixel Buds', label: 'Cihaz Ekosistemi'},
    {from: 'Pixel', to: 'Pixel Watch', label: 'Cihaz Ekosistemi'},
    {from: 'Pixel Watch', to: 'Fitbit', label: 'Sağlık Sensörleri'},
    
    // Haritalar ve Konum
    {from: 'Haritalar', to: 'Earth', label: '3D Uydu Görüntüleri'},
    {from: 'Haritalar', to: 'Waze', label: 'Topluluk Trafik Verisi'},
    {from: 'Haritalar', to: 'Android Auto', label: 'Araç İçi Navigasyon'},
    {from: 'Haritalar', to: 'Street View', label: 'Sokak Düzeyi Görüntü'},
    
    // Diğer Çapraz Bağlar
    {from: 'Arama (Search)', to: 'Haritalar', label: 'Yerel Arama Entegrasyonu'},
    {from: 'Arama (Search)', to: 'Görseller', label: 'Görsel Arama Desteği'},
    {from: 'Chrome', to: 'Arama (Search)', label: 'Varsayılan Arama Motoru'},
    {from: 'Google Home', to: 'Asistan', label: 'Akıllı Ev Yönetimi'},
    {from: 'Google Home', to: 'Chromecast', label: 'Yayın Kontrolü'}
,

    // Yeni Eklenen Urunler Icin Zihin Haritasi Baglari
    {from: 'Antigravity IDE', to: 'DeepMind', label: 'Çekirdek Teknoloji'},
    {from: 'Antigravity IDE', to: 'Android Studio', label: 'Kodlama Arayüzü'},
    {from: 'Project IDX', to: 'Firebase', label: 'Hosting & Backend'},
    {from: 'Project IDX', to: 'Cloud', label: 'Bulut Derleme Ortamı'},
    {from: 'Google Colab', to: 'Drive', label: 'Notebook Depolama'},
    {from: 'Google Colab', to: 'TensorFlow', label: 'Donanım Hızlandırma'},
    {from: 'Google Vids', to: 'Workspace', label: 'Ofis Entegrasyonu'},
    {from: 'Google Vids', to: 'Drive', label: 'Medya Barındırma'},
    {from: 'Dataform', to: 'Cloud', label: 'Bulut Altyapısı'},
    {from: 'Dataform', to: 'BigQuery', label: 'Veri Ambarı Yönetimi'}
,

    // Yeni Eklenen IDE & Geliştirici Ortamları
    {from: 'Cloud Workstations', to: 'Cloud', label: 'Yönetilen Ortam'},
    {from: 'Cloud Workstations', to: 'Android Studio', label: 'Bulutta Çalıştırma'},
    {from: 'Cloud Shell Editor', to: 'Cloud', label: 'Web Tabanlı IDE'},
    {from: 'Cloud Shell Editor', to: 'Project IDX', label: 'Altyapı Temeli'},
    {from: 'Google Web Designer', to: 'Ads', label: 'Etkileşimli Reklamlar'},
    {from: 'Google Web Designer', to: 'Drive', label: 'Proje Yedekleme'},
    {from: 'Blockly', to: 'Geliştiriciler İçin Google', label: 'Eğitim Teknolojisi'}
,

    // Chrome DevTools, Kaggle ve Cloud Code
    {from: 'Chrome DevTools', to: 'Chrome', label: 'Dahili Araç'},
    {from: 'Chrome DevTools', to: 'Lighthouse', label: 'Performans Testi'},
    {from: 'Kaggle', to: 'Cloud', label: 'Bulut Altyapısı'},
    {from: 'Kaggle', to: 'TensorFlow', label: 'Makine Öğrenimi'},
    {from: 'Cloud Code', to: 'Cloud', label: 'IDE Eklentisi'},
    {from: 'Cloud Code', to: 'Android Studio', label: 'IDE Uyumluluğu'}
,

    // Diger Gelistirici Araclari
    {from: 'Bazel', to: 'Google Piper', label: 'Derleme (Build) Sistemi'},
    {from: 'Bazel', to: 'Android Studio', label: 'Proje Derleme'},
    {from: 'Gerrit', to: 'Android', label: 'Açık Kaynak İnceleme'},
    {from: 'Puppeteer', to: 'Chrome', label: 'Headless Tarayıcı'},
    {from: 'Earth Engine Code Editor', to: 'Earth', label: 'Bulut Kodlama'},
    {from: 'Lit', to: 'Chrome', label: 'Web Bileşenleri'},
    {from: 'MediaPipe', to: 'TensorFlow', label: 'Cihaz İçi ML'},
    {from: 'ARCore', to: 'Android', label: 'Sanal Gerçeklik'}
,

    // 3D Web Teknolojileri
    {from: 'Model Viewer', to: 'ARCore', label: 'WebXR Entegrasyonu'},
    {from: 'Model Viewer', to: 'Chrome', label: 'Web Standartları'},
    {from: 'Filament', to: 'Android', label: 'Dahili Render Motoru'},
    {from: 'Filament', to: 'Chrome', label: 'WebAssembly Render'},
    {from: 'Draco 3D', to: 'Chrome', label: 'Hızlı İndirme'},
    {from: 'Draco 3D', to: 'Model Viewer', label: '3D Veri Sıkıştırma'}
,

    // Diger 3D ve Motor Araclari
    {from: 'Skia', to: 'Chrome', label: 'Grafik Motoru'},
    {from: 'Skia', to: 'Android', label: 'Grafik Motoru'},
    {from: 'Skia', to: 'Flutter', label: 'Grafik Motoru'},
    {from: 'V8 Engine', to: 'Chrome', label: 'JS Motoru'},
    {from: 'Closure Compiler', to: 'Chrome', label: 'JS Optimizasyonu'},
    {from: 'Seurat', to: 'ARCore', label: 'VR Sahne Optimizasyonu'},
    {from: 'Resonance Audio', to: 'YouTube', label: '360° Ses Modeli'},
    {from: 'Google Blocks', to: 'ARCore', label: 'VR Modelleme'},
    
    // İş Ortakları Entegrasyonları
    {from: 'Slack', to: 'Workspace', label: 'Eklenti Desteği'},
    {from: 'Slack', to: 'Drive', label: 'Dosya Paylaşımı'},
    {from: 'GitHub', to: 'Cloud', label: 'Cloud Build'},
    {from: 'GitHub', to: 'Android Studio', label: 'Git Entegrasyonu'},
    {from: 'Salesforce', to: 'Cloud', label: 'Veri Analizi'},
    {from: 'Salesforce', to: 'Workspace', label: 'Takvim Senkronizasyonu'},
    {from: 'Zoom', to: 'Takvim', label: 'Toplantı Eklentisi'},
    {from: 'Spotify', to: 'Asistan', label: 'Sesli Kontrol'},
    {from: 'Spotify', to: 'Android', label: 'Sistem Desteği'},
    {from: 'Canva', to: 'Drive', label: 'Dosya Entegrasyonu'},
    {from: 'Canva', to: 'Fotoğraflar', label: 'Görsel Çekme'},
    {from: 'Miro', to: 'Meet', label: 'Etkileşimli Tahta'},
    {from: 'Asana', to: 'Workspace', label: 'Görev Entegrasyonu'},
    {from: 'Jira', to: 'Sohbet (Chat)', label: 'Sorun Takip Botu'},
    {from: 'Tableau', to: 'BigQuery', label: 'Veri Çekme'},
    {from: 'HubSpot', to: 'Gmail', label: 'Satış Uzantısı'},
    {from: 'Zapier', to: 'Formlar', label: 'Tetikleyici'},
    {from: 'Zendesk', to: 'Sohbet (Chat)', label: 'Destek Botu'},
    {from: 'Workday', to: 'Workspace', label: 'İş Akışı'},
    {from: 'Zoho', to: 'Sohbet (Chat)', label: 'CRM Bildirimleri'},
    {from: 'PagerDuty', to: 'Sohbet (Chat)', label: 'Olay Uyarısı'},
    {from: 'Mailchimp', to: 'Workspace', label: 'Kişi Senkronizasyonu'},
    {from: 'Lucidchart', to: 'Dokümanlar', label: 'Diyagram Eklentisi'},
    {from: 'Notion', to: 'Drive', label: 'Dosya Gömme'},
    {from: 'Airtable', to: 'E-Tablolar', label: 'Veri Çekme'},
    {from: 'Microsoft Outlook', to: 'Takvim', label: 'Senkronizasyon'},
    {from: 'ClickUp', to: 'Takvim', label: 'Görev Senk.'},
    {from: 'monday.com', to: 'Gmail', label: 'Görev Aktarımı'},
    {from: 'Trello', to: 'Drive', label: 'Dosya Eki'},
    {from: 'Microsoft Excel', to: 'E-Tablolar', label: 'Format Desteği'},
    {from: 'ChatGPT (OpenAI)', to: 'Dokümanlar', label: 'AI Destek Uzantısı'},
    {from: 'Discord', to: 'Formlar', label: 'Webhook Entegrasyonu'},
    {from: 'Typeform', to: 'E-Tablolar', label: 'Canlı Veri Besleme'},
    {from: 'Jotform', to: 'Drive', label: 'PDF Aktarımı'},
    {from: 'ActiveCampaign', to: 'Analytics', label: 'Kampanya Analizi'},
    {from: 'tl;dv', to: 'Meet', label: 'Toplantı Kaydı'},
    {from: 'Motion', to: 'Takvim', label: 'Oto-Planlama'},
    {from: 'Calendly', to: 'Takvim', label: 'Randevu Senk.'},
    {from: 'Telegram', to: 'E-Tablolar', label: 'Bot Entegrasyonu'},
    {from: 'Todoist', to: 'Gmail', label: 'E-postadan Görev'},
    {from: 'Pipedrive', to: 'Kişiler', label: 'İletişim Senk.'},
    {from: 'Webflow', to: 'Haritalar', label: 'Harita Gömme'},
    {from: 'Shopify', to: 'Ads', label: 'Ürün Listeleme'}
];

function zihin_haritasi_ac(merkez_urun_id = null) {
    const modal = document.getElementById('mindmap_modali');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
    
    // Varsa eskisini yok et
    if (mindmapNetwork !== null) {
        mindmapNetwork.destroy();
        mindmapNetwork = null;
    }
}
    
    // --- DİNAMİK NODE ÜRETİMİ ---
    let ham_nodes = [];
    let ham_edges = [];
    
    // Kategori merkezlerini ekle
    const kategoriler = [...new Set(urunler_verisi.map(u => u.category))];
    if (urunler_verisi.some(u => u.is_partner) && !kategoriler.includes('İş Ortakları')) kategoriler.push('İş Ortakları');
    kategoriler.sort((a, b) => a.localeCompare(b, 'tr'));
    const cat_colors = {
        'Yapay Zeka': '#DB4437', // Kirmizi
        'Geliştirici Araçları': '#0F9D58', // Yesil
        'İş & Pazarlama': '#F4B400', // Sari
        'Donanım & Cihazlar': '#A142F4', // Mor
        'Medya & Eğlence': '#E91E63', // Pembe
        'Sağlık & Yaşam': '#00BCD4', // Turkuaz
        'İş Ortakları': '#FF9800', // Turuncu
        'Tümü': '#4285F4' // Mavi
    };
    
    kategoriler.forEach(cat => {
        ham_nodes.push({ id: 'cat_' + cat, label: cat, shape: 'dot', size: 25, color: cat_colors[cat] || '#4285F4', font: {size: 16, bold: true} });
    });
    
    // Root (Google) node'u
    ham_nodes.push({ id: 'root', label: 'Google', shape: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', size: 40 });
    
    // Root -> Kategori Merkezleri iliskisi
    kategoriler.forEach(cat => {
        ham_edges.push({ from: 'root', to: 'cat_' + cat, width: 2, dashes: true });
    });

    // Urun Nodelari uret
    urunler_verisi.forEach(urun => {
        let logoUrl = "https://www.google.com/s2/favicons?domain=google.com&sz=128";
        if(typeof custom_logos !== 'undefined' && custom_logos[urun.name]) {
            logoUrl = custom_logos[urun.name];
        } else {
            try {
                let domain = new URL(urun.link_url).hostname;
                if (domain.includes('about.google')) domain = 'google.com';
                logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
            } catch(e){}
        }

        ham_nodes.push({
            id: urun.id,
            label: urun.name,
            shape: 'circularImage',
            image: logoUrl,
            size: 20,
            color: cat_colors[urun.category] || '#4285F4',
            group: urun.category,
            borderWidth: merkez_urun_id === urun.id ? 4 : 2, // Eger merkez urunse kalin cerceve
            shadow: merkez_urun_id === urun.id ? {color: '#DB4437', size: 20} : true
        });
        
        // Temel Iliski: Kendi kategorisine bagla
        ham_edges.push({ from: 'cat_' + urun.category, to: urun.id, color: {opacity: 0.2} });
    });

    // Ozel iliskileri ekle
    ozel_iliskiler.forEach(rel => {
        // İsim bazlı eşleştirme (Hardcoded ID hatalarını önlemek için)
        const fromUrun = urunler_verisi.find(u => u.name === rel.from);
        const toUrun = urunler_verisi.find(u => u.name === rel.to);
        
        if(fromUrun && toUrun) {
            ham_edges.push({ 
                from: fromUrun.id, 
                to: toUrun.id, 
                label: rel.label, 
                color: {color: '#4285F4', opacity: 0.8}, 
                font: {size: 11, background: 'white'}, 
                arrows: 'to' 
            });
        }
    });


    // --- FİLTRELEME (Eğer merkez_urun_id varsa sadece onu ve komşularını göster) ---
    let gosterilecek_nodes = ham_nodes;
    let gosterilecek_edges = ham_edges;

    if (merkez_urun_id) {
        gosterilecek_nodes = [];
        gosterilecek_edges = [];
        
        const komsu_node_idler = new Set();
        komsu_node_idler.add(merkez_urun_id);
        
        // Merkez urunun gecitigi butun edges leri bul
        ham_edges.forEach(edge => {
            // Eger ozel bir iliskiyse veya direk kategoriye bagliysa
            if (edge.from === merkez_urun_id || edge.to === merkez_urun_id) {
                gosterilecek_edges.push(edge);
                komsu_node_idler.add(edge.from);
                komsu_node_idler.add(edge.to);
            }
        });
        
        // Eger herhangi bir ekstra komsu baglantisi daha varsa, onlari da ekle (Istege Bagli - derinlik 2)
        // Biz su an sadece derinlik 1 istiyoruz.
        
        ham_nodes.forEach(node => {
            if (komsu_node_idler.has(node.id)) {
                gosterilecek_nodes.push(node);
            }
        });
        
        // Secilen node un iconunu buyut
        const merkezNode = gosterilecek_nodes.find(n => n.id === merkez_urun_id);
        if(merkezNode) merkezNode.size = 35;
    }

    const container = document.getElementById('mindmap_container');
    const data = { nodes: new vis.DataSet(gosterilecek_nodes), edges: new vis.DataSet(gosterilecek_edges) };
    
    // Tasarım
    const options = {
        nodes: {
            font: { size: 13, color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#333333', face: 'Inter, sans-serif' },
            brokenImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
        },
        edges: { smooth: { type: 'continuous' } },
        physics: {
            forceAtlas2Based: { gravitationalConstant: -60, centralGravity: 0.01, springLength: 150, springConstant: 0.08 },
            solver: 'forceAtlas2Based',
            timestep: merkez_urun_id ? 0.1 : 0.35 // Kucuk grafikte fizigi yavaslatalim, cok sicramasir
        },
        interaction: { hover: true, tooltipDelay: 200, zoomView: true }
    };

    mindmapNetwork = new vis.Network(container, data, options);
    
    // Eger kucuk grafikse (merkez odakliysa) biraz zoom yap
    if (merkez_urun_id) {
        mindmapNetwork.once('afterDrawing', function() {
            mindmapNetwork.fit({ animation: { duration: 1000, easingFunction: 'easeInOutQuad' } });
        });
    }
}
function zihin_haritasi_kapat() {
    const modal = document.getElementById('mindmap_modali');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}




function tetikle_zihin_haritasi() {
    const btn = document.getElementById('modal_zihin_btn');
    if(!btn) return;
    const u_id = btn.getAttribute('data-id');
    modal_kapat();
    setTimeout(() => { zihin_haritasi_ac(u_id); }, 350);
}

// --- KLAVYE KISAYOLLARI VE RASTGELE SEÇİM ---
document.addEventListener('keydown', (e) => {
    // Cmd+K veya Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const aramaKutusu = document.getElementById('arama_kutusu');
        if (aramaKutusu) aramaKutusu.focus();
    }
});

window.rastgele_urun_sec = function() {
    const rIndex = Math.floor(Math.random() * urunler_verisi.length);
    const secilenUrun = urunler_verisi[rIndex];
    if (secilenUrun) modal_ac(secilenUrun.id);
};
