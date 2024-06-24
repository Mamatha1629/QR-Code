function generateQR() {
    let qrText = document.getElementById("qrText");
    let qrcodeContainer = document.getElementById("qrcode");
    let errorMessage = document.getElementById("error-message");
    let imgBox = document.getElementById("imgBox");
    
    if (qrText.value.trim().length > 0) {
        qrcodeContainer.innerHTML = ""; 
        new QRCode(qrcodeContainer, {
            text: qrText.value,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        imgBox.classList.add("show-img");
        errorMessage.style.display = 'none';
    } else {
        qrText.classList.add("shake");
        errorMessage.style.display = 'block';
        setTimeout(() => {
            qrText.classList.remove("shake");
        }, 500);
        imgBox.classList.remove("show-img");
        qrcodeContainer.innerHTML = "";
    }
}
