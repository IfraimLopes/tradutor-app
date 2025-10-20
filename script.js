
const btn = document.querySelector("#btnTraduzir");
    const entrada = document.querySelector("#textoEntrada");
    const saida = document.querySelector("#textoSaida");
    const origem = document.querySelector("#idiomaOrigem");
    const destino = document.querySelector("#idiomaDestino");

    btn.addEventListener("click", async () => {
      const texto = entrada.value.trim();
      if (texto === "") {
        saida.textContent = "Digite algo para traduzir.";
        return;
      }
      saida.textContent = "Traduzindo...";


      const fetchAPI = async (entrada, saida, destino, origem) => {
         const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${origem}|${destino}`;
    
          const api = await fetch(url)
           const dados = await api.json()
           return dados.responseData.translatedText;
      }

      const traducao = await fetchAPI(entrada.value, saida.value, destino.value, origem.value);
        saida.textContent = traducao
      

  // 🔧 Esse trecho não é necessário — mas se quiser manter o efeito, ok
  setTimeout(() => {
    console.log("Texto traduzido:", texto);
  }, 1200);

    });