# Documento 1 — Visão Geral e Escopo do Sistema

## 1. Propósito
O Habit Tracker é um sistema para ajudar usuários a acompanhar seus hábitos diários, registrar seu progresso e visualizar sua consistência por meio de sequências de dias (streaks).

## 2. Requisitos Funcionais
- **RF01 — Cadastro e login:** permitir que o usuário crie uma conta e faça login.
- **RF02 — Criar hábito:** permitir o cadastro de novos hábitos.
- **RF03 — Editar/excluir hábito:** permitir alterar ou remover hábitos.
- **RF04 — Marcar como concluído:** permitir registrar a conclusão de um hábito diariamente.
- **RF05 — Calcular streak:** calcular automaticamente a sequência de dias consecutivos.
- **RF06 — Calendário:** exibir o histórico de hábitos realizados.

## 3. Requisitos Não Funcionais
- **RNF01 — Usabilidade:** o sistema deve possuir uma interface simples e intuitiva.
- **RNF02 — Responsividade:** o sistema deve funcionar em computadores e dispositivos móveis.
- **RNF03 — Segurança:** os dados dos usuários devem ser protegidos.
- **RNF04 — Desempenho:** o sistema deve responder às ações do usuário rapidamente.
- **RNF05 — Compatibilidade:** o sistema deve funcionar nos principais navegadores.
- **RNF06 — Manutenibilidade:** o código deve ser organizado e fácil de modificar.

# Documento 2 — Modelagem de Casos de Uso

## UC001 — Cadastro e Login (RF01)
- **Ator Principal:** Usuário  
- **Precondição:** Usuário não autenticado.  
- **Fluxo Principal:**  
  1. Usuário acessa tela de cadastro/login.  
  2. Insere dados (nome, e-mail, senha).  
  3. Sistema valida informações.  
  4. Sistema cria conta ou autentica sessão.  
- **Fluxo de Exceção:**  
  - Dados inválidos → sistema exibe mensagem de erro.  
  - E-mail já cadastrado → sistema solicita login.  

---

## UC002 — Criar Hábito (RF02)
- **Ator Principal:** Usuário autenticado  
- **Precondição:** Usuário logado no sistema.  
- **Fluxo Principal:**  
  1. Usuário acessa opção “Novo Hábito”.  
  2. Insere nome e descrição do hábito.  
  3. Sistema salva no banco de dados.  
  4. Hábito aparece na lista do usuário.  
- **Fluxo de Exceção:**  
  - Nome duplicado → sistema solicita alteração.  

---

## UC003 — Editar/Excluir Hábito (RF03)
- **Ator Principal:** Usuário autenticado  
- **Precondição:** Hábito já cadastrado.  
- **Fluxo Principal:**  
  1. Usuário seleciona hábito existente.  
  2. Escolhe editar ou excluir.  
  3. Sistema atualiza ou remove registro.  
- **Fluxo de Exceção:**  
  - Hábito não encontrado → sistema emite aviso.  

---

## UC004 — Marcar Hábito Concluído (RF04)
- **Ator Principal:** Usuário autenticado  
- **Precondição:** Hábito cadastrado.  
- **Fluxo Principal:**  
  1. Usuário seleciona hábito do dia.  
  2. Marca como concluído.  
  3. Sistema registra data e atualiza status.  
- **Fluxo de Exceção:**  
  - Hábito já marcado no mesmo dia → sistema emite aviso.  

---

## UC005 — Calcular Streak (RF05)
- **Ator Principal:** Sistema (automático)  
- **Precondição:** Hábito concluído em dias consecutivos.  
- **Fluxo Principal:**  
  1. Sistema verifica hábitos concluídos.  
  2. Calcula sequência de dias consecutivos.  
  3. Atualiza contador de streak do usuário.  
- **Fluxo de Exceção:**  
  - Dia não concluído → streak reinicia.  

---

## UC006 — Exibir Calendário (RF06)
- **Ator Principal:** Usuário autenticado  
- **Precondição:** Hábito cadastrado e registros concluídos.  
- **Fluxo Principal:**  
  1. Usuário acessa calendário.  
  2. Sistema exibe histórico de hábitos realizados.  
  3. Usuário visualiza progresso e streaks.  
- **Fluxo de Exceção:**  
  - Nenhum hábito concluído → calendário vazio.  
