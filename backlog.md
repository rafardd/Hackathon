# Backlog Detalhado do Produto: Stellar PayLink

## Stack de Tecnologia (Definido)

* **Framework Frontend:** `React` com `Vite`
* **Linguagem:** `JavaScript` (ou `TypeScript`, recomendado pelo Scaffold)
* **Toolkit Blockchain:** `Stellar Scaffold`
* **Contrato (Backend):** `Rust` (gerado e compilado para `Wasm`)

## Priorização (MoSCoW)

* **Must:** Essencial para o lançamento. O produto não funciona sem isso.
* **Should:** Importante, mas não vital. Se der tempo, deve ser feito.
* **Could:** Desejável. Fica para o final, se houver tempo.

---

## Epopeia 1: Fundação & Autenticação (MUST-HAVE)

**Objetivo:** Estabelecer a base do dApp, garantir que os utilizadores possam se "logar" usando o padrão Web3 e que a interface seja usável.

### História (Must): Login com Carteira

> Como um utilizador (freelancer ou cliente), eu quero conectar a minha carteira Stellar (Freighter, Albedo, etc.) ao dApp, para que eu possa autenticar-me e interagir com a plataforma.

**Passos (Critérios de Aceite):**

* O cabeçalho do site deve exibir um botão "Conectar Carteira".
* Clicar no botão deve invocar o `Stellar Wallet Kit` (fornecido pelo Scaffold).
* Uma modal deve aparecer permitindo a escolha de diferentes provedores de carteira.
* Após a conexão bem-sucedida, o botão deve exibir o endereço da minha carteira (ou um ícone de perfil).
* O estado da aplicação deve armazenar o meu endereço público para uso futuro.

### História (Must): Interface Base & Facilidade de Uso

> Como um utilizador, eu quero navegar numa interface limpa, intuitiva e moderna, para que eu possa encontrar o que preciso (postar ou pagar) sem frustração.

**Passos (Critérios de Aceite):**

* O design deve ser "atrativo" (usando `Tailwind CSS` ou um sistema de design similar).
* A navegação principal (ex: "Ver Serviços", "Meus Serviços") deve ser clara.
* O layout deve ser responsivo (funcionar bem em desktops e telemóveis).
* Os "call-to-actions" (botões principais) devem ser óbvios e destacar-se.

---

## Epopeia 2: Funcionalidade Central - O "PayLink" (MUST-HAVE)

**Objetivo:** Permitir que freelancers publiquem os seus serviços (PayLinks) e que clientes os paguem. Este é o "core loop" do dApp.

### História (Must): Contrato: Criar PayLink

> Como um desenvolvedor, eu quero que o Smart Contract (Rust) tenha uma função `create_paylink`, para que um freelancer possa salvar um novo serviço on-chain.

**Passos (Critérios de Aceite):**

* O contrato deve ter uma `Struct` (estrutura) para `PayLink` (ex: `id`, `owner_address`, `title`, `description`, `amount`, `token_address`).
* A função `create_paylink` deve receber os dados do `PayLink` como argumentos.
* A função deve verificar se o chamador (`invoker`) é quem diz ser (o `owner_address`).
* O `PayLink` deve ser salvo no armazenamento do contrato (ex: num `Map<u64, PayLink>`).

### História (Must): Frontend: Criar PayLink

> Como um freelancer (utilizador logado), eu quero preencher um formulário simples (Título, Descrição, Preço, Moeda) e submetê-lo, para que o meu serviço seja publicado na plataforma.

**Passos (Critérios de Aceite):**

* Deve existir uma página ou modal "Novo Serviço".
* O formulário deve conter campos para: Título (string), Descrição (string), Preço (número), Moeda (dropdown, ex: XLM, USDC).
* Ao clicar em "Publicar", o frontend deve chamar o `Stellar Wallet Kit` para assinar e enviar a transação para a função `create_paylink` do contrato.
* O utilizador deve ver um indicador de "loading" enquanto a transação é confirmada e uma mensagem de "Sucesso" depois.

### História (Must): Frontend: Ver e Pagar PayLink

> Como um cliente, eu quero ver uma lista de todos os PayLinks publicados e ter um botão para pagar por eles, para que eu possa contratar um freelancer.

**Passos (Critérios de Aceite):**

* Uma página "Explorar Serviços" deve buscar e exibir todos os PayLinks do contrato (chamando uma função `get_all_paylinks`).
* Cada `PayLink` deve ser exibido como um "card" atrativo.
* Cada card deve ter um botão "Pagar (Preço) (Moeda)".
* Ao clicar em "Pagar", o `Stellar Wallet Kit` deve ser invocado para que o cliente aprove a transação de pagamento (transferência do token/XLM) para o `owner_address` do `PayLink`.

---

## Epopeia 3: Perfis & Reputação (SHOULD-HAVE)

**Objetivo:** Construir confiança na plataforma permitindo que utilizadores tenham perfis e avaliem uns aos outros.

### História (Should): Perfis Personalizáveis

> Como um freelancer, eu quero poder adicionar um nome de utilizador, uma biografia curta e um avatar ao meu perfil, para que os clientes possam reconhecer-me e confiar mais em mim.

**Passos (Critérios de Aceite):**

* Uma página "Meu Perfil" deve ter um botão "Editar".
* O formulário de edição permite salvar: `username`, `bio`, `avatar_url`.
* **Nota Técnica:** Como salvar isso? Pode ser num contrato de "perfis" separado ou (para um hackathon) até mesmo numa base de dados off-chain simples.
* O perfil público de um freelancer (visível por clientes) deve exibir essas informações.

### História (Should): Sistema de Avaliação

> Como um cliente, eu quero poder deixar uma avaliação (ex: 1-5 estrelas e um comentário) após completar um pagamento, para que outros utilizadores saibam se o freelancer é confiável.

**Passos (Critérios de Aceite):**

* Após um pagamento ser confirmado, o cliente deve ter a opção de avaliar o `PayLink`.
* O contrato (ou um contrato separado) deve armazenar as avaliações.
* O perfil público do freelancer deve exibir a sua avaliação média.

---

## Epopeia 4: Histórico & Transparência (SHOULD-HAVE)

**Objetivo:** Dar aos utilizadores um registo claro das suas atividades na plataforma.

### História (Should): Histórico de Transações Pessoal

> Como um utilizador (freelancer ou cliente), eu quero ver uma página com o meu histórico de transações (serviços postados, pagamentos feitos, pagamentos recebidos), para que eu possa ter um controlo financeiro.

**Passos (Critérios de Aceite):**

* Uma página "Meu Histórico" deve existir.
* O frontend deve consultar o `Horizon` (API da Stellar) ou o contrato para buscar o histórico da carteira conectada.
* As transações devem ser filtradas para mostrar apenas as relevantes ao dApp.

---

## Epopeia 5: Pagamentos Avançados (COULD-HAVE)

**Objetivo:** Adicionar funcionalidades complexas, mas desejáveis, de pagamento.

### História (Could): Dividir Pagamento (Split Payment)

> Como um freelancer a trabalhar em equipa, eu quero poder configurar o meu PayLink para dividir o pagamento automaticamente entre múltiplas carteiras (ex: 50% para mim, 50% para o meu sócio), para que eu não precise fazer a divisão manualmente.

**Passos (Critérios de Aceite):**

* O formulário "Novo Serviço" teria uma secção opcional "Dividir Pagamento".
* O utilizador pode adicionar endereços de carteira e percentagens (a soma deve ser 100%).
* O Smart Contract deve ter uma lógica de `split_payment` que, ao receber o pagamento, o distribui para as carteiras configuradas.





