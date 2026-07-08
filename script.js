const nome = document.getElementById("nome");
const cargo = document.getElementById("cargo");
const setor = document.getElementById("setor");
const ramal = document.getElementById("ramal");

function atualizar() {
    document.getElementById("previewNome").innerHTML = nome.value;
    document.getElementById("previewCargo").innerHTML = cargo.value;
    document.getElementById("previewSetor").innerHTML = setor.value;
    document.getElementById("previewRamal").innerHTML = "(61) 3251-" + ramal.value;
}

nome.addEventListener("input", atualizar);
cargo.addEventListener("input", atualizar);
setor.addEventListener("input", atualizar);
ramal.addEventListener("input", atualizar);

async function exportarDivComoJPG(idDiv, nomeArquivo = "assinatura.jpg") {
    const elemento = document.getElementById(idDiv);

    if (!elemento) {
        console.error("Div não encontrada.");
        return;
    }

    const canvas = await html2canvas(elemento, {
        scale: 3,              // melhora a qualidade
        useCORS: true,
        backgroundColor: "#ffffff"
    });

    const imagem = canvas.toDataURL("image/jpeg", 1.0);

    const link = document.createElement("a");
    link.href = imagem;
    link.download = nomeArquivo;
    link.click();
}