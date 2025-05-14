// Übersetzungen für alle Seiten
const translations = {
    de: {
        // Hauptseite
        essen: {
            title: 'Essen & Trinken',
            desc: 'Traditionelle türkische Spezialitäten'
        },
        spenden: {
            title: 'Spenden',
            desc: 'Unterstützen Sie unsere Gemeindearbeit'
        },
        kontakt: {
            title: 'Adresse & Kontakt',
            desc: 'So erreichen Sie uns'
        },
        feedback: {
            title: 'Feedback',
            desc: 'Ihre Meinung ist uns wichtig'
        },
        copyright: '© 2024 VIKZ Hayır Çarşısı. Alle Rechte vorbehalten.',

        // Essen & Trinken Seite
        menu_title: 'Speisekarte',
        drinks_title: 'Getränke',
        prices_note: 'Alle Preise in Euro',

        // Spenden Seite
        donation_title: 'Ihre Spende hilft',
        donation_desc: 'Unterstützen Sie unsere Gemeindearbeit',

        // Kontakt Seite
        contact_title: 'Kontaktieren Sie uns',
        address_title: 'Unsere Adresse',
        
        // Feedback Seite
        feedback_title: 'Ihr Feedback',
        feedback_desc: 'Teilen Sie uns Ihre Erfahrungen mit'
    },
    tr: {
        // Ana Sayfa
        essen: {
            title: 'Yemek & İçecek',
            desc: 'Geleneksel Türk Lezzetleri'
        },
        spenden: {
            title: 'Bağış',
            desc: 'Cemiyetimize destek olun'
        },
        kontakt: {
            title: 'Adres & İletişim',
            desc: 'Bize ulaşın'
        },
        feedback: {
            title: 'Geribildirim',
            desc: 'Görüşleriniz bizim için önemli'
        },
        copyright: '© 2024 VIKZ Hayır Çarşısı. Tüm hakları saklıdır.',

        // Yemek & İçecek Sayfası
        menu_title: 'Menü',
        drinks_title: 'İçecekler',
        prices_note: 'Tüm fiyatlar Euro cinsindendir',

        // Bağış Sayfası
        donation_title: 'Bağışınız Faydalı Olur',
        donation_desc: 'Cemiyetimize destek olun',

        // İletişim Sayfası
        contact_title: 'Bize Ulaşın',
        address_title: 'Adresimiz',
        
        // Geribildirim Sayfası
        feedback_title: 'Geribildiriminiz',
        feedback_desc: 'Deneyimlerinizi bizimle paylaşın'
    }
};

// Sprache wechseln
function switchLanguage(lang) {
    // Aktualisiere Button-Status
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
    });

    // Übersetze alle Elemente mit data-tr Attribut
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang][key]) {
            const section = translations[lang][key];
            const h2 = element.querySelector('h2');
            const p = element.querySelector('p');
            
            if (h2 && section.title) {
                h2.textContent = section.title;
            }
            if (p && section.desc) {
                p.textContent = section.desc;
            }
            if (!h2 && !p) {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Speichere die Sprachauswahl
    localStorage.setItem('preferred_language', lang);
}

// Lade die gespeicherte Spracheinstellung beim Seitenaufruf
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang) {
        switchLanguage(savedLang);
    }
}); 