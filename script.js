function simulateRemoveReactionClicks() {
    // Seleciona o primeiro elemento de "Opções de ação"
    var actionOption = document.querySelector('div[aria-label="Opções de ação"]');

 
    if (actionOption) {
 
        actionOption.click();
        console.log('Clique efetuado no elemento: Opções de ação');

 
        setTimeout(function() {
            simulateMenuItemClick();
        }, 600); // Tempo para garantir que o menu de opções seja aberto
    } else {
        console.log('Nenhum elemento "Opções de ação" encontrado.');
    }
}

 
function simulateMenuItemClick() {
 
    var menuItem = document.querySelector('div[role="menuitem"][tabindex="0"]');

 
    if (menuItem) {
        var removeReactionSpan = menuItem.querySelector('span[dir="auto"]');
        if (removeReactionSpan && removeReactionSpan.innerText === "Remover reação") {
            menuItem.click();
            console.log('Clique efetuado no menuitem: Remover reação');

 
            setTimeout(simulateRemoveReactionClicks, 600); // Tempo para garantir que a reação seja removida
        } else {
            console.log('Nenhum botão "Remover reação" encontrado.');
        }
    } else {
        console.log('Nenhum menuitem encontrado.');
    }
}

// Chama a função para simular os cliques
simulateRemoveReactionClicks();
