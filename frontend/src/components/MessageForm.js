import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

const MessageForm = ({ message, onMessageChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Personalize sua mensagem
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Use as seguintes variáveis na sua mensagem:
        <br />
        {'{nome}'} - Nome do convidado
        <br />
        {'{mesa}'} - Número da mesa
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="Ex: Olá, {nome}! Você está convidado para nosso casamento. Sua mesa será a número {mesa}."
        variant="outlined"
      />
    </Box>
  );
};

export default MessageForm; 