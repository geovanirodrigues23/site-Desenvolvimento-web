function redirecionarComOpcao("C:\Users\rgeov\Downloads\site Desenvolvimento web\2025_M_W_Jordan_05_09_25.pdf") {
        // Usa confirm() para que o usuário possa escolher OK ou Cancelar
        var prosseguir = confirm("Você será redirecionado(a) a outra página. Deseja prosseguir?");
        
        if (prosseguir) {
            // Redireciona APENAS se o usuário clicar em "OK"
            window.location.href = urlDestino;
        } else {
            // O usuário clicou em "Cancelar"
            alert("Redirecionamento cancelado.");
        }
    }