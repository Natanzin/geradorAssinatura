const nome = document.getElementById("nome");
const cargo = document.getElementById("cargo");
const setor = document.getElementById("setor");
const ramal = document.getElementById("ramal");

function atualizar() {
    document.getElementById("previewNome").innerHTML = nome.value;
    document.getElementById("previewCargo").innerHTML = cargo.value;
    document.getElementById("previewSetor").innerHTML = setor.value;
    document.getElementById("previewRamal").innerHTML = "Ramal: " + ramal.value;
}

nome.addEventListener("input", atualizar);
cargo.addEventListener("input", atualizar);
setor.addEventListener("input", atualizar);
ramal.addEventListener("input", atualizar);

function gerarHTML() {
    const html = `
<table cellpadding="0" cellspacing="0" border="0"
style="
width:520px;
height:170px;
background-image:url('assinatura.png');
background-size:cover;
font-family:Arial;
position:relative;
">
<tr>
<td style="position:relative;width:520px;height:170px;">
<div style="position:absolute;left:210px;top:38px;font-size:22px;font-weight:bold;">
${nome.value}
</div>
<div style="position:absolute;left:210px;top:70px;font-size:14px;">
${cargo.value}
</div>
<div style="position:absolute;left:210px;top:92px;font-size:13px;">
${setor.value}
</div>
<div style="position:absolute;left:210px;top:114px;font-size:13px;">
Ramal: ${ramal.value}
</div>
</td>
</tr>
</table>
`;
    document.getElementById("codigo").value = html;
}