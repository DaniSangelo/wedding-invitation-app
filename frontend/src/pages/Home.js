import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Alert,
  Snackbar
} from '@mui/material';
import FileUpload from '../components/FileUpload';
import MessageForm from '../components/MessageForm';

const Home = () => {
  const [message, setMessage] = useState('Olá, {nome}! Você está convidado para nosso casamento. Sua mesa será a número {mesa}.');
  const [image, setImage] = useState(null);
  const [guestsFile, setGuestsFile] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleImageSelect = (file) => {
    setImage(file);
    setSnackbar({
      open: true,
      message: 'Imagem selecionada com sucesso!',
      severity: 'success'
    });
  };

  const handleGuestsSelect = (file) => {
    setGuestsFile(file);
    setSnackbar({
      open: true,
      message: 'Lista de convidados selecionada com sucesso!',
      severity: 'success'
    });
  };

  const handleSend = () => {
    // Aqui será implementada a integração com o backend
    setSnackbar({
      open: true,
      message: 'Funcionalidade será implementada em breve!',
      severity: 'info'
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Envio de Convites
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <MessageForm message={message} onMessageChange={setMessage} />
        </Paper>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Imagem do Convite
          </Typography>
          <FileUpload
            onFileSelect={handleImageSelect}
            fileType="imagem"
            accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
          />
          {image && (
            <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
              Imagem selecionada: {image.name}
            </Typography>
          )}
        </Paper>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Lista de Convidados
          </Typography>
          <FileUpload
            onFileSelect={handleGuestsSelect}
            fileType="arquivo JSON"
            accept={{ 'application/json': ['.json'] }}
          />
          {guestsFile && (
            <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
              Arquivo selecionado: {guestsFile.name}
            </Typography>
          )}
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleSend}
            disabled={!image || !guestsFile}
          >
            Enviar Convites
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home; 