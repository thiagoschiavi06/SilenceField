document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formMessage = document.getElementById('formMessage');
    formMessage.className = 'hidden'; 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !subject || !message) {
        showMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage('Por favor, insira um email válido.', 'error');
        return;
    }

    try {
        console.log('Enviando dados do formulário:', { name, email, subject, message });

        await new Promise(resolve => setTimeout(resolve, 1500));

        showMessage('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.', 'success');
        this.reset();

    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        showMessage('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.', 'error');
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type === 'success' ? 'success' : 'error';
    }
});
