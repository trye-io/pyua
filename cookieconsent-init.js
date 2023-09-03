// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'ua',
    autoclear_cookies: false,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 1,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'ua': {
            consent_modal: {
                title: 'Ми використовуємо файли cookies 🍪',
                description: 'Привіт! Крім суто необхідних файлів cookies, цей вебсайт також використовує аналітичні файли cookies. <button type="button" data-cc="c-settings" class="cc-link" aria-haspopup="dialog">Налаштувати</button>',
                primary_btn: {
                    text: 'Погоджуюсь',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Не погоджуюсь',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Налаштування файлів сookies 🍪',
                save_settings_btn: 'Зберегти налаштування',
                accept_all_btn: 'Прийняти усі',
                reject_all_btn: 'Відхилити усі',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: "Ім'я"},
                    {col2: 'Домен'},
                    {col3: 'Термін дії'},
                    {col4: 'Опис'}
                ],
                blocks: [
                    {
                        title: '📢 Використання файлів cookies 🍪',
                        description: 'Ми використовуємо файли cookies, щоб забезпечити основні функції вебсайту та покращити ваш досвід онлайн. Ви можете ввімкнути/відключити аналітичні файли cookies. Щоб дізнатися більше про файли cookies та ваші дані, ви можете ознайомитись з нашою <a href="http://trye.io/privacy/">політикою конфіденційності та cookies</a>.'
                    }, {
                        title: "Необхідні файли cookies",
                        description: 'Ці файли cookies необхідні для належного функціонування нашого вебсайту. Без цих файлів cookies вебсайт не буде працювати належним чином.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        }
                    }, {
                        title: 'Аналітичні файли cookies',
                        description: 'За допомогою цих файлів ми збираємо дані про те як ви використовуєте сайт, щоб покращити ваш досвід. Усі дані, які ми збираємо, є анонімними.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: true,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 роки',
                                col4: 'Google Analytics',
                                is_regex: true
                            }
                        ]
                    }, {
                        title: "Зворотній зв'язок",
                        description: "З будь-якими питаннями щодо нашої політики файлів cookies, ви можете зв'язатися з нами за наступною <a href='mailto:support@trye.io'> адресою</a>.",
                    }
                ]
            }
        }
    }
});