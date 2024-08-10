import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.send(`
    <html>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danger Design</title>
</head>
<body>
    <h1>Danger Design</h1><br>
    <h3>Descrição</h3>
    <p>Blog de Design destinado a compartilhar matérias sobre design, arte e tecnologia, exibidas em páginas únicas, acessadas através de links vísíveis na página inicial. Cada página possui uma aba de comentários para usuários registrados no final.
    </p>
    <p>Autor: Rodrigo Lima Pereira</p>
</body>
</html>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
