// Navbar dinâmica
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });

        // Animações de scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Barra de progresso animada
        window.addEventListener('load', function() {
            setTimeout(() => {
                const progressBar = document.getElementById('progressBar');
                if (progressBar) {
                    progressBar.style.width = '35%';
                }
            }, 1000);
        });

        // Scroll suave para navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Funções interativas
        function showTips() {
            alert('💡 DICAS PARA REDUZIR LIXO:\n\n' +
                  '🛍️ Use sacolas reutilizáveis\n' +
                  '🥗 Faça compostagem doméstica\n' +
                  '💧 Use garrafas reutilizáveis\n' +
                  '📱 Prefira documentos digitais\n' +
                  '🔄 Reutilize materiais antes de descartar\n' +
                  '🛒 Compre produtos com menos embalagens');
        }

        function showLocations() {
            alert('📍 PONTOS DE COLETA EM ALAGOINHAS:\n\n' +
                  '🏢 Centro: 7 contêineres (24h)\n' +
                  '♻️ CORAL: Seg-Sex, 8h-17h\n' +
                  '⚡ Ponto Vale Luz Neoenergia\n' +
                  '🏫 Escolas parceiras\n' +
                  '⛪ Igrejas da cidade\n' +
                  '📞 Info: (75) 3422-3121');
        }

        function joinProgram() {
            alert('📝 CADASTRO DE VOLUNTÁRIO\n\n' +
                  'Seja um multiplicador ambiental!\n\n' +
                  'Entre em contato:\n' +
                  '📞 (75) 3422-3121\n' +
                  '📧 meioambiente@alagoinhas.ba.gov.br\n\n' +
                  'Próximas capacitações em breve!');
        }

        function shareProgram() {
            if (navigator.share) {
                navigator.share({
                    title: 'Programa EcoAlagoinhas',
                    text: 'Conheça o programa de sustentabilidade da nossa cidade!',
                    url: window.location.href
                });
            } else {
                alert('📤 COMPARTILHE O PROGRAMA!\n\n' +
                      'Copie e cole este link:\n' +
                      window.location.href + '\n\n' +
                      'Ajude a espalhar a consciência ambiental em Alagoinhas!');
            }
        }

        function donateRecyclables() {
            alert('♻️ DOAÇÃO DE RECICLÁVEIS\n\n' +
                  'Locais para doação:\n\n' +
                  '🏢 CORAL - Cooperativa\n' +
                  '📍 PEVs no centro\n' +
                  '⛪ Igrejas parceiras\n' +
                  '🏫 Escolas participantes\n\n' +
                  'Sua doação faz a diferença!');
        }

        function downloadMaterial() {
            alert('📥 MATERIAL EDUCATIVO\n\n' +
                  'Em breve disponibilizaremos:\n\n' +
                  '📋 Cartilhas digitais\n' +
                  '🎥 Vídeos educativos\n' +
                  '📊 Relatórios de progresso\n' +
                  '🗓️ Calendário de ações\n\n' +
                  'Acompanhe nossas redes sociais!');
        }

        // Efeitos visuais adicionais
        document.addEventListener('mousemove', function(e) {
            const cursor = document.createElement('div');
            cursor.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: rgba(46, 204, 113, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX - 5}px;
                top: ${e.clientY - 5}px;
                animation: cursor-fade 0.5s ease-out forwards;
            `;
            document.body.appendChild(cursor);
            setTimeout(() => cursor.remove(), 500);
        });

        // CSS para animação do cursor
        const style = document.createElement('style');
        style.textContent = `
            @keyframes cursor-fade {
                0% { transform: scale(1); opacity: 1; }
                100% { transform: scale(2); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Contador dinâmico no hero
        function animateCounters() {
            const counters = document.querySelectorAll('.hero-stat-number');
            const speed = 100;
            
            counters.forEach(counter => {
                const target = counter.textContent;
                const numTarget = parseInt(target.replace(/[^\d]/g, ''));
                let current = 0;
                
                if (numTarget) {
                    const increment = numTarget / speed;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numTarget) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            if (target.includes('%')) {
                                counter.textContent = `+${Math.floor(current)}%`;
                            } else if (target.includes('.')) {
                                counter.textContent = Math.floor(current).toLocaleString();
                            } else {
                                counter.textContent = Math.floor(current);
                            }
                        }
                    }, 20);
                }
            });
        }

        // Iniciar contadores quando a página carregar
        window.addEventListener('load', function() {
            setTimeout(animateCounters, 500);
        });