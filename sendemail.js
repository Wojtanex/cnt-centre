// Funkcja do wysyłania e-maila za pomocą EmailJS
function sendEmail(walletAddress, amount) {
  // Zainicjalizuj EmailJS (użyj swojego user ID)
  emailjs.init("YOUR_USER_ID");  // Zamień "YOUR_USER_ID" na swój identyfikator

  // Przygotowanie danych do wysłania
  const emailData = {
    to_email: "your_email@example.com", // Twój adres e-mail, na który wysyłasz powiadomienie
    from_email: "no-reply@cntminer.com", // Adres e-mail nadawcy
    wallet_address: walletAddress,
    amount: amount
  };

  // Wyślij e-mail
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailData)
    .then(function(response) {
      console.log("Email sent successfully", response);
    }, function(error) {
      console.error("Failed to send email", error);
    });
}

// Wywołanie funkcji przykładowe (możesz wywołać w kodzie HTML)
// sendEmail('0xYourWalletAddress', 25);
